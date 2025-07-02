export class Personal {
  id!: number;
  legajo!: string;
  jerarquia!: string;
  nombre!: string;
  apellido!: string;
  dni!: string;
  email!: string;
  DependenciaId!: number;
  unidad_regional_id!: number;
  dependencia_nombre!: string;
  unidad_regional_nombre!: string;

  constructor() {
    this.legajo = '';
    this.jerarquia = '';
    this.nombre = '';
    this.apellido = '';
    this.dni = '';
    this.email = '';
    this.DependenciaId = 0;
    this.unidad_regional_id = 0;
    this.dependencia_nombre = '';
    this.unidad_regional_nombre = '';
  }
}