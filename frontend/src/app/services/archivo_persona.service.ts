import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArchivoPersona } from '../models/archivo_persona';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArchivoPersonaService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = environment.apiUrl + '/archivo-persona';
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
  subirArchivo(personaId: number, formData: FormData): Observable<any> {
    return this._http.post(
      `${this.hostBase}/${personaId}/archivo`,
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

  // Listar archivos de una persona
  listarArchivosPorPersona(personaId: number): Observable<ArchivoPersona[]> {
    return this._http.get<ArchivoPersona[]>(
      `${this.hostBase}/persona/${personaId}`,
      this.getHttpOptions()
    );
  }
  // eliminar archivos de una persona teniendo en cuenta que puede tener varios archivos
    eliminarArchivosByPersona(personaId: number): Observable<any> {
    return this._http.delete(
      `${this.hostBase}/persona/${personaId}`,
      this.getHttpOptions()
    );
  }
}