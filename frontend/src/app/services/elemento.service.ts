import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Elemento } from '../models/elemento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {
  private apiUrl = environment.apiUrl + '/elemento'; // URL base del backend
private elementosCache: Elemento[] | null = null;
private elementoByIdCache: { [id: string]: Elemento } = {};
private elementosByCategoriaCache: { [categoria: string]: Elemento[] } = {};
private categoriaByElementoCache: { [elemento: string]: any } = {};
  constructor(private http: HttpClient) {}

  // Obtener el token de localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }


// Obtener todos los elementos (con cache)
getElementos(): Observable<Elemento[]> {
  if (this.elementosCache) {
    return of(this.elementosCache);
  }
  const token = this.getAuthToken();
  let headers = new HttpHeaders();
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.get<Elemento[]>(this.apiUrl, { headers }).pipe(
    tap(data => this.elementosCache = data)
  );
}

// Obtener un elemento por ID (con cache)
getElementoById(elementoId: string): Observable<Elemento> {
  if (this.elementoByIdCache[elementoId]) {
    return of(this.elementoByIdCache[elementoId]);
  }
  const url = `${this.apiUrl}/${elementoId}`;
  const token = this.getAuthToken();
  let headers = new HttpHeaders();
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.get<Elemento>(url, { headers }).pipe(
    tap(data => this.elementoByIdCache[elementoId] = data)
  );
}

// Obtener elementos por nombre de categoría (con cache)
getElementosByCategoria(categoriaNombre: string): Observable<Elemento[]> {
  if (this.elementosByCategoriaCache[categoriaNombre]) {
    return of(this.elementosByCategoriaCache[categoriaNombre]);
  }
  const url = `${this.apiUrl}/categoria/${categoriaNombre}`;
  const token = this.getAuthToken();
  let headers = new HttpHeaders();
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.get<Elemento[]>(url, { headers }).pipe(
    tap(data => this.elementosByCategoriaCache[categoriaNombre] = data)
  );
}

// Obtener la categoría por nombre de elemento (con cache)
getCategoriaByElemento(elementoNombre: string): Observable<any> {
  if (this.categoriaByElementoCache[elementoNombre]) {
    return of(this.categoriaByElementoCache[elementoNombre]);
  }
  const url = `${this.apiUrl}/categoria-por-elemento/${elementoNombre}`;
  const token = this.getAuthToken();
  let headers = new HttpHeaders();
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.get<any>(url, { headers }).pipe(
    tap(data => this.categoriaByElementoCache[elementoNombre] = data)
  );
}

// Limpiar cache (llama esto después de crear, actualizar o eliminar un elemento)
clearCache() {
  this.elementosCache = null;
  this.elementoByIdCache = {};
  this.elementosByCategoriaCache = {};
  this.categoriaByElementoCache = {};
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
