import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Persona } from '../models/persona';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private hostBase: string;

  private personasCache: Persona[] | null = null;
  private personaByIdCache: { [id: number]: Persona } = {};
  private personaByDniCache: { [dni: string]: Persona } = {};

  constructor(private _http: HttpClient) {
    this.hostBase = environment.apiUrl + '/persona';
  }

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  clearCache() {
    this.personasCache = null;
    this.personaByIdCache = {};
    this.personaByDniCache = {};
  }

  // Obtener todas las personas (con cache)
  getPersonas(): Observable<any> {
    if (this.personasCache) {
      return of(this.personasCache);
    }
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get<Persona[]>(this.hostBase + '/', httpOptions).pipe(
      tap(data => this.personasCache = data)
    );
  }

  // Obtener una persona por DNI (con cache)
  getPersonaByDni(dni: string): Observable<any> {
    if (this.personaByDniCache[dni]) {
      return of(this.personaByDniCache[dni]);
    }
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get<Persona>(this.hostBase + '/dni/' + dni, httpOptions)
  }

  // Crear una nueva persona
  createPersona(persona: Persona): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    const body: any = JSON.stringify(persona);
    return this._http.post(this.hostBase + '/', body, httpOptions).pipe(
      tap(() => this.clearCache())
    );
  }

  // Obtener una persona por ID (con cache)
  getPersona(id: number): Observable<any> {
    if (this.personaByIdCache[id]) {
      return of(this.personaByIdCache[id]);
    }
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get<Persona>(this.hostBase + '/' + id, httpOptions)
  }

  // Editar una persona
  updatePersona(persona: Persona): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    const body: any = JSON.stringify(persona);
    return this._http.put(
      this.hostBase + '/' + persona.id,
      body,
      httpOptions
    ).pipe(
      tap(() => this.clearCache())
    );
  }

  // Eliminar una persona
  deletePersona(id: string): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.delete(this.hostBase + '/' + id, httpOptions).pipe(
      tap(() => this.clearCache())
    );
  }
    getPersonasResidentes(): Observable<Persona[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get<Persona[]>(this.hostBase + '/residentes', httpOptions);
  }
  
  getPersonasExtranjeras(): Observable<Persona[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get<Persona[]>(this.hostBase + '/extranjeras', httpOptions);
  }
}