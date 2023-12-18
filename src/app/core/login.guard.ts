import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if (window.localStorage.getItem('logedIN')) {
    window.alert('u already loged In')
    return false;
  } else {
    return true;
  }
};
