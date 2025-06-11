  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  import { initializeApp } from 'firebase/app';
  import { getAuth, deleteUser, User, UserCredential } from 'firebase/auth';
  import { environment } from '../environments/environment';
  import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendEmailVerification, 
    sendPasswordResetEmail 
  } from 'firebase/auth';
  import { AngularFirestore } from '@angular/fire/compat/firestore';
  import { HttpClient } from '@angular/common/http';
  import { Observable, forkJoin, of } from 'rxjs';
  import { Usuario } from '../models/Usuario';
  import { map, switchMap } from 'rxjs/operators';
  import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
  import { getFirestore } from 'firebase/firestore';
  import { HttpHeaders } from '@angular/common/http';
  import { from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';



  @Injectable({
    providedIn: 'root'
  })
  export class AuthenticateService {
    private app = initializeApp(environment.firebase);
    private auth = getAuth(this.app);
    private apiUrl = environment.apiUrl 
    constructor(
      private router: Router, 
      public firestore: AngularFirestore, 
      private http: HttpClient,
      private afAuth: AngularFireAuth,
      private httpClient: HttpClient,
      
    ) {}
    
    /**
     * Registro de un nuevo usuario en Firebase Authentication y Firestore
     * @param email
     * @param password
     */
    
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('Token desde localStorage:', token);  // Verifica si el token se está recuperando correctamente
    return token;
  }
  getUsuarioPorLegajo(legajo: string): Observable<any> {
    const token = this.getAuthToken();  // Obtener el token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);  // Agregar el token a los encabezados
    return this.http.get<any>(`${this.apiUrl}/users/legajo/${legajo}`, { headers });
  }

  
  getUsuarioByUid(uid: string): Observable<Usuario> {
    return from(this.getFreshAuthToken()).pipe(
      switchMap(token => {
        if (!token) throw new Error('No autenticado');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<Usuario>(`${this.apiUrl}/users/uid/${uid}`, { headers });
      })
    );
  }
  async getFreshAuthToken(): Promise<string | null> {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      return await user.getIdToken(true); // true fuerza la renovación
    }
    return null;
  }
    // Método para actualiza un usuario por legajo
    actualizarUsuarioPorLegajo(legajo: string, nuevosDatos: any): Observable<any> {
      const token = this.getAuthToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.put<any>(`${this.apiUrl}/users/legajo/${legajo}`, nuevosDatos, { headers });
    }

    register(email: string, password: string, nombre: string, perfil: string, legajo: string, estado: boolean): Promise<void> {
      return createUserWithEmailAndPassword(this.auth, email, password)
        .then((result) => {
          sendEmailVerification(result.user);
    
          // Datos del usuario a enviar al backend (Firestore)
          const usuarioData: Usuario = {
            legajo: legajo,
            estado: estado,              // Estado predeterminado
            id: result.user.uid,               // Asegúrate de incluir el 'id'
            uid: result.user.uid,              // También el 'uid' desde Firebase
            nombre: nombre, // Nombre (puedes solicitarlo en otro momento)
            email: result.user.email || '',    // Email verificado por Firebase
            usuario: email.split('@')[0],      // Generar nombre de usuario
            perfil: perfil,                 // Perfil predeterminado
            password: password                 // Solo si es necesario almacenarlo (normalmente no es seguro)
          };
    
          // Guardar los datos del usuario en Firestore
          return this.createUsuario(usuarioData).then(() => {
            return this.auth.signOut().then(() => {
              // Obtener el token antes de hacer la solicitud
              const token = this.getAuthToken(); // Llamamos a la función getAuthToken para obtener el token
    
              // Verificamos si el token existe antes de hacer la solicitud HTTP
              if (token) {
                return this.http.post<any>(`${this.apiUrl}/usuarios/crear`, usuarioData, {
                  headers: new HttpHeaders({
                    'Authorization': `Bearer ${token}`  // Ahora pasamos el token en el header
                  })
                }).toPromise().then(() => {
                  // Redirigir al login después de desloguear
                  this.router.navigate(['/login']);
                });
              } else {
                throw new Error('Token de autenticación no encontrado');
              }
            });
          });
        })
        .catch((error) => {
          console.error('Error en el registro: ', error);
          throw error;
        });
    }
    
   // authenticate.service.ts



    /**
     * Guardar usuario en Firestore
     * @param usuarioData
     */
    createUsuario(usuarioData: Usuario): Promise<void> {
      return this.firestore.collection('usuarios').doc(usuarioData.uid).set(usuarioData);
    }

    /**
     * Eliminar usuario de Firestore y Firebase Auth
     * @param uid
     * Iniciar sesión
     * @param email
     * @param password
     */

    login(email: string, password: string): Promise<UserCredential> {
      return signInWithEmailAndPassword(this.auth, email, password)
        .then(async (result) => {
          const user = result.user;
  
          // Verificar si el correo es el del administrador
          if (email === '41409926@fi.unju.edu.ar') {
            // Crear usuario con perfil "administrador" si no existe en Firestore
            const firestoreInstance = getFirestore(this.app);
            const userRef = doc(firestoreInstance, 'usuarios', user.uid);  // Cambié el método a doc() para usar Firestore v9+
            const userSnap = await getDoc(userRef);
  
            if (!userSnap.exists()) {
              await setDoc(userRef, {
                email: user.email,
                perfil: 'administrador',
                creadoEn: new Date(),
                verificado: user.emailVerified
              });
              console.log("Usuario 'administrador' creado en Firestore.");
            }
  
            return result; // Retorna el resultado para el componente
          }
  
          // Si el correo no es el del administrador, continuar con el flujo normal
          if (!user.emailVerified) {
            await sendEmailVerification(user);
            this.logout();
            throw new Error('auth/email-not-verified');
          }
  
          // Cambia el campo `estado` a true en Firestore después de iniciar sesión
          await this.updateUserStatus2(user.uid, true);  // Actualización a `estado: true`
  
          return result; // Retorna el resultado para el componente
        })
        .catch((error) => {
          console.error('Error en el inicio de sesión: ', error);
  
          if (error.code === 'auth/too-many-requests') {
            throw new Error('Revisa la bandeja de entrada de tu Gmail para verificarlo');
          } else if (error.code === 'auth/email-not-verified') {
            throw new Error('El correo electrónico no está verificado.');
          } else {
            throw new Error('Error en el inicio de sesión: ' + error.message);
          }
        });
    }//solucion
  
    // Método para actualizar el campo `estado` en Firestore
    private updateUserStatus2(uid: string, estado: boolean): Promise<void> {
      const userRef = this.firestore.collection('usuarios').doc(uid).ref;
      return setDoc(userRef, { estado: estado }, { merge: true }); // Cambié el campo `estado` a true
    }

    //este sirve para actualizar la variable estado cuando se loguee
    updateUserStatus(uid: string, estado: boolean): Promise<void> {
      return this.firestore.collection('usuarios').doc(uid).update({ estado: estado })
        .then(() => {
          console.log('Estado actualizado a', estado);
        })
        .catch((error) => {
          console.error('Error al actualizar el estado del usuario:', error);
          throw error;
        });
    }
    
    /**
     * Cerrar sesión
     */
    logout() {
      this.auth.signOut();
    }

    /**
     * Restablecer contraseña
     * @param email
     */
    forgotPassword(email: string): Promise<void> {
      return sendPasswordResetEmail(this.auth, email)
        .catch((error) => {
          console.error('Error en el restablecimiento de contraseña: ', error);
          throw error;
        });
    }

    /**
     * Obtener UID del usuario autenticado
     */
    getCurrentUserUID(): string | null {
      return this.auth.currentUser ? this.auth.currentUser.uid : null;
    }

    /**
     * Verificar autenticación del usuario
     */
    isAuthenticated(): boolean {
      return this.auth.currentUser !== null;
    }
 getCurrentUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    const unsubscribe = this.auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}
// getusercurrent no esra funcion
    /**
     * Obtener usuario por ID desde Firestore
     * @param id
     */
    getUsuario(id: string): Observable<Usuario | null> {
      return this.firestore.collection<Usuario>('usuarios').doc(id).valueChanges().pipe(
        map(user => user || null)
      );
    }

    /**
     * Obtener lista de usuarios autenticados y combinarlos con usuarios de Firestore
     */
    getUsuariosCombinados(): Observable<any[]> {
      const firestoreUsuarios$ = this.firestore.collection<Usuario>('usuarios').valueChanges();
      const authUsuarios$ = this.getUsuariosAutenticados();
    
      return forkJoin([firestoreUsuarios$, authUsuarios$]).pipe(
        map(([firestoreUsuarios, authUsuarios]) => {
          return authUsuarios.map(authUser => {
            const firestoreUser = firestoreUsuarios.find(firestoreUser => firestoreUser.uid === authUser.uid);
            
            return {
              uid: authUser.uid,
              email: authUser.email,
              nombre: firestoreUser ? firestoreUser.nombre : 'Nombre no encontrado'
            };
          });
        })
      );
    }
    
    eliminarUsuario(uid: string): Observable<void> {
      const token = this.getAuthToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete<void>(`${this.apiUrl}/users/${uid}`, { headers });
    }
     // Nuevo método para enviar el correo de verificación
     async verificarCorreo(): Promise<void> {
      const usuario = this.auth.currentUser;
      if (usuario) {
        await usuario.reload(); // Recargar datos del usuario para asegurarse de que está actualizado
        if (!usuario.emailVerified) { // Verificar si el email aún no ha sido confirmado
          try {
            await sendEmailVerification(usuario);
            console.log('Correo de verificación reenviado.');
          } catch (error) {
            console.error('Error al enviar el correo de verificación:', error);
            throw error;
          }
        } else {
          console.log('El correo ya está verificado.');
        }
      } else {
        console.log('No hay usuario autenticado.');
      }
    }
    
    /**
     * Obtener lista de usuarios autenticados desde backend
     */
    getUsuariosAutenticados(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/users`); // Se usa la URL correcta
    }
    // getUserType(): Observable<string | null> {
    //   const uid = this.getCurrentUserUID();
    //   if (uid) {
    //     return this.firestore.collection<Usuario>('usuarios').doc(uid).valueChanges().pipe(
    //       map(user => user ? user.perfil : null)
    //     );
    //   } else {
    //     return of(null);
    //   }
    // }
    getUserType(): Observable<string | null> {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        return this.firestore.collection('usuarios').doc(user.uid).valueChanges().pipe(
          map((userData: any) => userData ? userData.perfil : null)
        );
      } else {
        return of(null);
      }
    }
    
        getCurrentUserTypeSync(): string | null {
      // Por ejemplo, si guardas el tipo de usuario en localStorage:
      return localStorage.getItem('userType');
    }
    getUserInfo(): Observable<any> {
      return this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.firestore.collection('usuarios').doc(user.uid).valueChanges();
          } else {
            return of(null);
          }
        })
      );
    }
  } 
