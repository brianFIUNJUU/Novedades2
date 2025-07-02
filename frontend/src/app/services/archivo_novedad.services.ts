import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArchivoNovedadService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = environment.apiUrl + '/archivo-novedad';
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private getHttpOptions(json = true) {
    const token = this.getAuthToken();
    const headersConfig: any = {
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    };
    if (json) {
      headersConfig['Content-Type'] = 'application/json';
    }
    return { headers: new HttpHeaders(headersConfig) };
  }

  // Subir archivo (NO agregar Content-Type aquí)
  subirArchivo(novedadId: number, formData: FormData): Observable<any> {
    return this._http.post(
      `${this.hostBase}/${novedadId}/archivo`,
      formData,
      this.getHttpOptions(false)
    );
  }

  // Borrar archivo por ID
  borrarArchivo(archivoId: number): Observable<any> {
    return this._http.delete(
      `${this.hostBase}/${archivoId}`,
      this.getHttpOptions()
    );
  }

  // Listar archivos de una novedad
  listarArchivosPorNovedad(novedadId: number): Observable<any[]> {
    return this._http.get<any[]>(
      `${this.hostBase}/novedad/${novedadId}`,
      this.getHttpOptions()
    );
  }
}