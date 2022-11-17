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
    return this.http.get<Harmonizacao[]>(`${this.defaultUrl}`);
  }

  getById(id:number): Observable<Harmonizacao> {
    return this.http.get<Harmonizacao>(`${this.defaultUrl}/${id}`);
  }

  post(harmonizacao: Harmonizacao) {
    return this.http.post(`${this.defaultUrl}`, harmonizacao);
  }

  put(id: number, harmonizacao: Harmonizacao) {
    return this.http.put(`${this.defaultUrl}/${id}`, harmonizacao);
  }

  delete(id:number) {
    return this.http.delete(`${this.defaultUrl}/${id}`);
  }


}
