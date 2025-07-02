import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthenticateService } from '../../../services/authenticate.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import {  applyActionCode } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { getAuth,  confirmPasswordReset ,signInWithEmailAndPassword, sendEmailVerification, UserCredential } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class LoginComponent {
  // Para login
  public email: string = '';

  public password: string = '';
  public message: string = '';
  public type: string = '';
  public loadinglogin: boolean = false;
   // ...tus variables existentes...
  public resetMode = false;
  public newPassword = '';
  public oobCode = '';
  // Para forgot
  public visible = false;
  public emailforgot: string = '';
  public messagemodal: string = '';
  public typemodal: string = '';
  public loadingforgot: boolean = false;
  private auth = getAuth();

  constructor(private authService: AuthenticateService, private router: Router,  private route: ActivatedRoute) { 
     // Procesar verificación de email si hay parámetros en la URL
    this.route.queryParams.subscribe(params => {
    const mode = params['mode'];
    const oobCode = params['oobCode'];
       if (mode === 'verifyEmail' && oobCode) {
      const auth = getAuth();
      applyActionCode(auth, oobCode)
        .then(async () => {
          // Recargar el usuario si está logueado
          if (auth.currentUser) {
            await auth.currentUser.reload();
          }
                   Swal.fire(
            '¡Correo verificado!',
     
             'Tu correo electrónico ha sido verificado correctamente. Ahora puedes iniciar sesión con la contraseña "000+legajo" o cambiar la misma haciendo click en el enlace "olvide mi contraseña".',
            'success'
          );     this.router.navigate([], { queryParams: {} });
        })
        .catch((error) => {
          console.error('Error en applyActionCode:', error);
          Swal.fire('Error', 'El enlace de verificación no es válido o ha expirado.', 'error');
        });
    }
      // Restablecimiento de contraseña
      if (mode === 'resetPassword' && oobCode) {
        this.resetMode = true;
        this.oobCode = oobCode;
      }
  });
}login() {
  if (this.email === '' || this.password === '') {
    this.message = "Error: Ingresa una dirección de correo electrónico o contraseña válida.";
    this.type = "danger";
  } else {
    this.loadinglogin = true;
    this.authService.login(this.email, this.password)
      .then(() => {
        this.authService.getCurrentUser()
          .then(async user => {
            if (user) {
              await user.reload();
              if (!user.emailVerified) {
                this.loadinglogin = false;
                Swal.fire({
                  title: 'Email no confirmado',
                  text: 'Tu email aún no ha sido confirmado. Revisa la bandeja de entrada con la leyenda "noreply" y haz click en el link para confirmar el email. Si no lo encuentras, revisa en spam.',
                  icon: 'warning',
                  confirmButtonText: 'Entendido'
                });
                return;
              }
              // Ahora getUsuarioByUid devuelve un Observable, así que solo suscríbete
              this.authService.getUsuarioByUid(user.uid).subscribe(usuario => {
                localStorage.setItem('userType', usuario.perfil);
                user.getIdToken()
                  .then((idToken) => {
                    localStorage.setItem('token', idToken);
                    this.router.navigate(['/dashboard']);
                  })
                  .catch(error => {
                    console.error('Error al obtener el token:', error);
                    this.message = "Error al obtener el token.";
                    this.type = "danger";
                  });
              }, error => {
                this.loadinglogin = false;
                this.message = "Error al obtener perfil de usuario.";
                this.type = "danger";
              });
            } else {
              this.loadinglogin = false;
              this.message = "Error: Usuario no autenticado.";
              this.type = "danger";
            }
          })
          .catch(error => {
            this.loadinglogin = false;
            console.error('Error al obtener usuario:', error);
            this.message = "Error: " + error.message;
            this.type = "danger";
          });
      })
      .catch((error) => {
        this.loadinglogin = false;
        if (error.code === 'auth/email-not-verified') {
          Swal.fire({
            title: 'Email no confirmado',
            text: 'Tu email aún no ha sido confirmado. Revisa la bandeja de entrada con la leyenda "noreply" y haz click en el link para confirmar el email. Si no lo encuentras, revisa en spam.',
            icon: 'warning',
            confirmButtonText: 'Entendido'
          });
        } else if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
          Swal.fire({
            title: 'Credenciales inválidas',
            text: 'Por favor ingresa los datos correctamente. Si no te has registrado, comunícate con el administrador del sistema.',
            icon: 'warning',
            confirmButtonText: 'Entendido'
          });
        } else {
          this.message = "Error: " + error.message;
          this.type = "danger";
        }
      });
  }
}
  
  verificarCorreo() {
    this.authService.verificarCorreo()
      .then(() => {
        Swal.fire('Correo enviado', 'Revisa tu bandeja de entrada para verificar tu email.', 'success');
      })
      .catch((error) => {
        Swal.fire('Error', 'No se pudo enviar el correo de verificación: ' + error.message, 'error');
      });
  }
  

  toggleModal() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
// le
     forgotpassword(): void {
      if (this.emailforgot === '') {
        this.messagemodal = "Error: Ingresa una dirección de correo electrónico válida.";
        this.typemodal = "danger";
      } else {
        this.loadingforgot = true;
        this.authService.forgotPassword(this.emailforgot)
          .then(() => {
            this.messagemodal = "Correo de restablecimiento de contraseña enviado, revise la bandeja de entrada de su gmail.";
            this.typemodal = "success";
            this.loadingforgot = false;
          })
          .catch((error) => {
            this.messagemodal = 'Error: ' + error.message;
            this.typemodal = "danger";
            this.loadingforgot = false;
          });
      }
    }
     resetPassword() {
    if (!this.newPassword) {
      Swal.fire('Error', 'Debes ingresar una nueva contraseña.', 'error');
      return;
    }
    const auth = getAuth();
    confirmPasswordReset(auth, this.oobCode, this.newPassword)
      .then(() => {
        Swal.fire('¡Contraseña cambiada!', 'Ahora puedes iniciar sesión con tu nueva contraseña.', 'success');
        this.resetMode = false;
        this.router.navigate(['/login']);
      })
      .catch(error => {
        Swal.fire('Error', 'No se pudo cambiar la contraseña: ' + error.message, 'error');
      });
  }
  }