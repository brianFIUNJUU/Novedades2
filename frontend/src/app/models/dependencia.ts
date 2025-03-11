

export class Dependencia {
  id!: string;
  juridiccion: string;
  domicilio: string;
  unidad_regional_id!: string;
  localidad_id!: string;
  departamento_id!: string;
  unidad_regional_nombre?: string; // Para almacenar el nombre de la unidad regional solo esta definido en el front
  localidad_nombre?: string; // Para almacenar el nombre de la localidad solo esta definido en el front
  departamento_nombre?: string; // Para almacenar el nombre del departamento solo esta definido en el front
 
//
  constructor() {
    this.juridiccion = "";
    this.domicilio = "";
    
    
  }
}