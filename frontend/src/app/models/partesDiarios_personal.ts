export class PartesDiariosPersonal {
  id?: number;
  parte_diario_id!: number;
  personal_id!: number;
  personal_datos!: string;
  rol?: string;
  situacion?: string;
  tipo_personal: string;
  personal?: any; // Relación opcional para mostrar datos completos si se hace include en backend
  constructor() {
  this.personal_datos = '';
    this.rol = '';
    this.situacion = '';
    this.tipo_personal = '';
    
  }
}