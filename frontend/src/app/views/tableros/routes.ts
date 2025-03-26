import { Routes } from '@angular/router';

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
        data: {
          title: 'Vigilancia'
        }
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
        path: 'usuario',
        loadComponent: () => import('./usuario/usuario.component').then(m => m.UsuarioComponent),
        data: {
          title: 'usuario'
        }
      },
      {
        path: '**',
        redirectTo: 'novedades'
      },
      {
        path: 'chat',
        loadComponent: () => import('./chat/chat.component').then(m => m.ChatComponent),
        data: { title: 'Chat' },
      },
      
      
    
    ]
  } 
];
