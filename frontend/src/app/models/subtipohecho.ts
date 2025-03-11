import { TipoHecho } from './tipohecho';

export class SubtipoHecho {
  id!: number;
  subtipohecho!: string;
  tipo_hecho_id!: number;
  tipo_hecho?: TipoHecho;

}