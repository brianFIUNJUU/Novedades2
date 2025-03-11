export class Estado {
  id!: number;
  novedad_id!: number;
  persona_id!: number;
  estado!: string;

  constructor() {
    this.id = 0;
    this.novedad_id = 0;
    this.persona_id = 0;
    this.estado = ''; // Inicializa el estado como 'victima'
  }
}