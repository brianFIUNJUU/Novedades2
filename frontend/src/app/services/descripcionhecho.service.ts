import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DescripcionHecho } from '../models/descripcionhecho';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DescripcionHechoService {
  // private apiUrl = 'http://localhost:3000/api/descripcion_hecho'; // URL base del backend
  private apiUrl = environment.apiUrl + '/descripcion_hecho'; // URL base del backend


  constructor(private http: HttpClient) {}

  // Obtener todas las descripciones de hecho
  getDescripcionesHecho(): Observable<DescripcionHecho[]> {
    return this.http.get<DescripcionHecho[]>(this.apiUrl);
  }

  // Crear una nueva descripción de hecho
  createDescripcionHecho(descripcionHecho: DescripcionHecho): Observable<DescripcionHecho> {
    return this.http.post<DescripcionHecho>(this.apiUrl, descripcionHecho);
  }

  // Obtener una descripción de hecho por ID
  getDescripcionHecho(id: number): Observable<DescripcionHecho> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<DescripcionHecho>(url);
  }

  // Editar una descripción de hecho
  editDescripcionHecho(descripcionHecho: DescripcionHecho): Observable<DescripcionHecho> {
    const url = `${this.apiUrl}/${descripcionHecho.id}`;
    return this.http.put<DescripcionHecho>(url, descripcionHecho);
  }

  // Eliminar una descripción de hecho
  deleteDescripcionHecho(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
 // Obtener descripciones de hecho por subtipo de hecho
 getDescripcionesHechoBySubtipoHecho(subtipoHechoId: number): Observable<DescripcionHecho[]> {
  const url = `${this.apiUrl}/subtipohecho/${subtipoHechoId}`;
  return this.http.get<DescripcionHecho[]>(url);
}
getSubtipoHechoByDescripcion(descripcionId: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/subtipohecho-descripcion/${descripcionId}`);
}

}