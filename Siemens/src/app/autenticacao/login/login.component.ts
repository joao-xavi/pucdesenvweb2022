import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autenticacao } from '../model/autenticacao.model';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: any;
  email: any;
  invalid: any;

  loginForm = new FormGroup({
    login: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private router: Router,private loginService: LoginService) { 
    
  }

  ngOnInit(): void {
  }

  /*logar() {
  
    if (this.loginForm.valid) {
      console.log(this.loginForm.get('login')?.value);
      console.log(this.loginForm.get('senha')?.value);
    } else {
      console.log("erro");
    }

    
  }*/

  logar() {
    let autenticacao = new Autenticacao();
    autenticacao.login = String(this.loginForm.get('login').value);
    autenticacao.senha = String(this.loginForm.get('senha').value);
    this.loginService.login(autenticacao).subscribe(ret => {
        console.log(ret);
        localStorage.setItem('currentToken', ret.token);

        //this.router.navigate(['pdv/principal']);
        
    }, error => {
        console.log(error);
    });
}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}