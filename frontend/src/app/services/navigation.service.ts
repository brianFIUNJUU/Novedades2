import { Injectable } from '@angular/core';
import { INavData } from '@coreui/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private authService: AuthenticateService) {}

  getNavItems(): Observable<INavData[]> {
    return this.authService.getUserType().pipe(
      map(userType => {
        const items: INavData[] = [
          {
            name: 'componentes',
            title: true
          },
          {
            name: 'Gestión de Vigilancias',
            url: '/tableros',
            iconComponent: { name: 'cil-notes' },
            children: [
              {
                name: 'Formulario de Novedades',
                url: '/tableros/novedades',
                icon: 'nav-icon-bullet'
              },
              {
                name: 'Listado de Novedades',
                url: '/tableros/novedades-list',
                icon: 'nav-icon-bullet'
              }
            ]
          },
          {
            name: 'Formularios',
            url: '/tableros',
            iconComponent: { name: 'cil-chart' },
            children: [
              {
                name: 'dependencia',
                url: '/tableros/dependencia',
                icon: 'nav-icon-bullet'
              }
            ]
          },
          {
            title: true,
            name: 'Links',
            class: 'mt-auto'
          },
          {
            name: '¡Contactenos!',
            url: 'https://observatorio.seguridad.jujuy.gob.ar/',
            iconComponent: { name: 'cil-description' },
            attributes: { target: '_blank' }
          }
        ];

        if (userType === 'administrador') {
          items.push({
            name: 'Gestion de Usuarios',
            url: '/login',
            iconComponent: { name: 'cil-user' },
            children: [
              {
                name: 'Usuarios',
                url: '/tableros/usuario',
                icon: 'nav-icon-bullet'
              }
            ]
          });
        }

        return items;
      })
    );
  }
}