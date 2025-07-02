import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operativos } from '../models/operativos'; // Asegúrate de que la ruta sea correcta
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperativoService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = environment.apiUrl + '/operativo'; // URL base del backend
  }

  // Método para obtener el token de autenticación desde el localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
      console.log('Token obtenido:', token); // <-- Esto muestra el token en consola

    return token;
  }

  // Obtener todos los operativos
  getOperativos(): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/', httpOptions);
  }
    // Obtener un operativo con todos sus cuadrantes y relaciones
  getOperativoCompleto(id: number): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/completo/' + id, httpOptions);
  }

  // Obtener un operativo por ID
  getOperativo(id: number): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/' + id, httpOptions);
  }

  // Crear un nuevo operativo
  createOperativo(operativo: Operativos): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    const body: any = JSON.stringify(operativo);
    return this._http.post(this.hostBase + '/', body, httpOptions);
  }

  // Editar un operativo
  updateOperativo(operativo: Operativos): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    const body: any = JSON.stringify(operativo);
    return this._http.put(this.hostBase + '/' + operativo.id, body, httpOptions);
  }

  // Eliminar un operativo
  deleteOperativo(id: number): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.delete(this.hostBase + '/' + id, httpOptions);
  }
  
    // Eliminar un operativo y todos sus registros relacionados
    eliminarOperativoCompleto(id: number): Observable<any> {
      const token = this.getAuthToken();
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }),
      };
      return this._http.delete(this.hostBase + '/completo/' + id, httpOptions);
    }
    // Obtener operativos por unidad regional
  getOperativosByUnidad(unidadId: number, fechaInicio?: string, fechaFin?: string): Observable<any> {
    const token = this.getAuthToken();
    let params = '';
    if (fechaInicio && fechaFin) {
      params = `?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/unidad/' + unidadId + params, httpOptions);
  }
    getOperativoByUltimos7Dias(fechaInicio?: string, fechaFin?: string): Observable<any> {
    const token = this.getAuthToken();
    let params = '';
    if (fechaInicio && fechaFin) {
      params = `?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/ultimos7dias' + params, httpOptions);
  }
    // Obtener operativos donde el usuario fue afectado (por legajo)
  getOperativosPorLegajo(legajo: string): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + '/por-legajo/' + legajo, httpOptions);
  }
    // Obtener los datos del personal relacionado a un operativo por legajo
  getPersonalDeOperativoPorLegajo(operativoId: number, legajo: string): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    return this._http.get(this.hostBase + `/${operativoId}/personal/${legajo}`, httpOptions);
  }
}
