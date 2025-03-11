export class Usuario {
  id: string;
  nombre: string ;
  email: string | null; // Permitir null
  usuario: string;
  password: string;
  perfil: string;
  legajo:string;
  estado:boolean;
  uid: string;

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
