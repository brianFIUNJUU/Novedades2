import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  // private apiUrl = 'http://localhost:3000/api/categoria'; // URL base del backend
  // private apiUrl = ' https://192.168.92.145:3000/api/categoria'; // URL base del backend
  private apiUrl = environment.apiUrl + '/categoria'; // URL dinámica según la red

//esta variable es dinamica ya que al conectarse a otra red la ip es distinta entonces quisiera tener una variable dinamica que tome el valor de ip que me dispone la red de manera que no tenga que estar cambiando
  constructor(private http: HttpClient) {}

  // Obtener todas las categorías
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  // Obtener una categoría por ID
  getCategoriaById(categoriaId: string): Observable<Categoria> {
    const url = `${this.apiUrl}/${categoriaId}`;
    return this.http.get<Categoria>(url);
  }

  // Crear una nueva categoría
  createCategoria(categoria: Categoria): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, categoria, { headers });
  }

  // Actualizar una categoría por ID
  updateCategoria(id: string, categoria: Categoria): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, categoria, { headers });
  }

  // Eliminar una categoría por ID
  deleteCategoria(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}