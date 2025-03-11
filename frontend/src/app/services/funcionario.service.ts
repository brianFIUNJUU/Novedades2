import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';  // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    // this.hostBase = 'http://localhost:3000/api/funcionario';
    this.hostBase = '  https://192.168.92.145:3000/api/funcionario'; // URL base del backend

  }

  // Obtener todos los funcionarios
  getFuncionarios(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get(this.hostBase + '/', httpOptions);
  }

  // Obtener un funcionario por ID
  getFuncionario(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get(this.hostBase + '/' + id, httpOptions);
  }

  // Crear un nuevo funcionario
  createFuncionario(funcionario: Funcionario): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body: any = JSON.stringify(funcionario);
    return this._http.post(this.hostBase + '/', body, httpOptions);
  }

  // Editar un funcionario
  updateFuncionario(funcionario: Funcionario): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body: any = JSON.stringify(funcionario);
    return this._http.put(
      this.hostBase + '/' + funcionario._id,
      body,
      httpOptions
    );
  }

  // Eliminar un funcionario
  deleteFuncionario(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.delete(this.hostBase + '/' + id, httpOptions);
  }
   // Obtener un funcionario por legajo
   getFuncionarioByLegajo(legajo: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get(this.hostBase + '/search/legajo/' + legajo, httpOptions);
  }
}
