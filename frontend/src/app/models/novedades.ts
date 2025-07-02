import { Persona } from "./persona";
import { Personal } from "./personal";
export class Novedades {
  id!: number;
  operativo_id!: number | null;  
  operativo_nombre!: string;
  fecha!: string;
  horario!: string;
  unidad_regional_id!: number;
  unidad_regional_nombre!: string;
  cuadrante_id!: string;
  cuadrante_nombre!: string;
  lugar_hecho!: string;
  latitud!: string;
  longitud!: string;
  origen_novedad!: string;
  horaIncidencia!: string;
  n_incidencia!: number;
  unidad_interviniente!: string;
  codigo!: string 
  tipo_hecho_id!: number;
  tipo_hecho!: string;
  subtipo_hecho_id!:number;
  subtipo_hecho!: string;
  descripcion_hecho_id!: number;
  descripcion_hecho!: string;
  modus_operandi_id!: number | null;  
  modus_operandi_nombre!: string;
  descripcion!: string;
  tipo_lugar!: string;
  personal_autor_id!: number;
  personal_autor_nombre!: string;
  personal_autor_legajo!: string;
  personas_involucrados!: { id: number,legajo:string,jerarquia:string, nombre: string }[]; // Array de objetos con ID y nombre de personal involucrado
  elemento_secuestrado!: { elemento: string, descripcion: string, caracteristicas:string }[];
  bien_recuperado_no!: { elemento: string, descripcion: string ,caracteristicas:string}[];
  bien_recuperado!: { elemento: string, descripcion: string, caracteristicas:string }[];

  observaciones!: string;
  unidad_actuante!: string;
  oficial_cargo_id: number | null;  

  estado!: boolean;
  archivo!: string;
  archivo1!: string;
  archivo2!: string;
  archivo3!: string;
  archivo4!: string;
  archivo5!: string;
  tipoArchivo!: string;
  tipoArchivo1!: string;
  tipoArchivo2!: string;
  tipoArchivo3!: string;
  tipoArchivo4!: string;
  tipoArchivo5!: string;
  nombreArchivo!: string;
  nombreArchivo1!: string;
  nombreArchivo2!: string;
  nombreArchivo3!: string;
  nombreArchivo4!: string;
  nombreArchivo5!: string;
  personas!: number[]; // Array de números para la vinculación con la base de datos
  policias!: number[]; // Array de números para la vinculación con la base de datos
  personaEstado!: { id: number, estado: string }[]; // Array de objetos con ID y estado de personas
 
  personasDetalles!: Persona[]; // Array de objetos Persona
  personalAutor?: Personal; // Agregar esta propiedad para almacenar los datos del personal autor


  constructor() {
    this.fecha = '';
    this.horario = '';
    this.unidad_regional_id = 0;
    this.unidad_regional_nombre = '';
    this.cuadrante_id = '';
    this.cuadrante_nombre = '';
    this.lugar_hecho = '';
    this.latitud = '';
    this.longitud = '';
    this.origen_novedad = '';
    this.horaIncidencia = '';
    this.n_incidencia = 0;
    this.unidad_interviniente = '';
    this.codigo = '';
    this.tipo_hecho = '';
    this.subtipo_hecho = '';
    this.descripcion_hecho = '';
    this.modus_operandi_id = 0;
    this.modus_operandi_nombre = '';
    this.descripcion = '';
    this.tipo_lugar = '';
    this.personal_autor_id = 0;
    this.personal_autor_nombre = '';
    
    this.observaciones = '';
    this.oficial_cargo_id = 0;
 
    this.estado = false;
    this.unidad_regional_nombre = '';
    this.cuadrante_nombre = '';
    this.archivo = '';
    this.archivo1 = '';
    this.archivo2 = '';
    this.archivo3 = '';
    this.archivo4 = '';
    this.archivo5 = '';
    this.tipoArchivo = '';
    this.tipoArchivo1 = '';
    this.tipoArchivo2 = '';
    this.tipoArchivo3 = '';
    this.tipoArchivo4 = '';
    this.tipoArchivo5 = '';
    this.nombreArchivo = '';
    this.nombreArchivo1 = '';
    this.nombreArchivo2 = '';
    this.nombreArchivo3 = '';
    this.nombreArchivo4 = '';
    this.nombreArchivo5 = '';
    this.personas = [];
    this.personaEstado = []; // Inicializa el nuevo array
    this.personasDetalles = [];
  
  }
}