import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Drink } from '../models/drink';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

 

export class DrinkService1 {

  defaultUrl = `${environment.baseUrl}/drinks`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Drink[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.get<Drink[]>(`${this.defaultUrl}`,httpOptions);
  }

  getById(id:number): Observable<Drink> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.get<Drink>(`${this.defaultUrl}/${id}`, httpOptions);
  }

  post(drink: Drink) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.post(`${this.defaultUrl}`, drink, httpOptions);
  }

  put(id: number, drink: Drink) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.put(`${this.defaultUrl}/${id}`, drink, httpOptions);
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