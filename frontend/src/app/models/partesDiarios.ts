export class PartesDiarios {
  id?: number;
  tipoHora: string;
  dependencia_id: number;
  dependencia_nombre?: string;
  unidad_regional_id: number;
  unidad_regional_nombre?: string;
  remitente: string;
  hora_desde: string;
  hora_hasta: string;
  lapso?: string;
  jefe?: string;
  jefe_op?: string;
  constructor() {
    this.tipoHora = '';
    this.dependencia_id = 0; // Valor por defecto
    this.dependencia_nombre = '';
    this.unidad_regional_id = 0; // Valor por defecto
    this.unidad_regional_nombre = '';
    this.remitente = '';
    this.hora_desde = '';
    this.hora_hasta = '';
    this.lapso = '';
    this.jefe = '';
    this.jefe_op = '';
  }
}