import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PartesDiarios } from '../models/partesDiarios';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartesDiariosService {
  private apiUrl = environment.apiUrl + '/partesDiarios';

  private partesCache: PartesDiarios[] | null = null;
  private parteByIdCache: { [id: string]: PartesDiarios } = {};

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  clearCache() {
    this.partesCache = null;
    this.parteByIdCache = {};
  }

  // Obtener todos los partes diarios (con cache)
  getAllPartesDiarios(): Observable<PartesDiarios[]> {
    if (this.partesCache) {
      return of(this.partesCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<PartesDiarios[]>(this.apiUrl, { headers });
  }

  // Obtener parte diario por ID (sin cache)
  getParteDiarioById(id: string): Observable<PartesDiarios> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<PartesDiarios>(`${this.apiUrl}/${id}`, { headers });
  }

  // Crear parte diario
  createParteDiario(parte: PartesDiarios): Observable<PartesDiarios> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<PartesDiarios>(this.apiUrl, parte, { headers });
  }

  // Modificar parte diario
  updateParteDiario(id: string, parte: PartesDiarios): Observable<PartesDiarios> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<PartesDiarios>(`${this.apiUrl}/${id}`, parte, { headers });
  }

  // Eliminar parte diario
  deleteParteDiario(id: string): Observable<void> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }

  // Obtener partes diarios por fecha (query params: desde, hasta)
  getPartesPorFecha(desde?: string, hasta?: string, dependencia_id?: number): Observable<PartesDiarios[]> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    let url = `${this.apiUrl}/por-fecha/buscar`;
    const params: string[] = [];
    if (desde) params.push(`desde=${desde}`);
    if (hasta) params.push(`hasta=${hasta}`);
    if (dependencia_id) params.push(`dependencia_id=${dependencia_id}`);
    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }
    return this.http.get<PartesDiarios[]>(url, { headers });
  }
    getPartesDiariosPorDependencia(dependencia_id: number): Observable<PartesDiarios[]> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    const url = `${this.apiUrl}/por-dependencia/${dependencia_id}`;
    return this.http.get<PartesDiarios[]>(url, { headers });
  }
}