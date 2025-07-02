import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class MensajeService implements OnDestroy {
  private apiUrl = environment.apiUrl + '/mensaje'; // URL base del backend para mensajes
  private socket: Socket; // Conexión de socket

  constructor(private http: HttpClient) {
    this.socket = io(environment.apiUrl, {
      transports: ['websocket'], // Usar solo WebSocket
      secure: true, // Importante si usas HTTPS
      rejectUnauthorized: false, // Evita problemas con certificados no confiables
    });
  }

  // Método para obtener el token de autenticación desde el localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener los mensajes entre remitente y destinatario
  getMensajes(remitenteUid: string, destinatarioUid: string): Observable<any> {
    const url = `${this.apiUrl}?remitenteUid=${remitenteUid}&destinatarioUid=${destinatarioUid}`;
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<any>(url, httpOptions);
  }
// mensaje.service.ts
getDestinatarios(remitenteUid: string): Observable<any[]> {
  const url = `${this.apiUrl}/destinatarios/${remitenteUid}`;
  const token = this.getAuthToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    }),
  };
  return this.http.get<any[]>(url, httpOptions);
}


  // Método para enviar un nuevo mensaje
  enviarMensaje(mensaje: any): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.post<any>(this.apiUrl, mensaje, httpOptions);
  }

  // Método para escuchar los mensajes en tiempo real
  escucharMensajes(callback: (mensaje: any) => void): void {
    this.socket.on('nuevoMensaje', (mensaje: any) => {
      callback(mensaje); // Ejecuta el callback cuando llega un nuevo mensaje
    });

    this.socket.on('mensajeActualizado', (mensaje: any) => {
      callback(mensaje); // Ejecuta el callback cuando un mensaje es actualizado
    });

    this.socket.on('mensajeEliminado', (id: any) => {
      callback(id); // Ejecuta el callback cuando un mensaje es eliminado
    });
  }

  // Método para emitir un mensaje
  emitirMensaje(mensaje: any): void {
    this.socket.emit('enviarMensaje', mensaje); // Enviar mensaje al servidor
  }

  // Eliminar los listeners cuando el servicio se destruya
  ngOnDestroy(): void {
    this.socket.off('nuevoMensaje');
    this.socket.off('mensajeActualizado');
    this.socket.off('mensajeEliminado');
  }
}
