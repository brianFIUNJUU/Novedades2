export class NovedadElemento {
  id?: number;
  novedad_id!: number;
  elemento_id!: number;
  elemento_nombre?: string;
  categoria_nombre?: string;
  cantidad!: number;
  estado!: string; // 'recuperado', 'no recuperado', 'secuestrado', etc.
  descripcion?: string;
  tipo?: string;

  // Relación opcional para mostrar datos completos si se hace include en backend
  elemento?: any;
  novedad?: any;

  constructor() {
    this.novedad_id = 0;
    this.elemento_id = 0;
    this.cantidad = 1;
    this.estado = '';
    this.elemento_nombre = '';
    this.categoria_nombre = '';
    this.descripcion = '';
    this.tipo = '';
  }
}