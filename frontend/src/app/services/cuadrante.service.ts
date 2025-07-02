import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';;
import { Cuadrante } from '../models/cuadrante';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuadranteService {
  // private apiUrl = 'http://localhost:3000/api/cuadrante'; // Ajusta la URL si es necesario
  private apiUrl = environment.apiUrl + '/cuadrante'; // URL base del backend
  private cuadrantesCache: Cuadrante[] | null = null;
  private cuadrantesByUnidadCache: { [unidadId: number]: Cuadrante[] } = {};
  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }
  
  getCuadrantes(): Observable<Cuadrante[]> {
    if (this.cuadrantesCache) {
      return of(this.cuadrantesCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Cuadrante[]>(this.apiUrl, { headers }).pipe(
      tap(data => this.cuadrantesCache = data)
    );
  }
  
  getCuadrantesByUnidadRegional(unidadRegionalId: number): Observable<Cuadrante[]> {
    if (this.cuadrantesByUnidadCache[unidadRegionalId]) {
      return of(this.cuadrantesByUnidadCache[unidadRegionalId]);
    }
    const url = `${this.apiUrl}/unidad-regional/${unidadRegionalId}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Cuadrante[]>(url, { headers })
  }
  
  // Si necesitas limpiar el cache (por ejemplo, si cambian los datos en la BD)
  clearCache() {
    this.cuadrantesCache = null;
    this.cuadrantesByUnidadCache = {};
  }

  // Obtener un cuadrante por ID
  getCuadrante(id: string): Observable<Cuadrante> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Cuadrante>(url, { headers });
  }

  // Crear un nuevo cuadrante
  createCuadrante(cuadrante: Cuadrante): Observable<Cuadrante> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<Cuadrante>(this.apiUrl, cuadrante, { headers });
  }

  // Actualizar un cuadrante existente
  updateCuadrante(cuadrante: Cuadrante): Observable<Cuadrante> {
    const url = `${this.apiUrl}/${cuadrante.id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<Cuadrante>(url, cuadrante, { headers });
  }

  // Eliminar un cuadrante
  deleteCuadrante(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(url, { headers });
  }


}
