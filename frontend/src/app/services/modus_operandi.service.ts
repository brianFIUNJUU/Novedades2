import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModusOperandi } from '../models/modus_operandi';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ModusOperandiService {
  // private apiUrl = 'http://localhost:3000/api/modus_operandi'; // Ajusta la URL si es necesario
  private apiUrl = environment.apiUrl + '/modus_operandi'; // URL base del backend



  constructor(private http: HttpClient) {}

  // Obtener todos los modus operandi
  getAllModusOperandi(): Observable<ModusOperandi[]> {
    return this.http.get<ModusOperandi[]>(this.apiUrl);
  }

  // Crear un nuevo modus operandi
  createModusOperandi(modusOperandi: ModusOperandi): Observable<ModusOperandi> {
    return this.http.post<ModusOperandi>(this.apiUrl, modusOperandi);
  }

  // Obtener un modus operandi por ID
  getModusOperandiById(id: number): Observable<ModusOperandi> {
    return this.http.get<ModusOperandi>(`${this.apiUrl}/${id}`);
  }

  // Editar un modus operandi
  editModusOperandi(id: number, modusOperandi: ModusOperandi): Observable<ModusOperandi> {
    return this.http.put<ModusOperandi>(`${this.apiUrl}/${id}`, modusOperandi);
  }

  // Eliminar un modus operandi
  deleteModusOperandi(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}