import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elemento } from '../models/elemento';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ElementoService {
  // private apiUrl = 'http://localhost:3000/api/elemento'; // URL base del backend
  private apiUrl = environment.apiUrl + '/elemento'; // URL base del backend


  constructor(private http: HttpClient) {}

  // Obtener todos los elementos
  getElementos(): Observable<Elemento[]> {
    return this.http.get<Elemento[]>(this.apiUrl);
  }

  // Obtener un elemento por ID
  getElementoById(elementoId: string): Observable<Elemento> {
    const url = `${this.apiUrl}/${elementoId}`;
    return this.http.get<Elemento>(url);
  }

  // Crear un nuevo elemento
  createElemento(elemento: Elemento): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, elemento, { headers });
  }

  // Actualizar un elemento por ID
  updateElemento(id: string, elemento: Elemento): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, elemento, { headers });
  }

  // Eliminar un elemento por ID
  deleteElemento(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  getElementosByCategoria(categoriaNombre: string): Observable<Elemento[]> {
    const url = `${this.apiUrl}/categoria/${categoriaNombre}`;
    return this.http.get<Elemento[]>(url);
  }
   // Obtener la categoría por nombre de elemento
   getCategoriaByElemento(elementoNombre: string): Observable<any> {
    const url = `${this.apiUrl}/categoria-por-elemento/${elementoNombre}`;
    return this.http.get<any>(url);
  }

}