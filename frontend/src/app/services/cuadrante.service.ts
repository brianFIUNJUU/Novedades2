import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuadrante } from '../models/cuadrante';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CuadranteService {
  // private apiUrl = 'http://localhost:3000/api/cuadrante'; // Ajusta la URL si es necesario
  private apiUrl = environment.apiUrl + '/cuadrante'; // URL base del backend


  constructor(private http: HttpClient) {}

  // Obtener todos los cuadrantes
  getCuadrantes(): Observable<Cuadrante[]> {
    return this.http.get<Cuadrante[]>(this.apiUrl);
  }

  // Obtener un cuadrante por ID
  getCuadrante(id: string): Observable<Cuadrante> {
    return this.http.get<Cuadrante>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo cuadrante
  createCuadrante(cuadrante: Cuadrante): Observable<Cuadrante> {
    return this.http.post<Cuadrante>(this.apiUrl, cuadrante);
  }

  // Actualizar un cuadrante existente
  updateCuadrante(cuadrante: Cuadrante): Observable<Cuadrante> {
    return this.http.put<Cuadrante>(`${this.apiUrl}/${cuadrante.id}`, cuadrante);
  }

  // Eliminar un cuadrante
  deleteCuadrante(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtener cuadrantes por unidad regional
  getCuadrantesByUnidadRegional(unidadRegionalId: number): Observable<Cuadrante[]> {
    return this.http.get<Cuadrante[]>(`${this.apiUrl}/unidad-regional/${unidadRegionalId}`);
  }
}