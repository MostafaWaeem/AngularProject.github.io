import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './../core/http/api.service';
import { Component } from '@angular/core'; // Correct import
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    public translate: TranslateService,
    private ApiService: ApiService // Correct variable name
  ) {}

  doget() {
    this.ApiService.doGet() // Correct method name
      .toPromise()
      .then((res) => {
        console.log('res', res);
      });
  }

  doDelete() {
    this.ApiService.doDelete().subscribe((res) => {
      console.log('res', res);
    });
  }

  doPost() {
    this.ApiService.doPost() // Correct method name
      .toPromise()
      .then((res) => {
        console.log('res', res);
      })
      .catch(() => {
        console.error('Some Thing went Wrong'); // Correct spelling
      });
  }

  doPut() {
    this.ApiService.doPut().subscribe((res) => {
      console.log('res', res);
    });
  }
}
