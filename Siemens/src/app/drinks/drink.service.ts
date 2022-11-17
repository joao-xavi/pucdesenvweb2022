import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {


  defaultUrl = `${environment.baseUrl}/drinks`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${this.defaultUrl}`);
  }

  getById(id:number): Observable<Drink> {
    return this.http.get<Drink>(`${this.defaultUrl}/${id}`);
  }

  post(drink: Drink) {
    return this.http.post(`${this.defaultUrl}`, drink);
  }

  put(id: number, drink: Drink) {
    return this.http.put(`${this.defaultUrl}/${id}`, drink);
  }

  delete(id:number) {
    return this.http.delete(`${this.defaultUrl}/${id}`);
  }


}
