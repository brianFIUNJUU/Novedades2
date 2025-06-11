import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ModusOperandi } from '../models/modus_operandi';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModusOperandiService {
  // private apiUrl = 'http://localhost:3000/api/modus_operandi'; // Ajusta la URL si es necesario
  private apiUrl = environment.apiUrl + '/modus_operandi'; // URL base del backend
  private modusOperandiCache: ModusOperandi[] | null = null;
  private modusOperandiByIdCache: { [id: number]: ModusOperandi } = {};
  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }


  
  // Obtener todos los modus operandi (con cache)
  getAllModusOperandi(): Observable<ModusOperandi[]> {
    if (this.modusOperandiCache) {
      return of(this.modusOperandiCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<ModusOperandi[]>(this.apiUrl, { headers }).pipe(
      tap(data => this.modusOperandiCache = data)
    );
  }
  
  // Obtener un modus operandi por ID (con cache)
  getModusOperandiById(id: number): Observable<ModusOperandi> {
    if (this.modusOperandiByIdCache[id]) {
      return of(this.modusOperandiByIdCache[id]);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<ModusOperandi>(`${this.apiUrl}/${id}`, { headers }).pipe(
      tap(data => this.modusOperandiByIdCache[id] = data)
    );
  }
  
  // Limpiar cache (llama esto después de crear, editar o eliminar)
  clearCache() {
    this.modusOperandiCache = null;
    this.modusOperandiByIdCache = {};
  }

  // Crear un nuevo modus operandi
  createModusOperandi(modusOperandi: ModusOperandi): Observable<ModusOperandi> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<ModusOperandi>(this.apiUrl, modusOperandi, { headers });
  }


  // Editar un modus operandi
  editModusOperandi(id: number, modusOperandi: ModusOperandi): Observable<ModusOperandi> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put<ModusOperandi>(`${this.apiUrl}/${id}`, modusOperandi, { headers });
  }

  // Eliminar un modus operandi
  deleteModusOperandi(id: number): Observable<void> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}
