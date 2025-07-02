export class TipoHecho {
  id: number;
  tipo_hecho: string;

  constructor(id: number = 0, tipo_hecho: string = '') {
    this.id = id;
    this.tipo_hecho = tipo_hecho;
  }
}