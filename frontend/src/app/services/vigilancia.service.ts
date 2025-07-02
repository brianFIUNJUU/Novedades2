import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vigilancia } from '../models/vigilancia'; // Ajusta la ruta según tu estructura de proyecto
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VigilanciaService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    // this.hostBase = 'http://localhost:3000/api/vigilancia'; // URL base para la API de Vigilancia
    this.hostBase = environment.apiUrl + '/vigilancia'; // URL base del backend
  }

  // Método para obtener el token de autenticación desde el localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todas las vigilancias
  getVigilancias(): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/', httpOptions);
  }

  // Obtener una vigilancia por ID
  getVigilancia(id: string): Observable<Vigilancia> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get<Vigilancia>(`${this.hostBase}/${id}`, httpOptions);
  }

  // Crear una nueva vigilancia
  createVigilancia(data: FormData): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.post(this.hostBase + '/', data, httpOptions);
  }

  // Editar una vigilancia
  editVigilancia(id: string, data: FormData): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.put(this.hostBase + '/' + id, data, httpOptions);
  }

  // Eliminar una vigilancia
  deleteVigilancia(id: string): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.delete(this.hostBase + '/' + id, httpOptions);
  }

  // Obtener la URL de un archivo de vigilancia
  getFileUrl(fileName: string): Observable<{ fileUrl: string }> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get<{ fileUrl: string }>(`${this.hostBase}/file/${fileName}`, httpOptions);
  }
}
