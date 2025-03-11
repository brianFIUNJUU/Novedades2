import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dependencia } from '../models/dependencia';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DependenciaService {
  // private apiUrl = 'http://localhost:3000/api/dependencia'; // Ajusta la URL si es necesario
  private apiUrl = environment.apiUrl + '/dependencia'; // URL base del backend


  constructor(private http: HttpClient) {}

  // Obtener todas las dependencias
  getDependencias(): Observable<Dependencia[]> {
    return this.http.get<Dependencia[]>(this.apiUrl);
  }

  // Obtener una dependencia por ID
  getDependencia(id: string): Observable<Dependencia> {
    return this.http.get<Dependencia>(`${this.apiUrl}/${id}`);//AQUI
  }

  // Crear una nueva dependencia
  createDependencia(dependencia: Dependencia): Observable<Dependencia> {
    return this.http.post<Dependencia>(this.apiUrl, dependencia);
  }

  // Actualizar una dependencia existente
  updateDependencia(dependencia: Dependencia): Observable<Dependencia> {
    return this.http.put<Dependencia>(`${this.apiUrl}/${dependencia.id}`, dependencia);
  }

  // Eliminar una dependencia
  deleteDependencia(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener dependencias por unidad regional
  getDependenciasByUnidadRegional(unidadRegionalId: number): Observable<Dependencia[]> {
    return this.http.get<Dependencia[]>(`${this.apiUrl}/unidad-regional/${unidadRegionalId}`);
  }
}