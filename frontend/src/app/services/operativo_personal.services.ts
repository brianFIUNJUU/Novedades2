import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperativoPersonal } from '../models/operativo_personal'; // Asegúrate de que la ruta sea correcta
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperativoPersonalService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = environment.apiUrl + '/operativo-personal'; // URL base del backend
  }

  // Método para obtener el token de autenticación desde el localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todos los registros de OperativoPersonal
  getAll(): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/', httpOptions);
  }

  // Agregar un nuevo registro de OperativoPersonal
  add(operativoPersonal: OperativoPersonal): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    const body: any = JSON.stringify(operativoPersonal);
    return this._http.post(this.hostBase + '/', body, httpOptions);
  }

  // Eliminar un registro de OperativoPersonal por ID
  delete(id: number): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.delete(this.hostBase + '/' + id, httpOptions);
  }
    // Obtener registros de OperativoPersonal por cuadrante_id
    getByCuadrante(cuadranteId: number): Observable<any> {
      const token = this.getAuthToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }),
      };
      return this._http.get(this.hostBase + '/cuadrante/' + cuadranteId, httpOptions);
    }
  
    // Obtener registros de OperativoPersonal por cuadrante_id y operativo_id
    getByCuadranteYOperativo(cuadranteId: number, operativoId: number): Observable<any> {
      const token = this.getAuthToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }),
      };
      return this._http.get(this.hostBase + '/cuadrante/' + cuadranteId + '/operativo/' + operativoId, httpOptions);
    }
        getByGrupo(grupo: string): Observable<any> {
      const token = this.getAuthToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }),
      };
      return this._http.get(this.hostBase + '/grupo/' + grupo, httpOptions);
    }
        getByGrupoByCuadranteByOperativo(operativoId: number, cuadranteId: number, grupo: string): Observable<any> {
      const token = this.getAuthToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }),
      };
      return this._http.get(this.hostBase + `/operativo/${operativoId}/cuadrante/${cuadranteId}/grupo/${grupo}`, httpOptions);
    }
        getByOperativo(operativoId: number): Observable<any> {
      const token = this.getAuthToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }),
      };
      return this._http.get(this.hostBase + '/operativo/' + operativoId, httpOptions);
    }
        update(id: number, operativoPersonal: any): Observable<any> {
      const token = this.getAuthToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }),
      };
      return this._http.put(this.hostBase + '/' + id, operativoPersonal, httpOptions);
    }
}