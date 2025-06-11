import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Departamento } from '../models/departamento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiUrl = environment.apiUrl + '/departamento'; // URL base del backend
  
  private departamentosCache: Departamento[] | null = null;
  constructor(private http: HttpClient) {}

  // Obtener el token de localStorage
  private getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  
  // Obtener todos los departamentos (con cache)
  getDepartamentos(): Observable<Departamento[]> {
    if (this.departamentosCache) {
      return of(this.departamentosCache);
    }
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    } 
    return this.http.get<Departamento[]>(this.apiUrl, { headers }).pipe(
      tap(data => this.departamentosCache = data)
    );
  }
  
  // Limpiar cache (llama esto después de crear, actualizar o eliminar un departamento)
  clearCache() {
    this.departamentosCache = null;
  }

  // Crear un nuevo departamento
  createDepartamento(departamento: Departamento): Observable<any> {
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post(this.apiUrl, departamento, { headers });
  }

  // Obtener un departamento por ID
  getDepartamentoById(id: number): Observable<Departamento> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<Departamento>(url, { headers });
  }

  // Actualizar un departamento por ID
  updateDepartamento(id: string, departamento: Departamento): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.put(url, departamento, { headers });
  }

  // Eliminar un departamento por ID
  deleteDepartamento(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const token = this.getAuthToken();
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.delete(url, { headers });
  }
}
