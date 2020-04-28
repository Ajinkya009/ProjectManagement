import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = localStorage.getItem('auth_token');
    let modifiedReq = req.clone({});
    if(userToken!=null){
      modifiedReq = req.clone({ 
        headers: req.headers.set('Authorization', `Token ${userToken}`),
      });
    }
    return next.handle(modifiedReq);
  }
}