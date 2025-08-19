export class Personal {
  id!: number;
  legajo!: string;
  jerarquia!: string;
  nombre!: string;
  apellido!: string;
  dni!: string;
  email!: string;
  DependenciaId!: number | null;
  unidad_regional_id!: number | null;
  dependencia_nombre!: string | null;
  unidad_regional_nombre!: string | null;

  constructor() {
    this.legajo = '';
    this.jerarquia = '';
    this.nombre = '';
    this.apellido = '';
    this.dni = '';
    this.email = '';
    this.DependenciaId = null; // <-- Cambia a null
    this.unidad_regional_id = null; // <-- Cambia a null
    this.dependencia_nombre = '';
    this.unidad_regional_nombre = '';
  }
}