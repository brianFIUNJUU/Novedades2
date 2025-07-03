import { Categoria } from './categoria';

export class Elemento {
    id!: number;
    elemento_nombre: string;
    categoria_id: number;
    categoria?: Categoria;
    caracteristicas:string;
    cantidad?: number;

    constructor() {
        this.elemento_nombre = "";
        this.caracteristicas = "";
        this.categoria_id = 0;
        this.cantidad=1;
    }
}