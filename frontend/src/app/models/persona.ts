export class Persona {
  id!: number;
  nombre!: string;
  apellido!: string;
  dni!: string | null; ;
  sexo!: string;
  provincia!: string;
  departamento_id?:number | null; 
  departamento_nombre!: string;
  localidad_id?: number | null; 
  localidad_nombre!: string;
  domicilio!: string;

  genero?: string;
  numero?: string;
  piso?: string;
  barrio?: string;
  email?: string;
  telefono?: string;
  profesion?: string;
  nacionalidad?: string;
  extranjero?: boolean;

  fechaNacimiento!: string;
  edad!: string;
  comparendo!:boolean;
  demorado!: boolean;
  foto!: string;
  foto_nombre!: string;
  foto_tipo!: string;
  foto1!: string;
  foto_nombre1!: string;
  foto_tipo1!: string;
  foto2!: string;
  foto_nombre2!: string;
  foto_tipo2!: string;
  novedades!: number[];
  estado?: string
  tempId?: number; // <--- Agrega esta línea

  constructor() {
    
    this.provincia = '';
   
    this.departamento_nombre = '';
    this.localidad_nombre = '';
    this.domicilio = '';
    this.extranjero = false;
    this.fechaNacimiento = '';
    this.sexo = '';
    this.edad = '';
    this.comparendo = false;
    this.demorado = false;
    this.foto = '';
    this.foto_nombre = '';
    this.foto_tipo = '';
    this.foto1 = '';
    this.foto_nombre1 = '';
    this.foto_tipo1 = '';
    this.foto2 = '';
    this.foto_nombre2 = '';
    this.foto_tipo2 = '';
    this.novedades = [];
    this.estado = '';
    
  }
}