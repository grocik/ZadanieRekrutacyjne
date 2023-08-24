import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const jwtHelper = inject(JwtHelperService);
  const router = inject(Router);

  // pobranie tokenu ze schowka
  const token = localStorage.getItem("jwt");

  //jeżeli token istnieje i nie jest przeterminowany pozwalamy na dostęp
  if(token && !jwtHelper.isTokenExpired(token)){
    return true;
  }
  //jeżeli nie przekierowanie do logowania
  router.navigate(["login"]);
  return false;
};
