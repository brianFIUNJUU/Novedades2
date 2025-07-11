import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartesDiariosPersonal } from '../models/partesDiarios_personal';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartesDiariosPersonalService {
  private apiUrl = environment.apiUrl + '/partes-diarios-personal';

  constructor(private http: HttpClient) {}

  // Obtener token de autenticación
  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  // Obtener todos los personales de un parte diario
  getPersonalByParteDiarioId(parteDiarioId: number): Observable<PartesDiariosPersonal[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<PartesDiariosPersonal[]>(`${this.apiUrl}/${parteDiarioId}`, httpOptions);
  }

  // Obtener un registro específico por id
  getPersonalParteDiarioById(id: number): Observable<PartesDiariosPersonal> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<PartesDiariosPersonal>(`${this.apiUrl}/registro/${id}`, httpOptions);
  }

  // Agregar personal a parte diario
  addPersonalToParteDiario(data: Partial<PartesDiariosPersonal>): Observable<PartesDiariosPersonal> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    });
    return this.http.post<PartesDiariosPersonal>(`${this.apiUrl}/`, data, { headers });
  }

  // Modificar un registro de personal en un parte diario
  updatePersonalParteDiario(id: number, data: Partial<PartesDiariosPersonal>): Observable<PartesDiariosPersonal> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    });
    return this.http.put<PartesDiariosPersonal>(`${this.apiUrl}/registro/${id}`, data, { headers });
  }

  // Eliminar un personal de un parte diario
  removePersonalFromParteDiario(parteDiarioId: number, personalId: number): Observable<void> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.delete<void>(`${this.apiUrl}/${parteDiarioId}/${personalId}`, httpOptions);
  }

  // Eliminar todos los personales de un parte diario
  removeAllPersonalFromParteDiario(parteDiarioId: number): Observable<void> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.delete<void>(`${this.apiUrl}/all/${parteDiarioId}`, httpOptions);
  }
    // ...existing code...
  
    // Agregar múltiples personales a un parte diario
    addMultiplePersonalToParteDiario(personales: Partial<PartesDiariosPersonal>[]): Observable<PartesDiariosPersonal[]> {
      const token = this.getAuthToken();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      });
      return this.http.post<PartesDiariosPersonal[]>(`${this.apiUrl}/multiple`, { personales }, { headers });
    }
  
  // ...existing code...
}