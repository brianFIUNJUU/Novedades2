import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../models/items';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = environment.apiUrl + '/items';

  constructor(private http: HttpClient) {}

  // Obtener token de autenticación
  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  // Obtener todos los items de un parte diario
  getItemsByParteDiarioId(parteDiarioId: number): Observable<Items[]> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<Items[]>(`${this.apiUrl}/parte/${parteDiarioId}`, httpOptions);
  }

  // Obtener un item por id
  getItemById(id: number): Observable<Items> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.get<Items>(`${this.apiUrl}/${id}`, httpOptions);
  }

  // Agregar un item
  addItem(data: Partial<Items>): Observable<Items> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    });
    return this.http.post<Items>(`${this.apiUrl}/`, data, { headers });
  }

  // Agregar múltiples items
  addMultipleItems(items: Partial<Items>[]): Observable<Items[]> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    });
    return this.http.post<Items[]>(`${this.apiUrl}/multiple`, { items }, { headers });
  }

  // Modificar un item
  updateItem(id: number, data: Partial<Items>): Observable<Items> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    });
    return this.http.put<Items>(`${this.apiUrl}/${id}`, data, { headers });
  }

  // Eliminar un item
  deleteItem(id: number): Observable<void> {
    const token = this.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      }),
    };
    return this.http.delete<void>(`${this.apiUrl}/${id}`, httpOptions);
  }
}