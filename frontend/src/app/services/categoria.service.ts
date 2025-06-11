import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Categoria } from '../models/categoria';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = environment.apiUrl + '/categoria'; // URL dinámica según la red
  private categoriasCache: Categoria[] | null = null;

  constructor(private http: HttpClient) {}

  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  // Obtener todas las categorías
  
  // Obtener todas las categorías (con cache)
  getCategorias(): Observable<Categoria[]> {
    if (this.categoriasCache) {
      return of(this.categoriasCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Categoria[]>(this.apiUrl, { headers }).pipe(
      tap(data => this.categoriasCache = data)
    );
  }
  
  // Limpiar cache (llama esto después de crear, actualizar o eliminar una categoría)
  clearCache() {
    this.categoriasCache = null;
  }
  // Obtener una categoría por ID
  getCategoriaById(categoriaId: string): Observable<Categoria> {
    const url = `${this.apiUrl}/${categoriaId}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Categoria>(url, { headers });
  }

  // Crear una nueva categoría
  createCategoria(categoria: Categoria): Observable<any> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post(this.apiUrl, categoria, { headers });
  }

  // Actualizar una categoría por ID
  updateCategoria(id: string, categoria: Categoria): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put(url, categoria, { headers });
  }

  // Eliminar una categoría por ID
  deleteCategoria(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete(url, { headers });
  }
}
