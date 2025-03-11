export class Persona {
  id!: number;
  nombre!: string;
  apellido!: string;
  dni!: string;
  sexo!: string;
  provincia!: string;
  departamento_id!: string;
  departamento_nombre!: string;
  localidad_id!: string;
  localidad_nombre!: string;
  domicilio!: string;
  fechaNacimiento!: string;
  edad!: number;
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

  constructor() {
    this.nombre = '';
    this.apellido = '';
    this.dni = '';
    this.provincia = '';
    this.departamento_id = '';
    this.departamento_nombre = '';
    this.localidad_id = '';
    this.localidad_nombre = '';
    this.domicilio = '';
    this.fechaNacimiento = '';
    this.sexo = '';
    this.edad = 0;
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