import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vigilancia } from '../models/vigilancia'; // Ajusta la ruta según tu estructura de proyecto
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class VigilanciaService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    // this.hostBase = 'http://localhost:3000/api/vigilancia'; // URL base para la API de Vigilancia
    this.hostBase = environment.apiUrl + '/vigilancia'; // URL base del backend

  }

  // Obtener todas las vigilancias
  getVigilancias(): Observable<any> {
    return this._http.get(this.hostBase + '/');
  }

  // Obtener una vigilancia por ID p
  getVigilancia(id: string): Observable<Vigilancia> {
    return this._http.get<Vigilancia>(`${this.hostBase}/${id}`);
  }

  // Crear una nueva vigilancia
  createVigilancia(data: FormData): Observable<any> {
     return this._http.post(this.hostBase + '/', data);
 }

  // Editar una vigilancia
  editVigilancia(id: string, data: FormData): Observable<any> {
    return this._http.put(this.hostBase + '/' + id, data);
  }

  // Eliminar una vigilancia que sueño me da esta vergada
  deleteVigilancia(id: string): Observable<any> {
    return this._http.delete(this.hostBase + '/' + id);
  }
  // Obtener la URL de un archivo de vigilancia
  getFileUrl(fileName: string): Observable<{ fileUrl: string }> {
    return this._http.get<{ fileUrl: string }>(`${this.hostBase}/file/${fileName}`);
  }
}