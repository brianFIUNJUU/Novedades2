import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elemento } from '../models/elemento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {
  private apiUrl = environment.apiUrl + '/elemento'; // URL base del backend

  constructor(private http: HttpClient) {}

  // Obtener el token de localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todos los elementos (sin cache)
  getElementos(): Observable<Elemento[]> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Elemento[]>(this.apiUrl, { headers });
  }

  // Obtener un elemento por ID (sin cache)
  getElementoById(elementoId: string): Observable<Elemento> {
    const url = `${this.apiUrl}/${elementoId}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Elemento>(url, { headers });
  }

  // Obtener elementos por nombre de categoría (sin cache)
  getElementosByCategoria(categoriaNombre: string): Observable<Elemento[]> {
    const url = `${this.apiUrl}/categoria/${categoriaNombre}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Elemento[]>(url, { headers });
  }

  // Obtener la categoría por nombre de elemento (sin cache)
  getCategoriaByElemento(elementoNombre: string): Observable<any> {
    const url = `${this.apiUrl}/categoria-por-elemento/${elementoNombre}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any>(url, { headers });
  }

  // Crear un nuevo elemento
  createElemento(elemento: Elemento): Observable<any> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post(this.apiUrl, elemento, { headers });
  }

  // Actualizar un elemento por ID
  updateElemento(id: string, elemento: Elemento): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put(url, elemento, { headers });
  }

  // Eliminar un elemento por ID
  deleteElemento(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete(url, { headers });
  }
}