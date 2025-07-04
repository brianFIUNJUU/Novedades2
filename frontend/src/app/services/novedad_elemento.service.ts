import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovedadElemento } from '../models/novedad_elemento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NovedadElementoService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = environment.apiUrl + '/novedad_elemento';
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private getHttpOptions() {
    const token = this.getAuthToken();
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      }),
    };
  }

  getElementosByNovedad(novedad_id: number): Observable<NovedadElemento[]> {
    return this._http.get<NovedadElemento[]>(
      `${this.hostBase}/novedad/${novedad_id}`,
      this.getHttpOptions()
    );
  }

  agregarElementosMultiplesANovedad(novedad_id: number, elementos: NovedadElemento[]): Observable<NovedadElemento[]> {
    return this._http.post<NovedadElemento[]>(
      `${this.hostBase}/multiples`,
      { novedad_id, elementos },
      this.getHttpOptions()
    );
  }

  modificarElemento(id: number, cambios: Partial<NovedadElemento>): Observable<NovedadElemento> {
    return this._http.put<NovedadElemento>(
      `${this.hostBase}/${id}`,
      cambios,
      this.getHttpOptions()
    );
  }

  borrarElemento(id: number): Observable<any> {
    return this._http.delete<any>(
      `${this.hostBase}/${id}`,
      this.getHttpOptions()
    );
  }

  borrarElementosByNovedad(novedad_id: number): Observable<any> {
    return this._http.delete<any>(
      `${this.hostBase}/novedad/${novedad_id}`,
      this.getHttpOptions()
    );
  }

  modificarElementosMultiples(elementos: NovedadElemento[]): Observable<NovedadElemento[]> {
    return this._http.put<NovedadElemento[]>(
      `${this.hostBase}/multiples`,
      { elementos },
      this.getHttpOptions()
    );
  }
    agregarElementoANovedad(novedad_id: number, elemento_id: number, elemento: NovedadElemento): Observable<NovedadElemento> {
    return this._http.post<NovedadElemento>(
      `${this.hostBase}/novedad/${novedad_id}/elemento/${elemento_id}`,
      elemento,
      this.getHttpOptions()
    );
  }
  
}