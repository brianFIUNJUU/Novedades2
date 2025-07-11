export class Items {
  id?: number;
  parte_diario_id?: number;
  fecha: string;
  hora: string;
  titulo: string;
  descripcion: string;
    tempId?: number; // Propiedad temporal para manejo en frontend

  constructor() {
    this.fecha = ''; // Puede ser una cadena vacía o una fecha por defecto
    this.hora = '';
    this.titulo = '';
    this.descripcion = '';
  }
}