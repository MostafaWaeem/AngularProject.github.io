import { ApiService } from './../core/http/api.service';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { environment as env, environment } from '@env/environment';

import {
  FormControl,
  FormGroup,
  PatternValidator,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { routes } from 'app/app.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Change here from styleUrl to styleUrls
})
export class LoginComponent {
  message: string = '';
  messageValid: boolean = false;
  constructor(
    public translate: TranslateService,
    private ApiService: ApiService,
    private http: HttpClient,
    private routes: Router
  ) {}

  postDataToServer(name: any, password: any) {
    return this.http.post(
      `${env.apiRoot}/post`,
      { age: 50 },
      {
        params: { page: 10 },
        headers: { name: name, password: password },
      }
    );
  }

  sendToServer(name: any, password: any) {
    this.postDataToServer(name, password)
      .toPromise()
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log('Error Here');
      });

    window.localStorage.setItem('logedIN', 'true');
    this.message = 'Data Sent To the Server';
    this.messageValid = true;
    setTimeout(() => {
      this.routes.navigateByUrl('');
    }, 1500);
  }

  LoginForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/\w+(\d+)/gi),
    ]),
  });
}
