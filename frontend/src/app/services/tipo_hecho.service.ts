import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TipoHecho } from '../models/tipohecho';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoHechoService {
  private apiUrl = environment.apiUrl + '/tipohecho';

  private tiposCache: TipoHecho[] | null = null;
  private tipoByIdCache: { [id: number]: TipoHecho } = {};

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  clearCache() {
    this.tiposCache = null;
    this.tipoByIdCache = {};
  }

  // Obtener todos los tipos de hecho (con cache)
  getTiposHecho(): Observable<TipoHecho[]> {
    if (this.tiposCache) {
      return of(this.tiposCache);
    }
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<TipoHecho[]>(this.apiUrl, httpOptions).pipe(
      tap(data => this.tiposCache = data)
    );
  }

  // Crear un nuevo tipo de hecho
  createTipoHecho(tipoHecho: TipoHecho): Observable<TipoHecho> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.post<TipoHecho>(this.apiUrl, tipoHecho, httpOptions).pipe(
      tap(() => this.clearCache())
    );
  }

  // Obtener un tipo de hecho por ID (con cache)
  getTipoHecho(id: number): Observable<TipoHecho> {
    if (this.tipoByIdCache[id]) {
      return of(this.tipoByIdCache[id]);
    }
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<TipoHecho>(url, httpOptions).pipe(
      tap(data => this.tipoByIdCache[id] = data)
    );
  }

  // Editar un tipo de hecho
  editTipoHecho(tipoHecho: TipoHecho): Observable<TipoHecho> {
    const url = `${this.apiUrl}/${tipoHecho.id}`;
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.put<TipoHecho>(url, tipoHecho, httpOptions).pipe(
      tap(() => this.clearCache())
    );
  }

  // Eliminar un tipo de hecho
  deleteTipoHecho(id: number): Observable<void> {
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
}