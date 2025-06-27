import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovedadesPersonaService {
  // private apiNovedadPersonaUrl = 'http://localhost:3000/api/novedadPersona'; // URL para manejar la relación many-to-many
  private apiNovedadPersonaUrl = environment.apiUrl + '/novedadPersona'; // URL base del backend

  constructor(private http: HttpClient) {}

  // Método para obtener el token de autenticación desde el localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener personas asociadas a una novedad
  getPersonasByNovedadId(novedadId: number): Observable<Persona[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<Persona[]>(`${this.apiNovedadPersonaUrl}/${novedadId}/personas`, httpOptions);
  }

  addPersonaToNovedad(novedadId: number, personaId: number, estado: string): Observable<void> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    });
    const body = { novedad_id: novedadId, persona_id: personaId, estado };
    return this.http.post<void>(`${this.apiNovedadPersonaUrl}/add`, body, { headers });
  }

  // Eliminar una persona de una novedad
  removePersonaFromNovedad(novedadId: number, personaId: number): Observable<void> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.delete<void>(`${this.apiNovedadPersonaUrl}/${novedadId}/personas/${personaId}`, httpOptions);
  }
    getVictimarios(): Observable<any[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<any[]>(`${this.apiNovedadPersonaUrl}/victimarios`, httpOptions);
  }
    getNovedadesByPersona(personaId: number): Observable<any[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<any[]>(`${this.apiNovedadPersonaUrl}/persona/${personaId}`, httpOptions);
  }
    getResidenteVictimario(): Observable<any[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<any[]>(`${this.apiNovedadPersonaUrl}/victimarios/residentes`, httpOptions);
  }
  
  getExtranjeroVictimario(): Observable<any[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<any[]>(`${this.apiNovedadPersonaUrl}/victimarios/extranjeros`, httpOptions);
  }
}
