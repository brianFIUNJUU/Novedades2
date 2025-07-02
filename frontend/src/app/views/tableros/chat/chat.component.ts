import { Component, OnInit, OnDestroy } from '@angular/core';
import { MensajeService } from '../../../services/mensaje.service';
import { AuthenticateService } from '../../../services/authenticate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  mensajes: any[] = [];
  mensajesRecibidos: any[] = []; // Bandeja de entrada
  mensaje: string = '';
  isChatVisible: boolean = false;
  usuarioNombre: string = '';
  usuarioLegajo: string = '';
  usuarioUid: string = ''; // UID del usuario actual
  usuarioPerfil: string = ''; // Perfil del usuario actual
  receptorLegajo: string  = ''; // Legajo del destinatario
  receptorUid: string = ''; // UID del destinatario
  receptorNombre: string = ''; // Nombre del destinatario
  destinatarios: any[] = []; // Aquí se guardan los usuarios disponibles para chatear
  mensajeHabilitado: boolean = false; // Controla si se puede escribir un mensaje
  mostrarListaDestinatarios: boolean = true; // Controla la visibilidad de la lista de destinatarios

  constructor(
    private mensajeService: MensajeService,
    private authService: AuthenticateService
  ) {}
  ngOnInit(): void {
    // Obtener datos del usuario autenticado
    this.receptorLegajo = '22654'; // Se asigno mi legajo por defecto despues deberia modificarse
    this.authService.getUserInfo().subscribe(userInfo => {
      this.usuarioNombre = userInfo.nombre;
        // Guardamos el perfil
    this.usuarioPerfil = userInfo.perfil;
      this.usuarioLegajo = userInfo.legajo;
      this.usuarioUid = userInfo.uid;
    });

    // Escuchar mensajes en tiempo real
    this.mensajeService.escucharMensajes((nuevoMensaje: any) => {
      if (nuevoMensaje.receptorUid === this.usuarioUid) {
        // Agregar a la bandeja de entrada si el receptor es el usuario actual
        this.mensajesRecibidos.push(nuevoMensaje);
        // También agregar el mensaje a la conversación activa
        if (nuevoMensaje.emisorUid === this.receptorUid || nuevoMensaje.receptorUid === this.receptorUid) {
          this.mensajes.push(nuevoMensaje);
        }
      }
    });
  }
  ngOnDestroy(): void {
    // Limpiar listeners de socket cuando el componente se destruye
    this.mensajeService.ngOnDestroy();
  }

 

  buscarReceptor(): void {
    if (this.receptorLegajo.trim()) {
      this.authService.getUsuarioPorLegajo(this.receptorLegajo).subscribe(
        (usuario) => {
          if (usuario && usuario.uid) {
            this.receptorUid = usuario.uid;
            this.receptorNombre = usuario.nombre;
            
            this.mensajeHabilitado = true; // Habilitar el input de mensaje
  
            // Cargar mensajes después de encontrar al receptor
            this.cargarMensajes(); 
  
            // Swal.fire({
            //   title: 'Usuario encontrado',
            //   text: `Estás chateando con ${this.receptorNombre}`,
            //   icon: 'success'
            // });
          } else {
            this.mensajeHabilitado = false; // Deshabilitar el input si no se encuentra el usuario
            Swal.fire({
              title: 'Error',
              text: 'No se encontró ningún usuario con ese legajo.',
              icon: 'error'
            });
          }
        },
        (error) => {
          console.error(error);
          this.mensajeHabilitado = false;
          Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al buscar al usuario.',
            icon: 'error'
          });
        }
      );
    }
  }
  /** 🔥 MODIFICADO para obtener info completa de usuarios, no solo UIDs */
  obtenerDestinatarios(): void {
    this.mensajeService.getDestinatarios(this.usuarioUid).subscribe(
      (uids: string[]) => {
        const solicitudes = uids.map(uid => this.authService.getUsuarioByUid(uid));
        Promise.all(solicitudes.map(obs => obs.toPromise())).then(usuarios => {
          this.destinatarios = usuarios;
          console.log('Destinatarios con datos:', this.destinatarios);
        }).catch(error => {
          console.error('Error al obtener usuarios por UIDs:', error);
        });
      },
      (error) => {
        console.log('No se encontraron destinatarios');
      }
    );
  }

  

  seleccionarReceptor(usuario: any): void {
    this.receptorUid = usuario.uid;
    this.receptorNombre = `${usuario.nombre} `;
    this.mensajeHabilitado = true;
      // ocultamos la lista al hacer clic
  this.mostrarListaDestinatarios = false;
    this.cargarMensajes(); // Carga los mensajes de este receptor
  }
  
  
  
  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible;
  
    if (this.isChatVisible) {
      // Si se está abriendo el chat
      if (this.usuarioPerfil === 'administrador') {
        this.obtenerDestinatarios();
      } else {
        this.buscarReceptor();
      }
    } else {
      // Solo resetear si es administrador
      if (this.usuarioPerfil === 'administrador') {
        this.resetChat();
      }
    }
  }
  
  
  resetChat(): void {
    this.receptorUid = '';
    this.receptorNombre = '';
    this.receptorLegajo = '';
    this.mensajes = [];
    this.mensaje = '';
    this.mensajeHabilitado = false;
    this.mostrarListaDestinatarios = true;
  }
  
cargarMensajes(): void {
  this.mostrarListaDestinatarios = false; // 👈 Ocultar buscador al cargar mensajes
  this.mensajeService.getMensajes(this.usuarioUid, this.receptorUid).subscribe(
    (data) => {
      console.log('Mensajes obtenidos del backend:', data); // 👀 Ver qué trae el backend
      this.mensajes = data; // Si data es correcto, debería asignarse sin problemas
    },
    (error) => console.error('Error al obtener mensajes', error)
  );
}

enviarMensaje(): void {
  if (this.mensaje.trim() === '') return;

  const nuevoMensaje = {
    mensaje: this.mensaje,
    remitenteUid: this.usuarioUid,
    destinatarioUid: this.receptorUid,
    fecha: new Date()
  };

  console.log('Mensaje antes de enviar:', nuevoMensaje); // Verificar qué se está enviando

  this.mensajeService.enviarMensaje(nuevoMensaje).subscribe(
    (response) => {
      console.log('Mensaje enviado:', response); // Ver qué devuelve el backend
      this.mensajes.push(response.mensaje); // Extraer el objeto 'mensaje'
      this.mensaje = '';
    },
    (error) => {
      console.error('Error al enviar mensaje', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al enviar el mensaje.',
        icon: 'error'
      });
    }
  );
}

}
