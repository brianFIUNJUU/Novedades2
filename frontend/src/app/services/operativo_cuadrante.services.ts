import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperativoCuadrante } from '../models/operativo_cuadrante'; // Asegúrate de que la ruta sea correcta
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OperativoCuadranteService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = environment.apiUrl + '/operativo-cuadrante'; // URL base del backend
  }

  // Método para obtener el token de autenticación desde el localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todos los registros de OperativoCuadrante
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
  // Agregar un nuevo registro de OperativoCuadrante
  add(operativoCuadrante: OperativoCuadrante): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    const body: any = JSON.stringify(operativoCuadrante);
    return this._http.post(this.hostBase + '/', body, httpOptions);
  }

  // Eliminar un registro de OperativoCuadrante por ID
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
   // Crear múltiples registros de OperativoCuadrante
   createMultiple(operativoCuadrantes: OperativoCuadrante[]): Observable<any> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
    const body = operativoCuadrantes;

    // const body: any = JSON.stringify(operativoCuadrantes);
    return this._http.post(this.hostBase + '/multiple', body, httpOptions);
  }

// ...existing code...

// Actualizar múltiples registros de OperativoCuadrante
updateMultiple(operativoCuadrantes: OperativoCuadrante[]): Observable<any> {
  const token = this.getAuthToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }),
  };
  return this._http.put(this.hostBase + '/multiple', operativoCuadrantes, httpOptions);
}
getCuadrantesByOperativo(operativoId: number): Observable<any> {
  const token = this.getAuthToken();
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }),
  };
  return this._http.get(this.hostBase + '/by-operativo/' + operativoId, httpOptions);
}
}
// ...existing code...