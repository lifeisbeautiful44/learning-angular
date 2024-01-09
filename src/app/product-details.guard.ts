import { CanActivateFn } from '@angular/router';

export const productDetailsGuard: CanActivateFn = (route, state) => {
  return true;
};
