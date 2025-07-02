export class OperativoPersonal {
  id?: number;
  operativo_id!: number;
  personal_id!: number;
  personal_legajo?: string;
  personal_nombre?: string;
  personal_jerarquia?: string;
  operativo_cuadrante_id!: number;
  grupo?: string;
  latitud?: string;
  longitud?: string;
  asistencia?: string;
  observaciones?: string;

  constructor() {
    this.operativo_id = 0;
    this.personal_id = 0;
    this.operativo_cuadrante_id = 0;
    this.grupo = '';
    this.latitud = '';
    this.longitud = '';
    this.asistencia = '';
    this.observaciones = '';
  }
}