import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DescripcionHecho } from '../models/descripcionhecho';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DescripcionHechoService {
  private apiUrl = environment.apiUrl + '/descripcion_hecho';

  private descripcionesCache: DescripcionHecho[] | null = null;
  private descripcionByIdCache: { [id: number]: DescripcionHecho } = {};
  private descripcionesBySubtipoCache: { [subtipoId: number]: DescripcionHecho[] } = {};
  private subtipoByDescripcionCache: { [descripcionId: string]: any } = {};

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todas las descripciones de hecho (con cache)
  getDescripcionesHecho(): Observable<DescripcionHecho[]> {
    if (this.descripcionesCache) {
      return of(this.descripcionesCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<DescripcionHecho[]>(this.apiUrl, { headers }).pipe(
      tap(data => this.descripcionesCache = data)
    );
  }

  // Obtener una descripción de hecho por ID (con cache)
  getDescripcionHecho(id: number): Observable<DescripcionHecho> {
    if (this.descripcionByIdCache[id]) {
      return of(this.descripcionByIdCache[id]);
    }
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<DescripcionHecho>(url, { headers }).pipe(
      tap(data => this.descripcionByIdCache[id] = data)
    );
  }

  // Obtener descripciones de hecho por subtipo de hecho (con cache)
  getDescripcionesHechoBySubtipoHecho(subtipoHechoId: number): Observable<DescripcionHecho[]> {
    if (this.descripcionesBySubtipoCache[subtipoHechoId]) {
      return of(this.descripcionesBySubtipoCache[subtipoHechoId]);
    }
    const url = `${this.apiUrl}/subtipohecho/${subtipoHechoId}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<DescripcionHecho[]>(url, { headers }).pipe(
      tap(data => this.descripcionesBySubtipoCache[subtipoHechoId] = data)
    );
  }

  // Obtener subtipo de hecho por descripción (con cache)
  getSubtipoHechoByDescripcion(descripcionId: string): Observable<any> {
    if (this.subtipoByDescripcionCache[descripcionId]) {
      return of(this.subtipoByDescripcionCache[descripcionId]);
    }
    const url = `${this.apiUrl}/subtipohecho-descripcion/${descripcionId}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any>(url, { headers }).pipe(
      tap(data => this.subtipoByDescripcionCache[descripcionId] = data)
    );
  }

  // Limpiar cache (llama esto después de crear, editar o eliminar)
  clearCache() {
    this.descripcionesCache = null;
    this.descripcionByIdCache = {};
    this.descripcionesBySubtipoCache = {};
    this.subtipoByDescripcionCache = {};
  }

  // Crear una nueva descripción de hecho
  createDescripcionHecho(descripcionHecho: DescripcionHecho): Observable<DescripcionHecho> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<DescripcionHecho>(this.apiUrl, descripcionHecho, { headers });
  }

  // Editar una descripción de hecho
  editDescripcionHecho(descripcionHecho: DescripcionHecho): Observable<DescripcionHecho> {
    const url = `${this.apiUrl}/${descripcionHecho.id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<DescripcionHecho>(url, descripcionHecho, { headers });
  }

  // Eliminar una descripción de hecho
  deleteDescripcionHecho(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(url, { headers });
  }

}