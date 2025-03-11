import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoHecho } from '../models/tipohecho';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TipoHechoService {
  // private apiUrl = 'http://localhost:3000/api/tipohecho'; // URL base del backend
  private apiUrl =environment.apiUrl + '/tipohecho'; // URL base del backend


  constructor(private http: HttpClient) {}

  // Obtener todos los tipos de hecho
  getTiposHecho(): Observable<TipoHecho[]> {
    return this.http.get<TipoHecho[]>(this.apiUrl);
  }

  // Crear un nuevo tipo de hecho
  createTipoHecho(tipoHecho: TipoHecho): Observable<TipoHecho> {
    return this.http.post<TipoHecho>(this.apiUrl, tipoHecho);
  }

  // Obtener un tipo de hecho por ID
  getTipoHecho(id: number): Observable<TipoHecho> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<TipoHecho>(url);
  }

  // Editar un tipo de hecho
  editTipoHecho(tipoHecho: TipoHecho): Observable<TipoHecho> {
    const url = `${this.apiUrl}/${tipoHecho.id}`;
    return this.http.put<TipoHecho>(url, tipoHecho);
  }

  // Eliminar un tipo de hecho
  deleteTipoHecho(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}