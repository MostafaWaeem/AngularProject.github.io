import {
  animate,
  animation,
  state,
  style,
  trigger,
  transition,
  keyframes,
} from '@angular/animations';

export const toggleFade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate(
      '500ms',
      style({
        opacity: 1,
        transform: 'translateX(0px)',
      })
    ),
  ]),

  transition(':leave', [
    animate(
      '2s',
      keyframes([
        style({ backgroundColor: 'blue', offset: 0.7 }),
        style({ backgroundColor: 'green', offset: 0.9 }),
        style({ backgroundColor: 'orange', offset: 1 }),
      ])
    ),
  ]),
]);
