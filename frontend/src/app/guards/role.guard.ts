import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const authService = inject(AuthenticateService);

  const allowedRoles = route.data['roles'] as string[];
  const userType = authService.getCurrentUserTypeSync();

  if (!userType) {
      console.warn('Acceso denegado: usuario no autenticado, redirigiendo a login.');

    router.navigate(['/login']);
    return false;
  }

  if (allowedRoles.includes(userType)) {
    return true;
  } else {
    console.warn(`Acceso denegado: el usuario con rol "${userType}" no tiene permisos para acceder a esta ruta.`);
    return false;
  }
};