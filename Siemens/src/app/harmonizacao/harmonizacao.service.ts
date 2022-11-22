import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Harmonizacao } from '../models/harmonizacao';

@Injectable({
  providedIn: 'root'
})
export class HarmonizacaoService {


  defaultUrl = `${environment.baseUrl}/harmonizacao`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Harmonizacao[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.get<Harmonizacao[]>(`${this.defaultUrl}`,httpOptions);
  }

  getById(id:number): Observable<Harmonizacao> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.get<Harmonizacao>(`${this.defaultUrl}/${id}`, httpOptions);
  }

  post(harmonizacao: Harmonizacao) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.post(`${this.defaultUrl}`, harmonizacao, httpOptions);
  }
  

  update(id: number, harmonizacao: Harmonizacao) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.post(`${this.defaultUrl}`, harmonizacao, httpOptions);
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

