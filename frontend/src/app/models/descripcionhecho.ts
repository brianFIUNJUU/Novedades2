import { TipoHecho } from './tipohecho';
import { SubtipoHecho } from './subtipohecho';

export class DescripcionHecho {
  id: number;
  descripcion_hecho: string;
  codigo: string;
  tipo_hecho_id: number;
  subtipohecho_id: number;
  tipo_hecho?: TipoHecho;
  subtipo_hecho?: SubtipoHecho;

  constructor(
    id: number = 0,
    descripcion_hecho: string = '',
    codigo: string = '',
    tipo_hecho_id: number = 0,
    subtipohecho_id: number = 0,
    tipo_hecho?: TipoHecho,
    subtipo_hecho?: SubtipoHecho
  ) {
    this.id = id;
    this.descripcion_hecho = descripcion_hecho;
    this.codigo = codigo;
    this.tipo_hecho_id = tipo_hecho_id;
    this.subtipohecho_id = subtipohecho_id;
    this.tipo_hecho = tipo_hecho;
    this.subtipo_hecho = subtipo_hecho;
  }
}
