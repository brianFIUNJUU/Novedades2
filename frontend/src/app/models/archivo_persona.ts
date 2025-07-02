export class ArchivoPersona {
  id!: number;
  persona_id!: number;
  nombre: string;
  ruta: string;
  tipo: string;
  fecha_subida: string; // ISO string, puede convertirse a Date si lo prefieres
  constructor(){
  
    this.nombre = '';
    this.ruta = '';
    this.tipo = '';
    this.fecha_subida = '';
  }
}