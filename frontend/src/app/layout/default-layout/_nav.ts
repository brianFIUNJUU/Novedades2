import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'componentes',
    title: true
  },
  
  
  {
    name: 'Gestión Operativa',
    url: '/tableros',
    iconComponent: { name: 'cil-notes' },
    children: [
         
      {
        name: 'Registro de Operativos',
        url: '/tableros/distribucionform',
        icon: 'nav-icon-bullet',
                attributes: { style: 'font-size: 12px;' }
      },
      {
        name: 'Opearativos registrados',  
        url: '/tableros/distribucionlist',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;' }
      },
      {
        name: 'Registro de Intervenciones',
        url: '/tableros/novedades',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;' }

      },
      {
        name: 'Intervenciones registradas',
        url: '/tableros/novedades-list',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;' }

      },
      {
        name: 'Resgitro de Partes Diarios',
        url: '/tableros/partes-diarios',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;' }
      },
      {
        name:'Partes Diarios registrados',
        url: '/tableros/partes-diarios-list',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;' }
      }
      
    ]
  },
   {
    name: 'Resultados  las intervenciones',
    attributes: { style: ' white-space: normal;' },
    url: '/tableros',
    iconComponent: { name: 'cil-chart' },
    children: [
      {
        name: 'Elementos sustraidos/secuestrados',
        url: '/tableros/elemento',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;; white-space: normal;' }
      },
        {
        name: 'Victimarios',
        url: '/tableros/persona',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;' }

      }
   
    ]
  },

  {
    name: 'Base de datos',
    url: '/tableros',
    iconComponent: { name: 'cil-file' },
    children: [
 
    
      {
        name: 'personal',
        url: '/tableros/personal',
        icon: 'nav-icon-bullet',
                attributes: { style: 'font-size: 12px;' }

      },
      {
        name: 'dependencia',
        url: '/tableros/dependencia',
        icon: 'nav-icon-bullet',
                attributes: { style: 'font-size: 12px;' }

      },    
      {
        name: 'vigilancia',
        url: '/tableros/vigilancia',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;' }
      }
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
        attributes: { style: 'font-size: 12px;' }
      },
      {
        name: 'Usuarios',
        url: '/tableros/usuario',
        icon: 'nav-icon-bullet',
        attributes: { style: 'font-size: 12px;' }
      }
 
    ]
  }
  
  ,
 
  {
    title: true,
    name: 'ASISTENCIA',
    class: 'mt-auto'
  },
  // {
  //   name: 'Tutoriales',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { style: 'font-size: 14px;' }
  // },
  {
    name:'Ayuda y contacto',
   iconComponent: { name: 'cil-envelope-open' },
   url: '/tableros/chat',
    attributes: {  style: 'font-size: 14px;' }
  },
    

];
