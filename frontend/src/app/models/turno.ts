import { Personal } from './personal';
import { Vigilancia } from './vigilancia';

export class Turno {
  _id!: string;
  horainicio: Date;
  horafin: Date;
  fechainicio: Date;
  fechafin: Date;
  observaciones: string;
  activo: boolean;
  personal: Personal;
  vigilancia: Vigilancia;

  constructor() {
    this.horainicio = new Date();
    this.horafin = new Date();
    this.fechainicio = new Date();
    this.fechafin = new Date();
    this.observaciones = "";
    this.activo = true;
    this.personal = new Personal();
    this.vigilancia = new Vigilancia();
  }
}
