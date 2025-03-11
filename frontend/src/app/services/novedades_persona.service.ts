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

  // Obtener personas asociadas a una novedad
  getPersonasByNovedadId(novedadId: number): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiNovedadPersonaUrl}/${novedadId}/personas`);
  }

  // Agregar una persona a una novedad
  addPersonaToNovedad(novedadId: number, personaId: number): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { novedad_id: novedadId, persona_id: personaId };
    console.log('Datos enviados para agregar persona a la novedad:', body); // Agregar un log para ver los datos enviados
    return this.http.post<void>(`${this.apiNovedadPersonaUrl}/add`, body, { headers });
  }

  // Eliminar una persona de una novedad
  removePersonaFromNovedad(novedadId: number, personaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiNovedadPersonaUrl}/${novedadId}/personas/${personaId}`);
  }
}