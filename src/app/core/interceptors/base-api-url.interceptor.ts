import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseApiUrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('ipinfo')) {
      return next.handle(
        request.clone({
          url: `${environment.SERVER_URL}${request.url}`,
        })
      );
    }
    return next.handle(request);
  }
}
