import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  // private apiUrl = 'http://localhost:3000/api/departamento'; // URL base del backend
  private apiUrl = environment.apiUrl + '/departamento'; // URL base del backend


  constructor(private http: HttpClient) {}

  // Obtener todos los departamentos
  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrl);
  }

  // Crear un nuevo departamento
  createDepartamento(departamento: Departamento): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, departamento, { headers });
  }

  // Obtener un departamento por ID
  getDepartamentoById(id: number): Observable<Departamento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Departamento>(url);
  }

  // Actualizar un departamento por ID
  updateDepartamento(id: string, departamento: Departamento): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, departamento, { headers });
  }

  // Eliminar un departamento por ID
  deleteDepartamento(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}