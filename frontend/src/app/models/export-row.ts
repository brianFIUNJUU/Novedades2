export interface ExportRow {
    id: number;
    fecha: string;
    horario: string;
    unidad_regional_nombre: string;
    cuadrante_nombre: string;
    lugar_hecho: string;
    latitud: string;
    longitud: string;
    origen_novedad: string;
    unidad_interviniente: string;
    tipo_hecho: string;
    modus_operandi: string;
    descripcion: string;
    tipo_lugar: string;
    personal_autor_nombre: string;
    observaciones: string;
    unidad_actuante: string;
    oficial_cargo_nombre: string;
    victimas: string;
    victimarios: string;
    protagonistas: string;
    [key: string]: any; // Para permitir propiedades dinámicas como los elementos secuestrados, bienes recuperados, etc.
  }