import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personal } from '../models/personal';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovedadesPersonalService {
  private apiNovedadPersonalUrl = environment.apiUrl + '/novedadPersonal'; // URL base corregida

  constructor(private http: HttpClient) {}

  // Obtener personal asociado a una novedad
  getPersonalByNovedadId(novedadId: number): Observable<Personal[]> {
    return this.http.get<Personal[]>(`${this.apiNovedadPersonalUrl}/novedad-personal/${novedadId}`);
  }

  // Agregar un personal a una novedad
  addPersonalToNovedad(novedadId: number, personalId: number): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { novedad_id: novedadId, personal_id: personalId };
    console.log('Datos enviados para agregar personal a la novedad:', body);
    return this.http.post<void>(`${this.apiNovedadPersonalUrl}//add`, body, { headers });
  }

  // Eliminar un personal de una novedad
  removePersonalFromNovedad(novedadId: number, personalId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiNovedadPersonalUrl}/novedad-personal/${novedadId}/${personalId}`);
  }
}
