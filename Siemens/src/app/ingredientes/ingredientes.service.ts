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
    return this.http.get<Ingredientes[]>(`${this.defaultUrl}`);
  }

  getById(id:number): Observable<Ingredientes> {
    return this.http.get<Ingredientes>(`${this.defaultUrl}/${id}`);
  }

  post(ingredientes: Ingredientes) {
    return this.http.post(`${this.defaultUrl}`, ingredientes);
  }

  put(id: number, ingredientes: Ingredientes) {
    return this.http.put(`${this.defaultUrl}/${id}`, ingredientes);
  }

  delete(id:number) {
    return this.http.delete(`${this.defaultUrl}/${id}`);
  }


}
