import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/estado';  // Asegúrate de que la ruta sea correcta
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    // this.hostBase = 'http://localhost:3000/api/estado';
    this.hostBase = environment.apiUrl + '/estado'; // URL base del backend
  }

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todos los estados
  getEstados(): Observable<any> {
    const token = this.getAuthToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/', httpOptions);
  }

  // Obtener un estado por ID de novedad y persona
  getEstadoByNovedadAndPersona(novedadId: number, personaId: number): Observable<any> {
    const token = this.getAuthToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(`${this.hostBase}/novedad/${novedadId}/persona/${personaId}`, httpOptions);
  }

  // Crear un nuevo estado
  createEstado(estado: Estado): Observable<any> {
    const token = this.getAuthToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    let body: any = JSON.stringify(estado);
    return this._http.post(this.hostBase, body, httpOptions); // Asegúrate de que la URL sea correcta
  }

  // Obtener un estado por ID
  getEstado(id: number): Observable<any> {
    const token = this.getAuthToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/' + id, httpOptions);
  }

  getEstadoById(id: number): Observable<Estado> {
    const token = this.getAuthToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get<Estado>(this.hostBase + '/' + id, httpOptions);
  }

  // Editar un estado
  updateEstado(estado: Estado): Observable<any> {
    const token = this.getAuthToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    let body: any = JSON.stringify(estado);
    return this._http.put(this.hostBase + '/' + estado.id, body, httpOptions);
  }

  // Eliminar un estado
  deleteEstado(novedadId: number, personaId: number): Observable<any> {
    const token = this.getAuthToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.delete(`${this.hostBase}/${novedadId}/${personaId}`, httpOptions);
  }
}
