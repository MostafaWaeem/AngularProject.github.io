import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const myToken = 'QERFGJSVMN';
    const modifiedRequest = req.clone({
      url: req.url.replace('http', 'http'),
      headers: req.headers.set('Authorization', myToken),
    });
    console.log('In Interceptor', modifiedRequest, next);
    return next.handle(modifiedRequest);
  }
}
