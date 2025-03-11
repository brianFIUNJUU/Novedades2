import { Categoria } from './categoria';

export class Elemento {
    id!: number;
    elemento_nombre: string;
    categoria_id: number;
    categoria?: Categoria;

    constructor() {
        this.elemento_nombre = "";
        this.categoria_id = 0;
    }
}