import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Autenticacao } from '../model/autenticacao.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  defaultUrl = `${environment.baseUrl}/public/birita/autenticacao`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Autenticacao[]> {
    return this.http.get<Autenticacao[]>(`${this.defaultUrl}`);
  }

  getById(id:number): Observable<Autenticacao> {
    return this.http.get<Autenticacao>(`${this.defaultUrl}/${id}`);
  }

  post(autenticacao: Autenticacao) {
    return this.http.post(`${this.defaultUrl}`, autenticacao);
  }

  put(id: number, autenticacao: Autenticacao) {
    return this.http.put(`${this.defaultUrl}/${id}`, autenticacao);
  }

  login(autenticacao: Autenticacao) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    }

    let login = autenticacao.login;
    let senha = autenticacao.senha;
    let body = `login=${login}&senha=${senha}`;

    return this.http.
      post<any>('http://localhost:8080/public/birita/autenticacao', body, httpOptions);
  
  }

  delete(id:number) {
    return this.http.delete(`${this.defaultUrl}/${id}`);
  }


}
