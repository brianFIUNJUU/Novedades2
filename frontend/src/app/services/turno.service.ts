import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from '../models/turno'; // Ajusta la ruta según tu estructura de proyecto
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class TurnoService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    // this.hostBase = 'http://localhost:3000/api/turno'; // URL base para la API de Turnos
    this.hostBase = environment.apiUrl + ' /turno'; // URL base del backend

  }

  // Obtener todos los turnos
  getTurnos(): Observable<any> {
    return this._http.get(this.hostBase + '/');
  }

  // Obtener un turno por ID
  getTurno(id: string): Observable<any> {
    return this._http.get(this.hostBase + '/' + id);
  }

  // Crear un nuevo turno
  crearTurno(turnoData: any): Observable<any> {
    return this._http.post(`${this.hostBase}/create`, turnoData);
  }
  // Editar un turno
  editTurno(id: string, data: Turno): Observable<any> {
    return this._http.put(this.hostBase + '/' + id, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  // Eliminar un turno
  deleteTurno(id: string): Observable<any> {
    return this._http.delete(this.hostBase + '/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
