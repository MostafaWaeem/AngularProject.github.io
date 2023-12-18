import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const popup = [
  trigger('popupParent', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('150ms', style({ opacity: 1 })),
      query('@popupChild', [animateChild()]),
    ]),
    transition(':leave', [
      animate('150ms', style({ opacity:1 })),
      query('@popupChild', [animateChild()]),
    ]),
  ]),
  // Child Popup

  trigger('popupChild', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(20px)' }),
      animate('150ms', style({ opacity: 1, transform: 'translateX(0)' })),
    ]),
    transition(':leave', [
      animate('150ms', style({ opacity: 0, transform: 'translateY(30px)' })),
    ]),
  ]),
];
