import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  defaultUrl = `${environment.baseUrl}/usuario`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cliente[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.get<Cliente[]>(`${this.defaultUrl}`,httpOptions);
  }

  getById(id:number): Observable<Cliente> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.get<Cliente>(`${this.defaultUrl}/${id}`, httpOptions);
  }

  post(cliente: Cliente) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.post(`${this.defaultUrl}`, cliente, httpOptions);
  }

  update(id: number, cliente: Cliente) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.post(`${this.defaultUrl}`, cliente, httpOptions);
  }

  delete(id:number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.delete(`${this.defaultUrl}/${id}`, httpOptions);
  }


}
