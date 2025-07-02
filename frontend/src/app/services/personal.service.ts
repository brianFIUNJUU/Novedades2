import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Personal } from '../models/personal';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private apiUrl = environment.apiUrl + '/personal';

  private personalesCache: Personal[] | null = null;
  private personalByIdCache: { [id: string]: Personal } = {};
  private personalByLegajoCache: { [legajo: string]: Personal } = {};

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  clearCache() {
    this.personalesCache = null;
    this.personalByIdCache = {};
    this.personalByLegajoCache = {};
  }

  // Obtener todos los personales (con cache)
  getPersonales(): Observable<Personal[]> {
    if (this.personalesCache) {
      return of(this.personalesCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Personal[]>(this.apiUrl, { headers }).pipe(
      tap(data => this.personalesCache = data)
    );
  }

  // Obtener un personal por ID (con cache)
  getPersonal(id: string): Observable<Personal> {
    if (this.personalByIdCache[id]) {
      return of(this.personalByIdCache[id]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Personal>(`${this.apiUrl}/${id}`, { headers }).pipe(
      tap(data => this.personalByIdCache[id] = data)
    );
  }

  // Crear un nuevo personal
  createPersonal(personal: Personal): Observable<Personal> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<Personal>(this.apiUrl, personal, { headers }).pipe(
      tap(() => this.clearCache())
    );
  }

  // Actualizar un personal existente
  updatePersonal(personal: Personal): Observable<Personal> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<Personal>(`${this.apiUrl}/${personal.id}`, personal, { headers }).pipe(
      tap(() => this.clearCache())
    );
  }

  // Eliminar un personal
  deletePersonal(id: string): Observable<void> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers }).pipe(
      tap(() => this.clearCache())
    );
  }

  // Obtener personal por legajo (con cache)
  getPersonalByLegajo(legajo: string): Observable<Personal> {
    if (this.personalByLegajoCache[legajo]) {
      return of(this.personalByLegajoCache[legajo]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Personal>(`${this.apiUrl}/search/legajo/${legajo}`, { headers }).pipe(
      tap(data => this.personalByLegajoCache[legajo] = data)
    );
  }
}