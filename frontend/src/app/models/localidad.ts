import { Departamento } from './departamento';

export class Localidad {
    id!: string;
    nombre: string;
    latitud?: string;
    longitud?: string;
    departamento_id: number;

   

    constructor() {
        this.nombre = "";
        this.departamento_id = 0;
    }
} 