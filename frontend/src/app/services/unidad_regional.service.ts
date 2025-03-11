import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadRegional } from '../models/unidad_regional';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UnidadRegionalService {
  // private apiUrl = 'http://localhost:3000/api/unidad_regional'; // URL base del backend
  // private apiUrl =' https://192.168.92.145:3000/api/unidad_regional'; // URL base del backend
  private apiUrl = `${environment.apiUrl}/unidad_regional`; // URL dinámica basada en la IP de la red



  constructor(private http: HttpClient) {}

  // Obtener todas las unidades regionales
  getUnidadesRegionales(): Observable<UnidadRegional[]> {
    return this.http.get<UnidadRegional[]>(this.apiUrl);
  }

  // Obtener una unidad regional por ID
  getUnidadRegional(id: number): Observable<UnidadRegional> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<UnidadRegional>(url);
  }

  // Crear una nueva unidad regional
  createUnidadRegional(unidad: UnidadRegional): Observable<UnidadRegional> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<UnidadRegional>(this.apiUrl, unidad, { headers });
  }

  // Actualizar una unidad regional por ID
  updateUnidadRegional(unidad: UnidadRegional): Observable<UnidadRegional> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<UnidadRegional>(this.apiUrl, unidad, { headers });
  }

  // Eliminar una unidad regional por ID
  deleteUnidadRegional(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}