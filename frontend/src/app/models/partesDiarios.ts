export class PartesDiarios {
  id?: number;
  tipoHora: string;
  dependencia_id: number;
  dependencia_nombre?: string;
  unidad_regional_id: number;
  unidad_regional_nombre?: string;
  destinario: string;
  fecha_desde?: string; // Fecha de emision parte diario
  fecha_hasta?: string; // Fecha de emision parte diario
  hora_desde: string;
  hora_hasta: string;
  lapso_valor?: number; // Valor del lapso
  lapso_unidad?: string; // Unidad del lapso, por ejemplo: horas, minutos, etc.
  jefe?: string;
  jefe_op?: string;
   jefe_legajo?: string;
  jefe_op_legajo?: string;
  mayores_detenidos?:number
  menores_detenidos?:number
  vehiculos_secuestrados?:number
  motos_secuestradas?:number
  constructor() {
    this.tipoHora = '';
    this.dependencia_id = 0; // Valor por defecto
    this.dependencia_nombre = '';
    this.unidad_regional_id = 0; // Valor por defecto
    this.unidad_regional_nombre = '';
    this.destinario = '';
    this.fecha_desde = ''; // Puede ser una cadena vacía o una fecha por defecto
    this.fecha_hasta = ''; // Puede ser una cadena vacía o una fecha por defecto
    this.lapso_valor = 0; // Valor por defecto
    this.lapso_unidad = ''; // Puede ser una cadena vacía o un valor por defecto
    this.hora_desde = '';
    this.hora_hasta = '';
    this.jefe = '';
    this.jefe_op = '';
    this.mayores_detenidos = 0;
    this.menores_detenidos = 0;
    this.vehiculos_secuestrados = 0;
    this.motos_secuestradas = 0;
  }
}