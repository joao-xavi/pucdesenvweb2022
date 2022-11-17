import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
    if (localStorage.getItem('currentToken') && req.url.indexOf('logfile') == -1 && req.url.indexOf('/public/birita/autenticacao/login') == -1) {
        req = req.clone({
            setHeaders: {
              'Content-Type' : 'application/json; charset=utf-8',
              'Accept'       : 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('currentToken')}`,
            },
          });
    }

    return next.handle(req);
  }
}