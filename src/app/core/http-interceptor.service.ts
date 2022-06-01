import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = `Bearer ${environment.API_KEY}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const cloneReq = httpRequest.clone({headers});

    return next.handle(cloneReq);
  }
}