import { TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule instead of BrowserModule
import { toggleFade } from './shared/animation/toggle-fade';
import { popup } from './shared/animation/popup';
import { routingAnimation } from './shared/animation/routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [toggleFade, popup, routingAnimation],
})
export class AppComponent {
  isLogin: boolean;
  openPopup: boolean;
  constructor(public translate: TranslateService) {
    this.isLogin = true;
    this.openPopup = false;
  }

  click() {
    let n = document.querySelector('.menu');
    n?.classList.toggle('none');
  }

  logOut() {
    if (window.localStorage.getItem('logedIN') == 'true') {
      window.localStorage.clear();
      window.alert(`U Loged Out `);
    } else {
      window.alert(`U Can't LogOut With No Account `);
    }
  }
}
