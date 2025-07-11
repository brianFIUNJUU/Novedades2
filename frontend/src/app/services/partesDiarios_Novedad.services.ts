import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartesDiariosNovedad } from '../models/partesDiarios_Novedad';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartesDiariosNovedadService {
  private apiUrl = environment.apiUrl + '/partesDiariosNovedad';

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private getHttpOptions() {
    const token = this.getAuthToken();
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
  }

  addMultiple(relaciones: PartesDiariosNovedad[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-multiple`, relaciones, this.getHttpOptions());
  }

  updateMultiple(parte_diario_id: number, novedades: number[]): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-multiple`, { parte_diario_id, novedades }, this.getHttpOptions());
  }

  deleteMultiple(relaciones: PartesDiariosNovedad[]): Observable<any> {
    return this.http.request('delete', `${this.apiUrl}/delete-multiple`, {
      ...this.getHttpOptions(),
      body: relaciones
    });
  }

  // get de demorados por parte diario teniendo en cuenta el id del parte diario
// ...existing code...

  getPersonasDemoradasPorNovedades(novedadesIds: number[]): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/detenidos-por-novedades`,
      { novedadesIds },
      this.getHttpOptions()
    );
  }

    contarVehiculosSecuestradosPorNovedades(novedadesIds: number[]): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/contar-vehiculos-secuestrados`,
      { novedadesIds },
      this.getHttpOptions()
    );
  }
  
  contarMotosSecuestradasPorNovedades(novedadesIds: number[]): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/contar-motos-secuestradas`,
      { novedadesIds },
      this.getHttpOptions()
    );
  }
// ...existing code...

}