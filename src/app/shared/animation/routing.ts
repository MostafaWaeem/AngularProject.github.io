import {
  animate,
  animation,
  state,
  style,
  trigger,
  transition,
  keyframes,
} from '@angular/animations';

export const routingAnimation = trigger('routing', [
  transition('* <=> *', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate('500ms', style({ opacity: 1, transform: 'translateX(0px)' })),
  ]),
]);
