import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'componentes',
    title: true
  },
  
  
  {
    name: 'Gestión de Novedades',
    url: '/tableros',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Formulario de Novedades',
        url: '/tableros/novedades',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 14px;' }

      },
      {
        name: 'Listado de Novedades',
        url: '/tableros/novedades-list',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 14px;' }

      }
    ]
  },

  {
    name: 'Base de datos',
    url: '/tableros',
    iconComponent: { name: 'cil-chart' },
    children: [
 
      {
        name: 'persona',
        url: '/tableros/persona',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 14px;' }

      },
      {
        name: 'personal',
        url: '/tableros/personal',
        icon: 'nav-icon-bullet',
                attributes: { style: 'font-size: 14px;' }

      },
      {
        name: 'dependencia',
        url: '/tableros/dependencia',
        icon: 'nav-icon-bullet',
                attributes: { style: 'font-size: 14px;' }

      },    
    ]
  },
  

  
  {
    name: 'Gestion de Usuarios',
    url: '/login',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 14px;' }
      },
      {
        name: 'Usuarios',
        url: '/tableros/usuario',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 14px;' }
      }
      ,
      {
        name: 'Chat',
        url: '/tableros/chat',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 14px;' }
      }
    ]
  }
  
  ,
 
  {
    title: true,
    name: 'ASISTENCIA',
    class: 'mt-auto'
  },
  {
    name: 'Tutoriales',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank', style: 'font-size: 14px;' }
  },
  {
    name:'Contacto del desarrollador',
   iconComponent: { name: 'cil-envelope-open' },

    attributes: { target: '_blank', style: 'font-size: 14px;' }
  },
    

];
