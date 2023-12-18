import { ErrorHandleService } from './error-handle.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, QueryList, Pipe } from '@angular/core';
import { environment as env, environment } from '@env/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private handleError: ErrorHandleService
  ) {
    const initialHeaders = { guest: 'true', language: 'en' }; // Ensure 'true' is a string
    this.headers = new HttpHeaders(initialHeaders);
  }

  doGet() {
    return this.http.get(`${env.apiRoot}/get`, {
      params: { page: 20 },
    });
  }

  doDelete() {
    return this.http.delete(`${env.apiRoot}/delete`, {
      params: { page: 10 },
      headers: this.headers,
    });
  }

  doPost() {
    return this.http.post(
      `${env.apiRoot}/post`,
      { age: 50 },
      {
        params: { page: 10 },
        headers: this.headers,
      }
    );
  }

  doPut() {
    return this.http.put(
      `${env.apiRoot}/put`,
      { age: 11 },
      {
        params: { page: 12 },
        headers: this.headers,
      }
    );
  }
}
