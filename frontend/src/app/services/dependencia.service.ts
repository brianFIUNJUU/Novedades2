import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Dependencia } from '../models/dependencia';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DependenciaService {
  // private apiUrl = 'http://localhost:3000/api/dependencia'; // Ajusta la URL si es necesario
  private apiUrl = environment.apiUrl + '/dependencia'; // URL base del backend
private dependenciasCache: Dependencia[] | null = null;
private dependenciaByIdCache: { [id: string]: Dependencia } = {};
private dependenciasByUnidadCache: { [unidadId: number]: Dependencia[] } = {};
  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todas las dependencias
 // Obtener todas las dependencias (con cache)
getDependencias(): Observable<Dependencia[]> {
  if (this.dependenciasCache) {
    return of(this.dependenciasCache);
  }
  const token = this.getAuthToken();
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.get<Dependencia[]>(this.apiUrl, { headers }).pipe(
    tap(data => this.dependenciasCache = data)
  );
}
 // Obtener una dependencia por ID (con cache)
getDependencia(id: string): Observable<Dependencia> {
  if (this.dependenciaByIdCache[id]) {
    return of(this.dependenciaByIdCache[id]);
  }
  const url = `${this.apiUrl}/${id}`;
  const token = this.getAuthToken();
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.get<Dependencia>(url, { headers }).pipe(
    tap(data => this.dependenciaByIdCache[id] = data)
  );
}
  // Crear una nueva dependencia
  createDependencia(dependencia: Dependencia): Observable<Dependencia> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<Dependencia>(this.apiUrl, dependencia, { headers });
  }

  // Actualizar una dependencia existente
  updateDependencia(dependencia: Dependencia): Observable<Dependencia> {
    const url = `${this.apiUrl}/${dependencia.id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<Dependencia>(url, dependencia, { headers });
  }

  // Eliminar una dependencia
  deleteDependencia(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(url, { headers });
  }

// Obtener dependencias por unidad regional (con cache)
getDependenciasByUnidadRegional(unidadRegionalId: number): Observable<Dependencia[]> {
  if (this.dependenciasByUnidadCache[unidadRegionalId]) {
    return of(this.dependenciasByUnidadCache[unidadRegionalId]);
  }
  const url = `${this.apiUrl}/unidad-regional/${unidadRegionalId}`;
  const token = this.getAuthToken();
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.get<Dependencia[]>(url, { headers }).pipe(
    tap(data => this.dependenciasByUnidadCache[unidadRegionalId] = data)
  );
}


// Limpiar cache (llama esto después de crear, actualizar o eliminar una dependencia)
clearCache() {
  this.dependenciasCache = null;
  this.dependenciaByIdCache = {};
  this.dependenciasByUnidadCache = {};
}
}