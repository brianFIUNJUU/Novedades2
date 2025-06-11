import { Routes } from '@angular/router';
import { roleGuard } from '../../guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tableros'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
        {
        path: 'vigilancia',
        loadComponent: () => import('./vigilancia/vigilancia.component').then(m => m.VigilanciaComponent),
        canActivate: [roleGuard],
        data: { title: 'Vigilancia', roles: ['administrador', 'usuarioDOP'] }
      },
      {
        path: 'escuela',
        loadComponent: () => import('./escuela/escuela.component').then(m => m.EscuelaComponent),
        data: {
          title: 'Escuela'
        }
      },
      {
        path: 'delito',
        loadComponent: () => import('./delito/delito.component').then(m => m.DelitoComponent),
        data: {
          title: 'delito'
        }
      },
      {
        path: 'violencia',
        loadComponent: () => import('./violencia/violencia.component').then(m => m.ViolenciaComponent),
        data: {
          title: 'Violencia'
        }
      },
      {
        path: 'persona',
        loadComponent: () => import('./persona/persona.component').then(m => m.PersonaComponent),
        data: {
          title: 'Persona'
        }
      },
      {
        path: 'personal',
        loadComponent: () => import('./personal/personal.component').then(m => m.PersonalComponent),
        data: {
          title: 'Personal'
        }
      },
      {
        path: 'dependencia',
        loadComponent: () => import('./dependencia/dependencia.component').then(m => m.DependenciaComponent),
        data: {
          title: 'Dependencia'
        }
      },
      {
        path: 'funcionario',
        loadComponent: () => import('./funcionario/funcionario.component').then(m => m.FuncionarioComponent),
        data: {
          title: 'Funcionario'
        }
      },
      {
        path: 'novedades',
       loadComponent: () => import('./novedades/novedades.component').then(m => m.NovedadesComponent),
        data: {
          title: 'Novedades'
        }
      },
      {
        path:'novedades-list',
        loadComponent: () => import('./novedades-list/novedades-list.component').then(m => m.NovedadesListComponent),
        data: {
          title: 'NovedadesList'
        }
      },
      {
        path: 'novedades/:id',
        loadComponent: () => import('./novedades/novedades.component').then(m => m.NovedadesComponent),
        data: {
          title: 'Actualizar Novedad'
        }
      },
        {
        path: 'distribucionlist',
        loadComponent: () => import('./distribucionlist/distribucionlist.component').then(m => m.DistribucionlistComponent),
        data: { title: 'DistribucionList'}
      },
      {
        path: 'distribucionlist/:id',
        loadComponent: () => import('./distribucionlist/distribucionlist.component').then(m => m.DistribucionlistComponent),
        canActivate: [roleGuard],
        data: { title: 'DistribucionList', roles: ['administrador'] }
      },
      {
        path: 'distribucionform',
        loadComponent: () => import('./distribucionform/distribucionform.component').then(m => m.DistribucionformComponent),
        canActivate: [roleGuard],
        data: { title: 'Distribucionform', roles: ['administrador'] }
      },
      {
        path: 'usuario',
        loadComponent: () => import('./usuario/usuario.component').then(m => m.UsuarioComponent),
        canActivate: [roleGuard],
        data: { title: 'usuario', roles: ['administrador'] }
      },
       {
        path: 'chat',
        loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent),
        data: { 
          title: 'chat'
         },
      },
      {
        path: '**',
        redirectTo: 'novedades'
      },
     
      
      
    
    ]
  } 
];
