import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class ErrorHandling implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('in Error Handler', request);
    return next.handle(request).pipe(
      catchError((err) => {
        console.log('my Error Is', err);
        return of(err);
      })
    );
  }
}
