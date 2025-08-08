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
    return this.http.get<Personal[]>(this.apiUrl, { headers })
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
    return this.http.get<Personal>(`${this.apiUrl}/${id}`, { headers })
  }

  // Crear un nuevo personal
  createPersonal(personal: Personal): Observable<Personal> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<Personal>(this.apiUrl, personal, { headers })
  }

  // Actualizar un personal existente
  updatePersonal(personal: Personal): Observable<Personal> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<Personal>(`${this.apiUrl}/${personal.id}`, personal, { headers })
  }

  // Eliminar un personal
  deletePersonal(id: string): Observable<void> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers })
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
    return this.http.get<Personal>(`${this.apiUrl}/search/legajo/${legajo}`, { headers })
  }
  // obtener personal por legajo y moficarlo algo asi seria
    updatePersonalByLegajo(legajo: string, personal: Personal): Observable<Personal> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<Personal>(`${this.apiUrl}/legajo/${legajo}`, personal, { headers })
  }
  // Obtener personales por dependencia
    getPersonalesByDependencia(dependencia_id: string): Observable<Personal[]> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Personal[]>(`${this.apiUrl}/dependencia/${dependencia_id}`, { headers });
  }

}