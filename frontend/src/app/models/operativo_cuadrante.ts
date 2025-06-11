export class OperativoCuadrante {
  id?: number; // Opcional, ya que puede no estar definido al crear un nuevo registro
  operativo_id!: number; // Obligatorio
  unidad_regional_id!: number; // Obligatorio
  unidad_regional_nombre?: string; // Opcional, para mostrar el nombre de la unidad regional
  cuadrante_id!: number; // Obligatorio
  cuadrante_nombre?: string; // Opcional, para mostrar el nombre del cuadrante
  jefe_cuadrante_id: number | null;
  jefe_cuadrante_nombre?: string; // Opcional, para mostrar el nombre del jefe de cuadrante
  jefe_supervisor_id!: number| null;
  jefe_supervisor_nombre?: string; // Opcional, para mostrar el nombre del jefe supervisor
    cant_total_personal?: number;
  cant_manos_libres?: number;
  cant_upcar?: number;
  cant_contravencional?: number;
  cant_dinamicos?: number;
  cant_moviles?: number;


  constructor() {
    this.operativo_id = 0;
    this.unidad_regional_id = 0;
    this.cuadrante_id = 0;
    this.jefe_cuadrante_id = 0;
    this.jefe_supervisor_id = 0;
       this.cant_total_personal = 0;
    this.cant_manos_libres = 0;
    this.cant_upcar = 0;
    this.cant_contravencional = 0;
    this.cant_dinamicos = 0;
    this.cant_moviles = 0;
  }
}