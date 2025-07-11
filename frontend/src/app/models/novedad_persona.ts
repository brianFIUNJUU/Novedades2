export class NovedadPersona {
  novedad_id: number;
  persona_id: number;
  estado?: string;
  demorado?: boolean;
  constructor(novedad_id: number, persona_id: number, estado?: string, demorado?: boolean) {
    this.novedad_id = novedad_id;
    this.persona_id = persona_id;
    this.estado = estado;
    this.demorado = demorado;
  }
}