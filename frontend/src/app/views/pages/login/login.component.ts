import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthenticateService } from '../../../services/authenticate.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  // Para forgot
  public visible = false;
  public emailforgot: string = '';
  public messagemodal: string = '';
  public typemodal: string = '';
  public loadingforgot: boolean = false;

  constructor(private authService: AuthenticateService, private router: Router) { }

  login() {
    if (this.email === '' || this.password === '') {
      this.message = "Error: Ingresa una dirección de correo electrónico o contraseña válida.";
      this.type = "danger";
    } else {
      this.loadinglogin = true;
      this.authService.login(this.email, this.password)
        .then(() => {
          this.loadinglogin = false;
          this.router.navigate(['/dashboard']);
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

  toggleModal() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

     forgotpassword(): void {
      if (this.emailforgot === '') {
        this.messagemodal = "Error: Ingresa una dirección de correo electrónico válida.";
        this.typemodal = "danger";
      } else {
        this.loadingforgot = true;
        this.authService.forgotPassword(this.emailforgot)
          .then(() => {
            this.messagemodal = "Correo de restablecimiento de contraseña enviado.";
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
  }