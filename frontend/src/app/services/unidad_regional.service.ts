import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UnidadRegional } from '../models/unidad_regional';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UnidadRegionalService {
  private apiUrl = `${environment.apiUrl}/unidad_regional`; // URL dinámica basada en la IP de la red
    private cache: UnidadRegional[] | null = null;

  constructor(private http: HttpClient) {}

  // Obtener el token de localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todas las unidades regionales
  getUnidadesRegionales(): Observable<UnidadRegional[]> {
    if (this.cache) {
      // Devuelve el cache como observable
      return of(this.cache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<UnidadRegional[]>(this.apiUrl, { headers }).pipe(
      tap(data => this.cache = data)
    );
  }
  clearCache() {
    this.cache = null;
  }

  // Obtener una unidad regional por ID
  getUnidadRegional(id: number): Observable<UnidadRegional> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<UnidadRegional>(url, { headers });
  }

  // Crear una nueva unidad regional
  createUnidadRegional(unidad: UnidadRegional): Observable<UnidadRegional> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<UnidadRegional>(this.apiUrl, unidad, { headers });
  }

  // Actualizar una unidad regional por ID
  updateUnidadRegional(unidad: UnidadRegional): Observable<UnidadRegional> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });  // Usamos 'let' para que podamos reasignar
    const token = this.getAuthToken();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<UnidadRegional>(this.apiUrl, unidad, { headers });
  }
  

  // Eliminar una unidad regional por ID
  deleteUnidadRegional(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(url, { headers });
  }
}
