import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  private apiUrl = environment.apiUrl + '/mensaje'; // URL base del backend para mensajes
  private socket: Socket; // Conexión de socket

  constructor(private http: HttpClient) {
    this.socket = io(environment.apiUrl); // Aquí se conecta al backend
  }

  // Método para obtener todos los mensajes
  getMensajes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para enviar un nuevo mensaje
  enviarMensaje(mensaje: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mensaje, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  // Método para escuchar los mensajes en tiempo real
  escucharMensajes(callback: (mensaje: any) => void): void {
    this.socket.on('nuevoMensaje', (mensaje: any) => {
      callback(mensaje); // Ejecuta el callback cuando llega un nuevo mensaje
    });
  }

  // Método para emitir un mensaje
  emitirMensaje(mensaje: any): void {
    this.socket.emit('enviarMensaje', mensaje); // Enviar mensaje al servidor
  }
  ngOnDestroy() {
    this.socket.off('nuevoMensaje'); // Elimina el listener para evitar fugas de memoria
  }
}

