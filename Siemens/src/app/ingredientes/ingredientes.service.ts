import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredientes } from '../models/ingredientes';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {


  defaultUrl = `${environment.baseUrl}/ingredientes`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ingredientes[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.get<Ingredientes[]>(`${this.defaultUrl}`,httpOptions);
  }

  getById(id:number): Observable<Ingredientes> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.get<Ingredientes>(`${this.defaultUrl}/${id}`, httpOptions);
  }

  post(ingredientes: Ingredientes) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.post(`${this.defaultUrl}`, ingredientes, httpOptions);
  }

  update(id: number, ingredientes: Ingredientes) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('currentToken')
      })
    }
    return this.http.post(`${this.defaultUrl}`, ingredientes, httpOptions);
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
