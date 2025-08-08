export class Usuario {
legajo: string;
  estado: boolean;
  id: string;
  uid: string;
  nombre: string;
  email: string | null; // Permitir null
  usuario: string;
  perfil: string;
  password: string;
  unidad_regional_id?: string;
  unidad_regional_nombre?: string;
  dependencia_id?: string;
  dependencia_nombre?: string;

  constructor() {
      this.id = "";
      this.nombre = ""; 
      this.email = null; // Inicializar como null
      this.usuario = "";
      this.password = "";
      this.perfil = "";
      this.legajo = "";  // Inicializar como string vacío
      this.estado = false;  // Inicializar como string vacío
      this.uid = "";
  }
}
