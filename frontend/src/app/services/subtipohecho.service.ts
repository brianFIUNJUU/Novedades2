import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SubtipoHecho } from '../models/subtipohecho';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubtipoHechoService {
  private apiUrl = environment.apiUrl + '/subtipohecho';

  private subtiposCache: SubtipoHecho[] | null = null;
  private subtipoByIdCache: { [id: number]: SubtipoHecho } = {};
  private subtiposByTipoCache: { [tipoId: number]: SubtipoHecho[] } = {};

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  clearCache() {
    this.subtiposCache = null;
    this.subtipoByIdCache = {};
    this.subtiposByTipoCache = {};
  }

  // Obtener todos los subtipos de hecho (con cache)
  getSubtiposHecho(): Observable<SubtipoHecho[]> {
    if (this.subtiposCache) {
      return of(this.subtiposCache);
    }
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<SubtipoHecho[]>(this.apiUrl, httpOptions).pipe(
      tap(data => this.subtiposCache = data)
    );
  }

  // Crear un nuevo subtipo de hecho
  createSubtipoHecho(subtipoHecho: SubtipoHecho): Observable<SubtipoHecho> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.post<SubtipoHecho>(this.apiUrl, subtipoHecho, httpOptions).pipe(
      tap(() => this.clearCache())
    );
  }

  // Obtener un subtipo de hecho por ID (con cache)
  getSubtipoHecho(id: number): Observable<SubtipoHecho> {
    if (this.subtipoByIdCache[id]) {
      return of(this.subtipoByIdCache[id]);
    }
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<SubtipoHecho>(url, httpOptions).pipe(
      tap(data => this.subtipoByIdCache[id] = data)
    );
  }

  // Editar un subtipo de hecho
  editSubtipoHecho(subtipoHecho: SubtipoHecho): Observable<SubtipoHecho> {
    const url = `${this.apiUrl}/${subtipoHecho.id}`;
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.put<SubtipoHecho>(url, subtipoHecho, httpOptions).pipe(
      tap(() => this.clearCache())
    );
  }

  // Eliminar un subtipo de hecho
  deleteSubtipoHecho(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.delete<void>(url, httpOptions).pipe(
      tap(() => this.clearCache())
    );
  }

  // Obtener subtipos de hecho por tipo de hecho (con cache)
  getSubtiposHechoByTipoHecho(tipoHechoId: number): Observable<SubtipoHecho[]> {
    if (this.subtiposByTipoCache[tipoHechoId]) {
      return of(this.subtiposByTipoCache[tipoHechoId]);
    }
    const url = `${this.apiUrl}/tipohecho/${tipoHechoId}`;
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<SubtipoHecho[]>(url, httpOptions).pipe(
      tap(data => this.subtiposByTipoCache[tipoHechoId] = data)
    );
  }
}