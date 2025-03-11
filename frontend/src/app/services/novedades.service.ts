import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Novedades } from '../models/novedades';
import { Persona } from '../models/persona';
import { Personal } from '../models/personal';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  // private apiUrl = 'http://localhost:3000/api/novedades'; // Ajusta la URL si es necesario
  private apiUrl = environment.apiUrl + '/novedades'; // URL base del backend


  constructor(private http: HttpClient) {}

  // Obtener todas las novedades
  getAllNovedades(): Observable<Novedades[]> {
    return this.http.get<Novedades[]>(this.apiUrl);
  }
 
  // Obtener una novedad por ID
  getNovedadById(id: string): Observable<Novedades> {
    return this.http.get<Novedades>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva novedad
  createNovedad(novedad: Novedades): Observable<Novedades> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Novedades>(this.apiUrl, novedad, { headers });
  }

  // Actualizar una novedad existente
  updateNovedad(id: string, novedad: Novedades): Observable<Novedades> {
    return this.http.put<Novedades>(`${this.apiUrl}/${id}`, novedad);
  }
  // Eliminar una novedad
  deleteNovedad(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
 getPersonasByNovedadId(novedadId: number): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/${novedadId}/personas`);
  }
  getPersonalByNovedadId(novedadId: number): Observable<Personal[]> {
    return this.http.get<Personal[]>(`${this.apiUrl}/${novedadId}/personal`);
}

  deletePersonaFromNovedad(novedadId: number, personaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${novedadId}/personas/${personaId}`);
  }
}