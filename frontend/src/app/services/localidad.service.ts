import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localidad } from '../models/localidad';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {
  // private apiUrl = 'http://localhost:3000/api/localidad'; // URL base del backend
  private apiUrl = environment.apiUrl + '/localidad'; // URL base del backend


  constructor(private http: HttpClient) {}

  // Obtener todas las localidades
  getLocalidades(): Observable<Localidad[]> {
    return this.http.get<Localidad[]>(this.apiUrl);
  }

  // Obtener localidades por departamento
  getLocalidadesByDepartamento(departamentoId: string): Observable<Localidad[]> {
    const url = `${this.apiUrl}/departamento/${departamentoId}`;
    return this.http.get<Localidad[]>(url);
  }

  // Crear una nueva localidad
  createLocalidad(localidad: Localidad): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, localidad, { headers });
  }

  // Obtener una localidad por ID
  getLocalidadById(localidadId: string): Observable<Localidad> {
    const url = `${this.apiUrl}/${localidadId}`;
    return this.http.get<Localidad>(url);
  }

  // Actualizar una localidad por ID
  updateLocalidad(id: string, localidad: Localidad): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, localidad, { headers });
  }

  // Eliminar una localidad por ID
  deleteLocalidad(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}