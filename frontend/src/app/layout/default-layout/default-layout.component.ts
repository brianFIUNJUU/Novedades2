import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';

import { DefaultFooterComponent, DefaultHeaderComponent } from './';
import { navItems as originalNavItems } from './_nav';
import { AuthenticateService } from '../../services/authenticate.service';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    RouterLink,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    DefaultHeaderComponent,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    DefaultFooterComponent
  ]
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = [...originalNavItems];  // inicializo con copia para evitar mutación
  public userType: string | null = null;

  constructor(private authService: AuthenticateService) {}

  ngOnInit(): void {
    this.authService.getUserType().subscribe(userType => {
      this.userType = userType;
      this.filterNavItems();
    });
  }
  
  filterNavItems(): void {
    this.navItems = originalNavItems
      // Filtra "Gestion de Usuarios" solo para administrador
      .filter(item => {
        if (item.name === 'Gestion de Usuarios') {
          return this.userType === 'administrador';
        }
        return true;
      })
      // Filtra hijos según reglas
      .map(item => {
        // Filtrado de hijos de "Gestión de Novedades"
        if (item.name === 'Gestión de Novedades' && item.children) {
          let children = item.children;
          // Solo administrador ve "Formulario de Operativos" y "Listado de Operativos"
          if (this.userType !== 'administrador') {
            children = children.filter(child =>
              child.name !== 'Formulario de Operativos' 
              //&& child.name !== 'Listado de Operativos'
            );
          }
          return { ...item, children };
        }
        // Filtrado de hijos "vigilancia"
        if (item.children) {
          let children = item.children;
          children = children.filter(child =>
            child.name !== 'vigilancia' ||
            this.userType === 'administrador' ||
            this.userType === 'usuarioDOP'
          );
          return { ...item, children };
        }
        return item;
      });
  }
  onScrollbarUpdate($event: any) {
    // código si quieres usar scrollbar
  }
}
