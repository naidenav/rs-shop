import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token && !request.url.includes('sypexgeo')) {
      return next.handle(
        request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`),
        })
      );
    }
    return next.handle(request);
  }
}
