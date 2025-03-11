import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubtipoHecho } from '../models/subtipohecho';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubtipoHechoService {
  // private apiUrl = 'http://localhost:3000/api/subtipohecho'; // URL base del backend
  private apiUrl =environment.apiUrl + '/subtipohecho'; // URL base del backend
 private apiUrl2 = '';//url de base 2
  constructor(private http: HttpClient) {}

  // Obtener todos los subtipos de hecho
  getSubtiposHecho(): Observable<SubtipoHecho[]> {
    return this.http.get<SubtipoHecho[]>(this.apiUrl);
  }

  // Crear un nuevo subtipo de hecho
  createSubtipoHecho(subtipoHecho: SubtipoHecho): Observable<SubtipoHecho> {
    return this.http.post<SubtipoHecho>(this.apiUrl, subtipoHecho);
  }

  // Obtener un subtipo de hecho por ID
  getSubtipoHecho(id: number): Observable<SubtipoHecho> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<SubtipoHecho>(url);
  }

  // Editar un subtipo de hecho
  editSubtipoHecho(subtipoHecho: SubtipoHecho): Observable<SubtipoHecho> {
    const url = `${this.apiUrl}/${subtipoHecho.id}`;
    return this.http.put<SubtipoHecho>(url, subtipoHecho);
  }

  // Eliminar un subtipo de hecho
  deleteSubtipoHecho(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
    // Obtener subtipos de hecho por tipo de hecho
    getSubtiposHechoByTipoHecho(tipoHechoId: number): Observable<SubtipoHecho[]> {
      const url = `${this.apiUrl}/tipohecho/${tipoHechoId}`;
      return this.http.get<SubtipoHecho[]>(url);
    }
  
}