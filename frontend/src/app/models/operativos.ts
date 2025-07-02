export class Operativos {
  id?: number; // Opcional, ya que puede no estar definido al crear un nuevo operativo
  nombre_operativo!: string; // Campo obligatorio
  turno?: string; // Opcional
  observaciones?: string; // Opcional
  fecha_desde?: string; // Opcional, formato de fecha (YYYY-MM-DD)
  fecha_hasta?: string; // Opcional, formato de fecha (YYYY-MM-DD)
  horario_desde?: string; // Opcional, formato de hora
  horario_hasta?: string; // Opcional, formato de hora
  cant_total_personal?: number; // <-- Agregado
    unidades_regionales?: number[]; // <-- Agregado aquí



  constructor() {
    this.nombre_operativo = '';
    this.turno = '';
    this.observaciones = '';
    this.fecha_desde = '';
    this.fecha_hasta = '';
    this.horario_desde = '';
    this.horario_hasta = '';
    this.cant_total_personal = 0; // <-- Inicializado
        this.unidades_regionales = []; // <-- Inicializado aquí

  }
}