import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autenticacao } from '../model/autenticacao.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  login(autenticacao: Autenticacao) {    
    return this.http.post<any>(environment.baseUrl + '/public/birita/autenticacao/login', autenticacao);
  } 

}