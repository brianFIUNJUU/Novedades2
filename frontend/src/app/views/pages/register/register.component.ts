import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthenticateService } from '../../../services/authenticate.service';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';


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


  constructor(private authService: AuthenticateService, private firestore: AngularFirestore) {}
  ngOnInit(): void {
    this.authService.getUserType().subscribe(userType => {
      console.log('Tipo de usuario:', userType); // Mostrar el tipo de usuario en la consola
      this.userType = userType ? userType.trim() : ''; // Asigna el tipo de usuario desde el servicio de autenticación y elimina espacios adicionales
    });
    this.getUserData();
  }
  register() {
    // Validación básica de los campos del formulario
    if (this.email === '' || this.password === '' || this.repeatpassword === '' || this.nombre === '') {
      this.message = "Error: Introduzca un nombre, un email válido y contraseñas.";
      this.type = "danger";
      return; // Detener el registro
    }
  
    // Validación de que las contraseñas coincidan
    if (this.password !== this.repeatpassword) {
      this.message = "Error: Las contraseñas no coinciden.";
      this.type = "danger";
      return; // Detener el registro
    }
  
    this.loadingregister = true;
  
     // Verificar si el legajo ya existe en Firestore
     this.firestore.collection('usuarios', ref => ref.where('legajo', '==', this.legajo)).get().subscribe((querySnapshot) => {
      if (!querySnapshot.empty) {
        // El legajo ya existe
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El legajo ya está en uso.',
        });
        this.loadingregister = false;
      } else {
        // Registrar el usuario en Firebase Authentication y crear su perfil en Firestore
        this.authService.register(this.email, this.password, this.nombre, this.perfil, this.legajo, this.estado) // Pasar nombre aquí
          .then(() => {
            // Registro exitoso
            
            this.message = "Usuario registrado correctamente. Revise su correo para confirmar el registro.";
            this.type = "success";
            this.loadingregister = false;
            Swal.fire({
              icon: 'success',
              title: 'Exito',
              text: 'Usuario registrado revise su gmail para confirmar el registro.', 
             confirmButtonText: 'Aceptar'
            });
           
            
        
            
          })
          .catch((error) => {
            // Error en el registro
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
}