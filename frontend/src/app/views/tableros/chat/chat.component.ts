import { Component, OnInit } from '@angular/core';
import {MensajeService} from '../../../services/mensaje.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {

  mensajes: any[] = [];
  mensaje: string = '';
  isChatVisible: boolean = false; // Controlar si el chat está visible o no

  constructor(private mensajeService: MensajeService) {}

  ngOnInit(): void {
    // Cargar los mensajes al inicio
    this.cargarMensajes();

    // Escuchar los mensajes nuevos en tiempo real
    this.mensajeService.escucharMensajes((nuevoMensaje: any) => {
      this.mensajes.push(nuevoMensaje); // Añadir el nuevo mensaje al array
    });
  }

  cargarMensajes(): void {
    this.mensajeService.getMensajes().subscribe(
      (data) => {
        this.mensajes = data;
      },
      (error) => {
        console.error('Error al obtener mensajes', error);
      }
    );
  }

  enviarMensaje(): void {
    if (this.mensaje.trim()) {
      const nuevoMensaje = {
        texto: this.mensaje,
        fecha: new Date(),
        usuarioId: 'usuario1', // Ajusta según el usuario real
      };

      this.mensajeService.emitirMensaje(nuevoMensaje); // Enviar mensaje al backend con Socket.IO
      this.mensaje = ''; // Limpiar el campo de entrada
    }
  }
  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible; // Alternar la visibilidad del chat
  }
}