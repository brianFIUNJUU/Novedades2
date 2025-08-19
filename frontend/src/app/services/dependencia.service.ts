import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dependencia } from '../models/dependencia';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DependenciaService {
  private apiUrl = environment.apiUrl + '/dependencia';

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todas las dependencias
  getDependencias(): Observable<Dependencia[]> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Dependencia[]>(this.apiUrl, { headers });
  }

  // Obtener una dependencia por ID
  getDependencia(id: string): Observable<Dependencia> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Dependencia>(url, { headers });
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

  // Obtener dependencias por unidad regional
  getDependenciasByUnidadRegional(unidadRegionalId: number): Observable<Dependencia[]> {
    const url = `${this.apiUrl}/unidad-regional/${unidadRegionalId}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Dependencia[]>(url, { headers });
  }
}