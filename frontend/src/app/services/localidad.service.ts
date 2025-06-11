import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Localidad } from '../models/localidad';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {
  // private apiUrl = 'http://localhost:3000/api/localidad'; // URL base del backend
  private apiUrl = environment.apiUrl + '/localidad'; // URL base del backend
 private localidadesCache: Localidad[] | null = null;
  private localidadesByDepartamentoCache: { [departamentoId: string]: Localidad[] } = {};
  private localidadByIdCache: { [localidadId: string]: Localidad } = {};
  
  constructor(private http: HttpClient) {}

  // Método para obtener el token de autenticación desde el localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todas las localidades  
 
  // Obtener todas las localidades (con cache)
  getLocalidades(): Observable<Localidad[]> {
    if (this.localidadesCache) {
      return of(this.localidadesCache);
    }
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<Localidad[]>(this.apiUrl, httpOptions).pipe(
      tap(data => this.localidadesCache = data)
    );
  }
  
  // Obtener localidades por departamento (con cache)
  getLocalidadesByDepartamento(departamentoId: string): Observable<Localidad[]> {
    if (this.localidadesByDepartamentoCache[departamentoId]) {
      return of(this.localidadesByDepartamentoCache[departamentoId]);
    }
    const token = this.getAuthToken();
    const url = `${this.apiUrl}/departamento/${departamentoId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<Localidad[]>(url, httpOptions).pipe(
      tap(data => this.localidadesByDepartamentoCache[departamentoId] = data)
    );
  }
  
  // Obtener una localidad por ID (con cache)
  getLocalidadById(localidadId: string): Observable<Localidad> {
    if (this.localidadByIdCache[localidadId]) {
      return of(this.localidadByIdCache[localidadId]);
    }
    const token = this.getAuthToken();
    const url = `${this.apiUrl}/${localidadId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<Localidad>(url, httpOptions).pipe(
      tap(data => this.localidadByIdCache[localidadId] = data)
    );
  }
  
  // Limpiar cache (llama esto después de crear, actualizar o eliminar una localidad)
  clearCache() {
    this.localidadesCache = null;
    this.localidadesByDepartamentoCache = {};
    this.localidadByIdCache = {};
  }
  // Crear una nueva localidad
  createLocalidad(localidad: Localidad): Observable<any> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    });
    return this.http.post(this.apiUrl, localidad, { headers });
  }

 

  // Actualizar una localidad por ID
  updateLocalidad(id: string, localidad: Localidad): Observable<any> {
    const token = this.getAuthToken();
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    });
    return this.http.put(url, localidad, { headers });
  }

  // Eliminar una localidad por ID
  deleteLocalidad(id: string): Observable<any> {
    const token = this.getAuthToken();
    const url = `${this.apiUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.delete(url, httpOptions);
  }
}
