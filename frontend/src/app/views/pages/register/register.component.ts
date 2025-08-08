import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthenticateService } from '../../../services/authenticate.service';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';
import { Usuario } from '../../../models/Usuario';
import { UnidadRegional } from '../../../models/unidad_regional';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { DependenciaService } from '../../../services/dependencia.service';
import { PersonalService } from '../../../services/personal.service';
import { Personal } from '../../../models/personal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class RegisterComponent {
  public email: string = '';
  public password: string = '';
  public repeatpassword: string = '';
  public perfil: string = 'usuario'; // Por defecto, el perfil será "usuario"
  public nombre: string = ''; // Agregar la propiedad nombre}
  public legajo: string='';
  public estado:boolean = false;
  public message: string = '';
  public type: string = '';
  public loadingregister: boolean = false;
  userType: string = ''; // Variable para almacenar el tipo de usuario
  public userData: any = null; // Variable para almacenar los datos del usuario
  public unidad_regional_id: string = '';
public dependencia_id: string = '';
public unidadesRegionales: any[] = [];
public dependencias: any[] = [];
public unidad_regional_nombre: string = '';
public dependencia_nombre: string = '';
public personal: any = {}; // Agrega la propiedad 'personal'

  constructor(private authService: AuthenticateService, private firestore: AngularFirestore
    , private unidadRegionalService: UnidadRegionalService, private dependenciaService: DependenciaService ,
    private personalService: PersonalService
  ) {}
  ngOnInit(): void {
    this.authService.getUserType().subscribe(userType => {
      console.log('Tipo de usuario:', userType); // Mostrar el tipo de usuario en la consola
      this.userType = userType ? userType.trim() : ''; // Asigna el tipo de usuario desde el servicio de autenticación y elimina espacios adicionales
    });
    this.getUserData();
    this.cargarUnidadesRegionales();
  }
  

onUnidadRegionalChange(event: any) {
  const selectedId = +event.target.value;
  const unidad = this.unidadesRegionales.find(u => Number(u.id) === selectedId);
  this.unidad_regional_nombre = unidad ? unidad.unidad_regional : '';
  this.cargarDependencias(selectedId);
}
onDependenciaChange() {
  const dependenciaObj = this.dependencias.find(d => d.id == this.dependencia_id);
  this.dependencia_nombre = dependenciaObj ? dependenciaObj.juridiccion : '';
}
  cargarUnidadesRegionales(): void {
    this.unidadRegionalService.getUnidadesRegionales().subscribe(
      data => {
        this.unidadesRegionales = data;
      },
      error => {
        Swal.fire('Error', 'Error al cargar unidades regionales: ' + error.message, 'error');
      }
    );
  }

  cargarDependencias(unidadRegionalId: number): void {
    this.dependenciaService.getDependenciasByUnidadRegional(unidadRegionalId).subscribe(
      data => {
        this.dependencias = data;
      },
      error => {
        console.error('Error al obtener las dependencias:', error.message);
        Swal.fire('Error', 'Error al obtener dependencias: ' + error.message, 'error');
      }
    );
  }
// ...en el método REGITER DEBE NO SOLO REGISTRAR SINO TAMBIEN GUARDAR Y MOFICIAR PERSONAL DE LA BASE DE DATOS...
register() {
  // ...validaciones previas...

  this.loadingregister = true;

  // Obtener nombres de unidad regional y dependencia
  const unidadObj = this.unidadesRegionales.find(u => u.id == this.unidad_regional_id);
  const dependenciaObj = this.dependencias.find(d => d.id == this.dependencia_id);
  this.unidad_regional_nombre = unidadObj ? unidadObj.unidad_regional : '';
  this.dependencia_nombre = dependenciaObj ? dependenciaObj.juridiccion : '';

  // Verificar si el legajo ya existe en Firestore
  this.firestore.collection('usuarios', ref => ref.where('legajo', '==', this.legajo)).get().subscribe((querySnapshot) => {
    if (!querySnapshot.empty) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El legajo ya está en uso.',
      });
      this.loadingregister = false;
    } else {
      // Registrar el usuario en Firebase Authentication y crear su perfil en Firestore
      this.authService.register(
        this.email,
        this.password,
        this.nombre,
        this.perfil,
        this.legajo,
        this.estado,
        this.unidad_regional_id,
        this.unidad_regional_nombre,
        this.dependencia_id,
        this.dependencia_nombre
      )
      .then(() => {
        // Intentar actualizar el personal por legajo
        const datosActualizados: Partial<Personal> = {
         
          email: this.email,
          DependenciaId: Number(this.dependencia_id),
          dependencia_nombre: this.dependencia_nombre,
          unidad_regional_id: Number(this.unidad_regional_id)
        };

        this.personalService.updatePersonalByLegajo(this.legajo, datosActualizados as Personal).subscribe(
          (data) => {
            // Personal encontrado y actualizado
            this.message = "Usuario y personal registrado correctamente. Revise su correo para confirmar el registro.";
            this.type = "success";
            this.loadingregister = false;
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: this.message,
              confirmButtonText: 'Aceptar'
            });
          },
          (error) => {
            // Personal no existe
            this.message = "Usuario registrado correctamente, personal no existente. Revise su correo y luego revise sus datos personales.";
            this.type = "warning";
            this.loadingregister = false;
            Swal.fire({
              icon: 'warning',
              title: 'Atención',
              text: this.message,
              confirmButtonText: 'Aceptar'
            });
          }
        );
      })
      .catch((error) => {
        this.message = `Error: ${error.message}`;
        this.type = "danger";
        this.loadingregister = false;
      });
    }
  });
}
  getUserData() {
    this.authService.getCurrentUser().then(user => {
      if (user) {
        this.firestore.collection('usuarios').doc(user.uid).get().subscribe((doc) => {
        if (doc.exists) {
          this.userData = doc.data();
          console.log('Datos del usuario:', this.userData);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se encontraron datos del usuario.',
          });
        }
      }, (error) => {
        console.error('Error al obtener los datos del usuario:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al obtener los datos del usuario.',
        });
      });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No hay un usuario logueado.',
        });
      }
    });
  }

  buscarUsuario() {
    if (!this.legajo) {
      Swal.fire({
        icon: 'warning',
        title: 'Atención',
        text: 'Ingrese un número de legajo.',
      });
      return;
    }
  
    this.firestore.collection('usuarios', ref => ref.where('legajo', '==', this.legajo))
      .get()
      .subscribe(querySnapshot => {
        if (!querySnapshot.empty) {
          // Convertir a tipo Usuario
          const usuarioData = querySnapshot.docs[0].data() as Usuario;
  
          // Asignamos los valores a las propiedades del componente
          this.nombre = usuarioData.nombre || '';
          this.email = usuarioData.email || '';  // Puede ser null
          this.perfil = usuarioData.perfil || 'usuario';
          this.legajo = usuarioData.legajo || '';
       
  
          Swal.fire({
            icon: 'success',
            title: 'Usuario encontrado',
            text: `Datos cargados correctamente.`,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario no encontrado.',
          });
        }
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error al obtener los datos: ${error.message}`,
        });
      });
  }
  
  

  actualizarDatos() {
    if (!this.legajo) {
      Swal.fire({
        icon: 'warning',
        title: 'Atención',
        text: 'Ingrese un legajo válido para actualizar.',
      });
      return;
    }
  
    // Buscar el documento con el legajo como campo
    this.firestore.collection('usuarios', ref => ref.where('legajo', '==', this.legajo))
      .get()
      .subscribe(querySnapshot => {
        if (!querySnapshot.empty) {
          const usuarioDoc = querySnapshot.docs[0];
          const usuarioId = usuarioDoc.id;
  
          // Actualizar datos del usuario
          this.firestore.collection('usuarios').doc(usuarioId).update({
            nombre: this.nombre,
            email: this.email,
            perfil: this.perfil,
            unidad_regional_id: this.unidad_regional_id,
            unidad_regional_nombre: this.unidad_regional_nombre,
            dependencia_id: this.dependencia_id,
            dependencia_nombre: this.dependencia_nombre
          }).then(() => {
            // Actualizar también el personal por legajo
            const datosActualizados: Partial<Personal> = {
              
              email: this.email,
              DependenciaId: Number(this.dependencia_id),
              dependencia_nombre: this.dependencia_nombre,
              unidad_regional_id: Number(this.unidad_regional_id)
            };
  
            this.personalService.updatePersonalByLegajo(this.legajo, datosActualizados as Personal).subscribe(
              (data) => {
                Swal.fire({
                  icon: 'success',
                  title: 'Éxito',
                  text: 'Datos de usuario y personal actualizados correctamente.',
                });
              },
              (error) => {
                Swal.fire({
                  icon: 'warning',
                  title: 'Atención',
                  text: 'Usuario actualizado, pero el personal no existe. Revise sus datos personales.',
                });
              }
            );
          }).catch(error => {
            console.log('Error al actualizar:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: `No se pudo actualizar: ${error.message}`,
            });
          });
        } else {
          console.log('No se encontró el documento con legajo:', this.legajo);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo encontrar el usuario con el legajo proporcionado.',
          });
        }
      }, (error) => {
        console.log('Error al obtener documento:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error al obtener los datos: ${error.message}`,
        });
      });
  }


     limpiarLegajo(event: any) {
      // Solo permite números
      const soloNumeros = event.target.value.replace(/[^0-9]/g, '');
      this.legajo = soloNumeros;
      event.target.value = soloNumeros; // fuerza el valor en el input
    }



}  


