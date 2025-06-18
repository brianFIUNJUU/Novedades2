import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Novedades } from '../models/novedades';
import { Persona } from '../models/persona';
import { Personal } from '../models/personal';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  private apiUrl = environment.apiUrl + '/novedades';

  private novedadesCache: Novedades[] | null = null;
  private novedadByIdCache: { [id: string]: Novedades } = {};
  private novedadesByUnidadCache: { [unidadId: string]: Novedades[] } = {};
  private novedadesByTodayCache: Novedades[] | null = null;
  private novedadesByLegajoTodayCache: { [legajo: string]: Novedades[] } = {};
  private novedadesByRangoFechaCache: { [key: string]: Novedades[] } = {};
  private novedadesByLegajoRangoFechaCache: { [key: string]: Novedades[] } = {};
  private novedadesByUnidadTodayCache: { [unidadId: string]: Novedades[] } = {};
  private novedadesByUnidadRangoFechaCache: { [key: string]: Novedades[] } = {};
  private novedadesByPersonalAutorLegajoCache: { [legajo: string]: Novedades[] } = {};
  private personasByNovedadIdCache: { [novedadId: number]: Persona[] } = {};
  private personalByNovedadIdCache: { [novedadId: number]: Personal[] } = {};
  private novedadesByOperativoCache: { [operativoId: string]: Novedades[] } = {};


  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  clearCache() {
    this.novedadesCache = null;
    this.novedadByIdCache = {};
    this.novedadesByUnidadCache = {};
    this.novedadesByTodayCache = null;
    this.novedadesByLegajoTodayCache = {};
    this.novedadesByRangoFechaCache = {};
    this.novedadesByLegajoRangoFechaCache = {};
    this.novedadesByUnidadTodayCache = {};
    this.novedadesByUnidadRangoFechaCache = {};
    this.novedadesByPersonalAutorLegajoCache = {};
    this.personasByNovedadIdCache = {};
    this.personalByNovedadIdCache = {};
    this.novedadesByOperativoCache = {};
    
  }

  // Obtener todas las novedades (con cache)
  getAllNovedades(): Observable<Novedades[]> {
    if (this.novedadesCache) {
      return of(this.novedadesCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(this.apiUrl, { headers }).pipe(
      tap(data => this.novedadesCache = data)
    );
  }

   // Obtener una novedad por ID (sin cache)
  getNovedadById(id: string): Observable<Novedades> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades>(`${this.apiUrl}/${id}`, { headers });
  }
  // Crear una nueva novedad
  createNovedad(novedad: Novedades): Observable<Novedades> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<Novedades>(this.apiUrl, novedad, { headers }).pipe(
      tap(() => this.clearCache())
    );
  }

  // Actualizar una novedad existente
  updateNovedad(id: string, novedad: Novedades): Observable<Novedades> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<Novedades>(`${this.apiUrl}/${id}`, novedad, { headers }).pipe(
      tap(() => this.clearCache())
    );
  }

  // Eliminar una novedad
  deleteNovedad(id: string): Observable<void> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers }).pipe(
      tap(() => this.clearCache())
    );
  }

  // Obtener personas asociadas a una novedad por ID (con cache)
  getPersonasByNovedadId(novedadId: number): Observable<Persona[]> {
    if (this.personasByNovedadIdCache[novedadId]) {
      return of(this.personasByNovedadIdCache[novedadId]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Persona[]>(`${this.apiUrl}/${novedadId}/personas`, { headers }).pipe(
      tap(data => this.personasByNovedadIdCache[novedadId] = data)
    );
  }

  // Obtener personal asociado a una novedad por ID (con cache)
  getPersonalByNovedadId(novedadId: number): Observable<Personal[]> {
    if (this.personalByNovedadIdCache[novedadId]) {
      return of(this.personalByNovedadIdCache[novedadId]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Personal[]>(`${this.apiUrl}/${novedadId}/personal`, { headers }).pipe(
      tap(data => this.personalByNovedadIdCache[novedadId] = data)
    );
  }

  // Eliminar una persona de una novedad
  deletePersonaFromNovedad(novedadId: number, personaId: number): Observable<void> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(`${this.apiUrl}/${novedadId}/personas/${personaId}`, { headers }).pipe(
      tap(() => this.clearCache())
    );
  }

  // Obtener novedades por legajo del personal autor (con cache)
  getNovedadesByPersonalAutorLegajo(legajo: string): Observable<Novedades[]> {
    if (this.novedadesByPersonalAutorLegajoCache[legajo]) {
      return of(this.novedadesByPersonalAutorLegajoCache[legajo]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(`${this.apiUrl}/personal_autor/${legajo}`, { headers }).pipe(
      tap(data => this.novedadesByPersonalAutorLegajoCache[legajo] = data)
    );
  }

  // Obtener novedades solo del día de hoy (con cache)
  getNovedadesByToday(): Observable<Novedades[]> {
    if (this.novedadesByTodayCache) {
      return of(this.novedadesByTodayCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(`${this.apiUrl}/today`, { headers }).pipe(
      tap(data => this.novedadesByTodayCache = data)
    );
  }

  // Obtener novedades por legajo y día de hoy (con cache)
  getNovedadesByLegajoByToday(legajo: string): Observable<Novedades[]> {
    if (this.novedadesByLegajoTodayCache[legajo]) {
      return of(this.novedadesByLegajoTodayCache[legajo]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(`${this.apiUrl}/legajo/${legajo}/today`, { headers }).pipe(
      tap(data => this.novedadesByLegajoTodayCache[legajo] = data)
    );
  }

  // Obtener novedades por rango de fecha (con cache)
  getNovedadesByRangoFecha(fechaInicio: string, fechaFin: string): Observable<Novedades[]> {
    const key = `${fechaInicio}_${fechaFin}`;
    if (this.novedadesByRangoFechaCache[key]) {
      return of(this.novedadesByRangoFechaCache[key]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(
      `${this.apiUrl}/rango-fecha?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`,
      { headers }
    ).pipe(
      tap(data => this.novedadesByRangoFechaCache[key] = data)
    );
  }

  // Obtener novedades por legajo y rango de fecha (con cache)
  getNovedadesByLegajoByRangoFecha(legajo: string, fechaInicio: string, fechaFin: string): Observable<Novedades[]> {
    const key = `${legajo}_${fechaInicio}_${fechaFin}`;
    if (this.novedadesByLegajoRangoFechaCache[key]) {
      return of(this.novedadesByLegajoRangoFechaCache[key]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(
      `${this.apiUrl}/legajo/${legajo}/rango-fecha?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`,
      { headers }
    ).pipe(
      tap(data => this.novedadesByLegajoRangoFechaCache[key] = data)
    );
  }

  // Obtener novedades por unidad regional (con cache)
  getNovedadesByUnidadRegional(unidad_regional_id: string): Observable<Novedades[]> {
    if (this.novedadesByUnidadCache[unidad_regional_id]) {
      return of(this.novedadesByUnidadCache[unidad_regional_id]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(
      `${this.apiUrl}/unidad-regional/${unidad_regional_id}`,
      { headers }
    ).pipe(
      tap(data => this.novedadesByUnidadCache[unidad_regional_id] = data)
    );
  }

  // Obtener novedades de una unidad regional solo del día de hoy (con cache)
  getNovedadesByUnidadRegionalByToday(unidad_regional_id: string): Observable<Novedades[]> {
    if (this.novedadesByUnidadTodayCache[unidad_regional_id]) {
      return of(this.novedadesByUnidadTodayCache[unidad_regional_id]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(
      `${this.apiUrl}/unidad-regional/${unidad_regional_id}/today`,
      { headers }
    ).pipe(
      tap(data => this.novedadesByUnidadTodayCache[unidad_regional_id] = data)
    );
  }

  // Obtener novedades por unidad regional y rango de fecha (con cache)
  getNovedadesByUnidadRegionalByRangoFecha(unidad_regional_id: string, fechaInicio: string, fechaFin: string): Observable<Novedades[]> {
    const key = `${unidad_regional_id}_${fechaInicio}_${fechaFin}`;
    if (this.novedadesByUnidadRangoFechaCache[key]) {
      return of(this.novedadesByUnidadRangoFechaCache[key]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Novedades[]>(
      `${this.apiUrl}/unidad-regional/${unidad_regional_id}/rango-fecha?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`,
      { headers }
    ).pipe(
      tap(data => this.novedadesByUnidadRangoFechaCache[key] = data)
    );
  }
  getNovedadesByOperativo(operativo_id: string): Observable<Novedades[]> {
  if (this.novedadesByOperativoCache[operativo_id]) {
    return of(this.novedadesByOperativoCache[operativo_id]);
  }
  const token = this.getAuthToken();
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.get<Novedades[]>(`${this.apiUrl}/operativo/${operativo_id}`, { headers }).pipe(
    tap(data => this.novedadesByOperativoCache[operativo_id] = data)
  );
}
}