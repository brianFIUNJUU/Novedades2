import { Dependencia } from './dependencia';
import { Departamento } from './departamento';
import { Localidad } from './localidad';

export class Vigilancia {
  id!: number;
  unidad_solicitante!: string;
  detalle_unidad_solicitante!: string;
  cargo_solicitante!: string;
  nro_oficio!: string;//
  oficio!: string; // archivo de oficio
  oficioUrl!: string; // URL del archivo de oficio //pendiente para probarlo
  expediente!: string;
  caratula!: string;
  unidad_regional_id!: number;
  juridiccion_id!: number;
  motivo_custodia!: string;
  modalidad_custodia!: string;
  observaciones!: string;
  recorrido_inicio!: string;
  recorrido_final!: string;
  fecha_inicio!: Date;
  vigencia!: string;
  fecha_limite!: Date;
  direccion_vigilancia!: string;
  departamento_id!: number;
  localidad_id!: number;
  latitud_vigilancia!: string;
  longitud_vigilancia!: string;
  foto_persona!: string;//foto de la victima 
  foto_personaUrl!: string; // URL de la foto de la victima //pendiente para probarlo
  nombre_persona!: string;
  nro_documento!: string;
  edad!: number;
  genero!: string;
  sexo!: string;
  telefono!: string;
  nombre_victimario!: string;
  foto_victimario!: string;
  nro_documento_victimario!: string;
  edad_victimario!: number;
  genero_victimario!: string;
  sexo_victimario!: string;
  domicilio!: string;
  vinculo!: string;
  juridiccion_correspondiente_id!: number;
  unidad_operativa_manana!: string;
  unidad_operativa_tarde!: string;
  unidad_operativa_noche!: string;
  archivo_finalizar_objetivo!: string;
  nombreArchivo_finalizar_objetivo!: string;
  situacion_objetivo!: string;
  tramite_levantamiento!: string;
  estado!: string;
  archivo?: string;
  archivo1?: string;
  archivo2?: string;
  archivo3?: string;
  archivo4?: string;
  archivo5?: string;
  activo!: boolean;
  tipoArchivo: string = '';
  tipoArchivo1: string = '';
  tipoArchivo2: string = '';
  tipoArchivo3: string = '';
  tipoArchivo4: string = '';
  tipoArchivo5: string = '';

  // Variables adicionales para el frontend
  unidad_regional_nombre?: string;
  juridiccion_nombre?: string;
  departamento?: Departamento;
  localidad?: Localidad;

  constructor() {
    this.unidad_solicitante = "";
    this.detalle_unidad_solicitante = "";
    this.cargo_solicitante = "";
    this.nro_oficio = "";
    this.oficio = "";
    this.oficioUrl = "";
    this.expediente = "";
    this.caratula = "";
    this.unidad_regional_id = 0;
    this.juridiccion_id = 0;
    this.motivo_custodia = "";
    this.modalidad_custodia = "";
    this.observaciones = "";
    this.recorrido_inicio = "";
    this.recorrido_final = "";
    this.fecha_inicio = new Date();
    this.vigencia = "";
    this.fecha_limite = new Date();
    this.direccion_vigilancia = "";
    this.departamento_id = 0;
    this.localidad_id = 0;
    this.latitud_vigilancia = "";
    this.longitud_vigilancia = "";
    this.foto_persona = "";
    this.nombre_persona = "";
    this.nro_documento = "";
    this.edad = 0;
    this.genero = "";
    this.sexo = "";
    this.telefono = "";
    this.nombre_victimario = "";
    this.foto_victimario = "";
    this.nro_documento_victimario = "";
    this.edad_victimario = 0;
    this.genero_victimario = "";
    this.sexo_victimario = "";
    this.vinculo = "";
    this.domicilio = "";
    this.juridiccion_correspondiente_id = 0;
    this.unidad_operativa_manana = "";
    this.unidad_operativa_tarde = "";
    this.unidad_operativa_noche = "";
    this.archivo_finalizar_objetivo = "";
    this.nombreArchivo_finalizar_objetivo = "";
    this.situacion_objetivo = "";
    this.tramite_levantamiento = "";
    this.archivo = ""
    this.archivo1 = "";
    this.archivo2 = "";
    this.archivo3 = "";
    this.archivo4 = "";
    this.archivo5 = "";
    this.activo = true;
    this.tipoArchivo = '';
    this.tipoArchivo1 = '';
    this.tipoArchivo2 = '';
    this.tipoArchivo3 = '';
    this.tipoArchivo4 = '';
    this.tipoArchivo5 = '';
    
    // Inicializar variables adicionales para el frontend
    this.unidad_regional_nombre = "";
    this.juridiccion_nombre = "";
    this.departamento = new Departamento();
    this.localidad = new Localidad();
  }
}