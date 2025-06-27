import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { NovedadesService } from '../../../services/novedades.service';
import { NovedadesPersonaService } from '../../../services/novedades_persona.service';
import { Novedades } from '../../../models/novedades';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { DependenciaService } from '../../../services/dependencia.service';
import { DepartamentoService } from '../../../services/departamento.service';
import { Cuadrante } from '../../../models/cuadrante';
import  {CuadranteService} from '../../../services/cuadrante.service';
import { LocalidadService } from '../../../services/localidad.service';
import { UnidadRegional } from '../../../models/unidad_regional';
import { Dependencia } from '../../../models/dependencia';
import { Departamento } from '../../../models/departamento';
import { Localidad } from '../../../models/localidad';
import { Persona } from '../../../models/persona';
import { Estado } from '../../../models/estado';
import { EstadoService } from '../../../services/estado.service';
import { PersonaService } from '../../../services/persona.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as bootstrap from 'bootstrap';
import { AuthenticateService } from '../../../services/authenticate.service';
import * as L from 'leaflet';
import { PersonalService } from '../../../services/personal.service'; // Importar el servicio de Personal
import {Operativos} from '../../../models/operativos'; // Importar el modelo de Operativo
import { OperativoService } from '../../../services/operativo.services';
import {ElementoService} from '../../../services/elemento.service'; // Importar el servicio de Estado
import {CategoriaService} from '../../../services/categoria.service'; // Importar el servicio de Categoría
import { Elemento } from '../../../models/elemento';
import { Categoria } from '../../../models/categoria';
import {Personal} from '../../../models/personal'; // Importar el modelo de Personal
import {TipoHecho} from '../../../models/tipohecho'; // Importar el
import {TipoHechoService} from '../../../services/tipo_hecho.service'; // Importar el
import {SubtipoHechoService} from '../../../services/subtipohecho.service'; //
import {SubtipoHecho} from '../../../models/subtipohecho'; // Importar el
import {DescripcionHecho} from '../../../models/descripcionhecho'; // Importar el
import {DescripcionHechoService} from '../../../services/descripcionhecho.service'; // Importar el
import {ModusOperandi} from '../../../models/modus_operandi'
import {PAISES} from '../../../models/paises';
import {ModusOperandiService} from '../../../services/modus_operandi.service'
import { NovedadesPersonalService } from '../../../services/novedades_personal.services';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';
import {  ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

// Configurar Leaflet para usar las imágenes desde la carpeta de activos
L.Icon.Default.imagePath = 'assets/leaflet/';
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, 
    FormsModule, 
    ReactiveFormsModule],
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit {
  novedades: Novedades[] = [];
  isUpdating: boolean = false; // Variable para determinar si estamos en modo de actualización
  isEditing: boolean = false; // Variable para determinar si estamos en modo de edición
  nuevaNovedad: Novedades = new Novedades();
  novedadGuardadaId: number | null = null;//variable para lalmacenar la id de la novedad
  victima: Persona = new Persona();
  victimario: Persona = new Persona();
  protagonista: Persona = new Persona();
  testigo: Persona = new Persona();
  nuevaPersona: Persona = new Persona(); //
  personas: Persona[] = [];//
  paises = PAISES; // Lista de países
  personasIds: number[] = []; // Lista temporal para almacenar los IDs de las personas
  personasTemporales: { persona: Persona, estado: 'victima' | 'victimario' | 'protagonista'| 'testigo' }[] = []; // Lista temporal para almacenar las personas con su esta
  isVerificar: boolean = false; // Variable para verificar si se debe mostrar el botón de verificación
  personalTemporales: {personal: Personal}[] = []; // Lista temporal para almacenar los policías con su estado
  policiasIds:number[]=[]; // Lista temporal para almacenar los IDs de los policías
 personal: Personal[] = []; // Variable para almacenar los datos del personal
   nuevaPersonal:Personal = new Personal();

  novedadId: number | null = null; // Inicializa novedadId con null
  unidadesRegionales: UnidadRegional[] = [];
  operativos: Operativos[] = [];
  localidades: Localidad[] = [];
  modusOperandiList: ModusOperandi[] = [];
  searchModusOperandi$ = new Subject<string>();
  modusOperandiOriginal: any[] = []; // Lista original sin filtrar

  departamentos: Departamento[] = [];
  dependencias: Dependencia[] = [];
  cuadrantes: Cuadrante[] = [];

  descripcionActual: string = '';

  filteredElementos: any[] = []; // Elementos filtrados
  searchText: string = ''; // Texto de búsqueda
  elementos: Elemento[] = [];
  categorias: Categoria[] = [];
  categoria: any; // Cambia categorias por categoria
  searchText$ = new Subject<string>(); // Subject para manejar el texto ingresado
  elementosOriginales: any[] = []; // Lista original de elementos
  elemento: any[] = []; // Lista de elementos filtrados
  descripcionSeleccionada: string = ''; // Para el ngModel del ng-select
  nuevoElementoSecuestrado: { elemento: string, descripcion: string, caracteristicas: string } = { elemento: '', descripcion: '', caracteristicas: '' };
  nuevoBienRecuperado: { elemento: string, descripcion: string, caracteristicas: string } = { elemento: '', descripcion: '', caracteristicas: '' };
  nuevoBienNoRecuperado: { elemento: string, descripcion: string, caracteristicas: string } = { elemento: '', descripcion: '', caracteristicas: '' };
  mostrarSelectorDudoso: boolean = false;  categoriaSeleccionada: string = '';
  elementosAgregados: { elemento: string, descripcion: string, caracteristicas:string, tipo: string }[] = [];
  modalBienRecuperadoAbierto: boolean = false;
  elementoRecuperado: boolean = false;
  elementoRecuperadoAnterior: boolean = false; // Añadido para controlar el estado anterior
  modalElementoSecuestradoAbierto: boolean = false;

  tiposHecho: TipoHecho[] = [];
  subtiposHecho: SubtipoHecho[] = [];
  descripcionesHecho: DescripcionHecho[] = [];
  descripcionesOriginales:any[] = [];

edad_valor: number = 0;
edad_unidad: string = 'años'; // por defecto
    victima_edad_valor: number = 0;
  victima_edad_unidad: string = 'años';
  
  victimario_edad_valor: number = 0;
  victimario_edad_unidad: string = 'años';
  
  protagonista_edad_valor: number = 0;
  protagonista_edad_unidad: string = 'años';
  
  testigo_edad_valor: number = 0;
  testigo_edad_unidad: string = 'años';
  mensajeError: string = '';
  selectedImage: any = null;
  nuevoLegajo: string = ''; // Variable temporal para el legajo del oficial a cargo
  oficialCargo: Personal | null = null; // Variable para almacenar los datos del oficial encontrado
  personalAutor:Personal | null = null
  usuarioNombre: string = '';
  usuarioLegajo: string = '';
  
// Variables para manejar la cámara de novedades
availableCamerasN: MediaDeviceInfo[] = []; // Lista de cámaras disponibles
currentCameraIndexN: number = 0; // Índice de la cámara actual

  ubicacionEditable: boolean = false;
  archivos: { file: File | null, base64: string, mimeType: string, fileName: string }[] = [
    { file: null, base64: '', mimeType: '', fileName: '' }
  ];
  archivosPersonas: { file: File | null, base64: string, mimeType: string, fileName: string }[] = [
    { file: null, base64: '', mimeType: '', fileName: '' }
  ];
    operativosFiltrados: any[] = [...this.operativos];
readonlyMode = false;

  editIndex: number | null = null;
  inculpados: any[] = [];
  map!: L.Map;
  marker: L.Marker | undefined;
  mostrarCamara: boolean = false;

streamNovedad!: MediaStream;
stream!: MediaStream;
videoElementRef!: HTMLVideoElement;
  // Variable para almacenar los dispositivos de cámara disponibles
availableCameras: MediaDeviceInfo[] = [];
currentCameraIndex: number = 0;
private scrollPosition: number = 0; // Almacena la posición del scroll

  // Variable temporal para indicar el contexto actual
  contextoActual: 'victima' | 'victimario'  | 'protagonista'| 'testigo'| null = null;
  constructor(
    private modusOperandiService: ModusOperandiService,
    private novedadesService: NovedadesService,
    private unidadRegionalService: UnidadRegionalService,
    private localidadService: LocalidadService,
    private departamentoService: DepartamentoService,
    private dependenciaService: DependenciaService,
    private cuadranteService: CuadranteService,
    private estadoService: EstadoService,
    public domSanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthenticateService,
    private personaService: PersonaService,
    private novedadesPersonaService: NovedadesPersonaService,
    private personalService: PersonalService, // Inyectar el servicio de Personal
    private elementoService: ElementoService , // Inyectar el servicio de Estado
    private categoriaService: CategoriaService, // Inyectar el servicio de Categoría
    private tipoHechoService: TipoHechoService, // Inyectar el servicio de TipoHecho
    private subtipoHechoService: SubtipoHechoService, // Inyectar el servicio de SubtipoHecho
    private descripcionHechoService: DescripcionHechoService,// Inyectar el servicio de DescripcionHecho
    private novedadesPersonalService: NovedadesPersonalService, // Inyectar el servicio de NovedadPersonal,
    private operativoService: OperativoService, // Inyectar el servicio de Operativo
    private cdr: ChangeDetectorRef
    
    
  ) {
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.readonlyMode = params['view'] === 'readonly';
  });
    this.route.params.subscribe(params => {
    this.novedadId = params['id'] ? +params['id'] : null;
    if (this.novedadId !== null) {
      this.isUpdating = true; // <--- MARCA QUE ESTÁS EDITANDO
      this.getNovedadById(this.novedadId.toString());
      this.cargarPersonasRelacionadas(this.novedadId);
      this.cargarPersonalRelacionado(this.novedadId);
    } else {
      this.isUpdating = false; // <--- MARCA QUE ESTÁS CREANDO
    }
  });
    this.getAllNovedades();
    this.cargarUnidadesRegionales();
    this.cargarDepartamentos();
    this.cargarElementos(); // Cargar elementos al inicializar el componente
    this.cargarCategorias();
    this.setDefaultTime();
    this.cargarModusOperandi();
    this.inicializarArchivos();
    this.configurarFiltradoModusOperandi();
    const today = new Date();

if (!this.isUpdating) {
    const today = new Date();
    this.nuevaNovedad.fecha = today.toISOString().split('T')[0];
  }    
    this.authService.getUserInfo().subscribe(userInfo => {
      this.usuarioNombre = userInfo.nombre;
      this.usuarioLegajo = userInfo.legajo;
       if (!this.isUpdating) {
      this.cargarDatosPersonal();
    }
    });
    this.initMap();
    this.nuevaNovedad.elemento_secuestrado = [];
    this.nuevaNovedad.bien_recuperado = [];
    this.nuevaNovedad.bien_recuperado_no = [];
    this.nuevaNovedad.oficial_cargo_id = null; // Inicializar en null
    this.nuevaNovedad.modus_operandi_id=null; // Inicializar
    this.victima.departamento_id = null;
    this.victimario.departamento_id = null;
    this.protagonista.departamento_id = null;
    this.testigo.departamento_id = null;
    this.victima.localidad_id = null;
    this.victimario.localidad_id = null;
    this.protagonista.localidad_id = null;
    this.testigo.localidad_id = null;
      this.nuevaPersona.departamento_id = null;
    this.nuevaPersona.localidad_id = null;
        
    this.authService.getUserInfo().subscribe(userInfo => {
        this.usuarioLegajo = userInfo.legajo;
          this.getOperativosPorLegajo(this.usuarioLegajo);
      });
    
    
    // this.cargarTiposHecho();
    this.configurarFiltrado(); // Configura el filtrado aquí
    this.cargarDescripcionesHechos();
    this.configurarFiltradoDescripcion();
    this.resetArchivosPersona()
  } 

  // Función para cerrar el modal
getOperativosPorLegajo(legajo: string): void {
    this.operativoService.getOperativosPorLegajo(legajo).subscribe({
      next: (data: Operativos[]) => {
        this.operativosFiltrados = data;
      },
      error: (err) => {
        console.error('Error al cargar los operativos por legajo:', err);
        Swal.fire('Error', 'No se pudieron obtener los operativos por legajo.', 'error');
      }
    });
  }
     onOperativoChange(event: any): void {
    const selectedId = +event.target.value || this.nuevaNovedad.operativo_id;
    const operativoSeleccionado = this.operativosFiltrados.find(o => o.id === selectedId);
    if (operativoSeleccionado) {
      this.nuevaNovedad.operativo_id = operativoSeleccionado.id;
      this.nuevaNovedad.operativo_nombre = operativoSeleccionado.nombre_operativo;
    } else {
      this.nuevaNovedad.operativo_nombre = '';
    }
  }
  
        abrirModal() {
      this.modalBienRecuperadoAbierto = true;
      this.elementoRecuperadoAnterior = this.elementoRecuperado;
      // Sincroniza la descripción actual con el estado actual
      if (this.elementoRecuperado) {
        this.descripcionActual = this.nuevoBienRecuperado.caracteristicas || '';
      } else {
        this.descripcionActual = this.nuevoBienNoRecuperado.caracteristicas || '';
      }
      this.bloquearScroll();
    }


  cerrarModal(): void {
    const modalElement = document.getElementById('modalBienNoRecuperado');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
    this.modalBienRecuperadoAbierto = false; // Cerrar el modal
    this.desbloquearScroll(); // Desbloquear el scroll al cerrar el modal
  }
  // Bloquear el scroll del body
  bloquearScroll() {
    // Guarda la posición actual del scroll
    this.scrollPosition = window.scrollY;
    // Aplica estilos para bloquear el scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.width = '100%';
  }

  // Desbloquear el scroll del body
  desbloquearScroll() {
    // Restaura la posición del scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, this.scrollPosition);
  }

   cargarJuridiccionNombre(personal: Personal): void {
    this.dependenciaService.getDependencia(personal.DependenciaId.toString()).subscribe(
      (dependencia: Dependencia) => {
        personal.dependencia_nombre = dependencia.juridiccion;
        this.nuevaNovedad.unidad_actuante = personal.dependencia_nombre; // Asignar el valor a nuevaNovedad.unidad_actuante
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener jurisdicción:', error.message);
      }
    );
  }
  configurarFiltradoModusOperandi() {
    this.searchModusOperandi$
      .pipe(
        debounceTime(300), // Espera 300ms después de cada tecla
        distinctUntilChanged(), // Evita llamadas repetitivas con el mismo valor
        switchMap((texto) => this.filtrarModusOperandi(texto)) // Filtra los resultados
      )
      .subscribe((resultados) => {
        this.modusOperandiList = resultados; // Actualiza la lista filtrada
      });
  }

  filtrarModusOperandi(texto: string): Observable<ModusOperandi[]> {
    if (!texto) {
      return of(this.modusOperandiOriginal); // Si no hay texto, devuelve la lista completa
    }
    const textoNormalizado = texto.toLowerCase().trim();
    const resultados = this.modusOperandiOriginal.filter((modus) =>
      modus.modus_operandi.toLowerCase().includes(textoNormalizado) // Filtra los elementos
    );
    return of(resultados); // Devuelve los resultados filtrados
  }


  asignarModusOperandi(modusOperandiId: number | null): void {
    if (!modusOperandiId) {
      this.nuevaNovedad.modus_operandi_id = null;
      this.nuevaNovedad.modus_operandi_nombre = '';
      return;
    }
    const modusOperandiSeleccionado = this.modusOperandiOriginal.find(
      (modus) => modus.id === modusOperandiId
    );
    if (modusOperandiSeleccionado) {
      this.nuevaNovedad.modus_operandi_id = modusOperandiSeleccionado.id;
      this.nuevaNovedad.modus_operandi_nombre = modusOperandiSeleccionado.modus_operandi;
    }
  }
  cargarModusOperandi(): void {
    this.modusOperandiService.getAllModusOperandi().subscribe(
      (data: ModusOperandi[]) => {
        this.modusOperandiOriginal = data; // Guarda la lista completa
        this.modusOperandiList = data; // Inicializa la lista filtrada con la lista completa
      },
      (error) => {
        console.error('Error al cargar modus operandi:', error);
      }
    );
  }

  cargarModusOperandiPorId(modusOperandiId: number): void {
    this.modusOperandiService.getModusOperandiById(modusOperandiId).subscribe(
      (data) => {
        this.nuevaNovedad.modus_operandi_id = data.id;
        this.nuevaNovedad.modus_operandi_nombre = data.modus_operandi;
      },
      (error) => {
        console.error('Error al cargar modus operandi de hecho:', error);
      }
    );
  }
     
  buscarOficialCargoPorLegajo(legajo: string): void {
    if (!legajo) {
      this.mensajeError = 'Por favor, ingrese un legajo válido.';
      return;
    }

    this.personalService.getPersonalByLegajo(legajo).subscribe(
      (personal: Personal) => {
        this.nuevaNovedad.oficial_cargo_id = personal.id;
        this.oficialCargo = personal; 
        this.cargarJuridiccionNombre(personal);
        console.log('oficial a cargo encontrado:', personal);
        this.mensajeError = ''; // Limpiar el mensaje de error
      },
      (error) => {
        console.log('Error al buscar oficial a cargo por legajo:', error);
        this.mensajeError = 'No se encontró un oficial a cargo con el legajo proporcionado.';
        this.oficialCargo = null; // Limpiar los datos del oficial si no se encuentra 
      }
    );
  }
 

    cargarDatosOficialCargoPorId(id: number): void {
    this.personalService.getPersonal(id.toString()).subscribe(
      (personal: Personal) => {
        this.oficialCargo = personal; // Almacenar los datos del oficial de cargo
        console.log('Oficial de cargo encontrado:', personal);
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener los datos del oficial de cargo:', error.message);
      }
    );
  }
  
  cargarDatosOficialCargo(): void {
    console.log('Estado de isUpdating:', this.isUpdating);
    if (this.isUpdating) {
      if (this.nuevaNovedad.oficial_cargo_id !== null) {
        this.cargarDatosOficialCargoPorId(this.nuevaNovedad.oficial_cargo_id);
      }
    } else {
      // No buscar automáticamente el oficial de cargo
      console.log('No se buscará automáticamente el oficial de cargo');
    }
  }
    actualizarOficialCargo(legajo: string): void {
    Swal.fire({
      icon: 'warning',
      title: 'Actualizar Oficial de Cargo',
      text: '¿Deseas actualizar el valor del oficial de cargo?',
      showCancelButton: true,
      confirmButtonText: 'Sí, actualizar',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.buscarOficialCargoPorLegajo(legajo);
      }
    });
  }


    getNovedadById(id: string): void {
      this.novedadesService.getNovedadById(id).subscribe(
        (data: Novedades) => {
          this.nuevaNovedad = data;
          this.isUpdating = true; // Cambiar a modo de actualización
          this.cargarArchivosNovedad();
          this.actualizarMapaDesdeFormulario();
          this.actualizarElementosAgregados(); // Llamar a actualizarElementosAgregados
          if (this.nuevaNovedad.fecha) {
        this.nuevaNovedad.fecha = this.nuevaNovedad.fecha.split('T')[0];
      }
          if (this.nuevaNovedad.cuadrante_id) {
            this.cargarCuadrantePorId(+this.nuevaNovedad.cuadrante_id); // Cargar los cuadrantes por ID
          }
          if (this.nuevaNovedad.tipo_hecho_id) {
            this.cargarTipoHechoPorId(+this.nuevaNovedad.tipo_hecho_id); // Cargar el tipo de hecho por ID
          }
          if (this.nuevaNovedad.subtipo_hecho_id) {
            this.cargarSubtipoHechoPorId(+this.nuevaNovedad.subtipo_hecho_id); // Cargar el subtipo de hecho por ID
          }
          if (this.nuevaNovedad.descripcion_hecho_id) {
            this.cargarDescripcionHechoPorId(+this.nuevaNovedad.descripcion_hecho_id); // Cargar la descripción de hecho por ID
          }
          if(this.nuevaNovedad.modus_operandi_id){
            this.cargarModusOperandiPorId(+this.nuevaNovedad.modus_operandi_id);
          }
          Swal.fire('Éxito', 'Novedad cargada', 'success');
        },
        (error: HttpErrorResponse) => {
          console.error('Error al obtener novedad:', error.message);
          Swal.fire('Error', 'Error al obtener novedad: ' + error.message, 'error');
        }
      );
    }
  
    cargarTiposHecho(): void {
      this.tipoHechoService.getTiposHecho().subscribe(
        data => {
          this.tiposHecho = data;
        },
        error => {
          console.error('Error al cargar tipos de hecho:', error);
        }
      );
    }
  
    cargarSubtiposHecho(tipoHechoId: number): void {
      const tipoHechoSeleccionado = this.tiposHecho.find(tipo => tipo.id === tipoHechoId);
      if (tipoHechoSeleccionado) {
        this.nuevaNovedad.tipo_hecho = tipoHechoSeleccionado.tipo_hecho;
      }
  
      this.subtipoHechoService.getSubtiposHechoByTipoHecho(tipoHechoId).subscribe(
        data => {
          this.subtiposHecho = data;
          this.descripcionesHecho = []; // Limpiar descripciones cuando se cambia el subtipo
        },
        error => {
          console.error('Error al cargar subtipos de hecho:', error);
        }
      );
    }
  
    cargarDescripcionesHecho(subtipoHechoId: number): void {
      const subtipoHechoSeleccionado = this.subtiposHecho.find(subtipo => subtipo.id === subtipoHechoId);
      if (subtipoHechoSeleccionado) {
        this.nuevaNovedad.subtipo_hecho = subtipoHechoSeleccionado.subtipohecho;
      }
  
      this.descripcionHechoService.getDescripcionesHechoBySubtipoHecho(subtipoHechoId).subscribe(
        data => {
          this.descripcionesHecho = data;
        },
        error => {
          console.error('Error al cargar descripciones de hecho:', error);
        }
      );
    }
    configurarFiltradoDescripcion() {
      this.searchText$
        .pipe(
          debounceTime(300), // Espera 300ms después de cada tecla
          distinctUntilChanged(), // Evita llamadas repetitivas con el mismo valor
          switchMap((text) => this.filtrarDescripciones(text)) // Filtra descripciones
        )
        .subscribe((resultados) => {
          this.descripcionesHecho = resultados; // Actualiza la lista de descripciones
        });
    }
    
    filtrarDescripciones(texto: string) {
      if (!texto) {
        return of(this.descripcionesOriginales); // Si no hay texto, devuelve la lista original
      }
      const textoNormalizado = texto.toLowerCase().trim(); // Normaliza el texto ingresado
    
      const resultados = this.descripcionesOriginales.filter((descripcion) =>
        descripcion.descripcion_hecho.toLowerCase().startsWith(textoNormalizado) // Filtra los que comienzan con el texto ingresado
      );
    
      return of(resultados); // Retorna los resultados filtrados como un observable
    }
    onUnidadRegionalChange(event: any) {
      const selectedId = +event.target.value;
      const unidad = this.unidadesRegionales.find(u => Number(u.id) === selectedId);
      this.nuevaNovedad.unidad_regional_nombre = unidad ? unidad.unidad_regional : '';
      this.cargarCuadrantes(selectedId); // Si quieres seguir llamando a cargarCuadrantes
    }
        onCuadranteChange(event: any) {
      const selectedId = +event.target.value;
      const cuadrante = this.cuadrantes.find(c => Number(c.id) === selectedId);
      this.nuevaNovedad.cuadrante_nombre = cuadrante ? cuadrante.nombre : '';
    }
cargarDescripcionesHechos() {
  this.descripcionHechoService.getDescripcionesHecho().subscribe(
    (data) => {
      this.descripcionesHecho = data;
      this.descripcionesOriginales = data; // Guardamos una copia original para filtrado este tiene que cargar las descripciones nada mas no asignar valores
    },
    (error) => {
      console.error('Error al cargar las descripciones:', error);
    }
  );
}
asignarDescripcionHecho(descripcionId: number): void {
  console.log('Entrando al método asignarDescripcionHecho con ID:', descripcionId);

  // Prevenir llamadas con ID inválido
  if (!descripcionId) {
    console.log('ID de descripción no válido:', descripcionId);
    return;
  }

  // Llamada al servicio para obtener la descripción de hecho, tipo y subtipo por ID
  this.descripcionHechoService.getDescripcionHecho(descripcionId).subscribe(
    (data) => {
      console.log('Respuesta del servicio:', data);

      // Validar si 'tipo_hecho' y 'subtipo_hecho' existen
      if (data.tipo_hecho && data.subtipo_hecho) {
        // Asignamos los valores del tipo de hecho y subtipo de hecho
        this.nuevaNovedad.descripcion_hecho = data.descripcion_hecho;
        this.nuevaNovedad.descripcion_hecho_id = data.id;
        this.nuevaNovedad.codigo = data.codigo;
        this.nuevaNovedad.tipo_hecho = data.tipo_hecho.tipo_hecho;
        this.nuevaNovedad.tipo_hecho_id = data.tipo_hecho.id;
        this.nuevaNovedad.subtipo_hecho = data.subtipo_hecho.subtipohecho;
        this.nuevaNovedad.subtipo_hecho_id = data.subtipo_hecho.id;

        console.log('Tipo de Hecho:', this.nuevaNovedad.tipo_hecho);
        console.log('Subtipo de Hecho:', this.nuevaNovedad.subtipo_hecho);
        console.log('ID Tipo de Hecho:', this.nuevaNovedad.tipo_hecho_id);
        console.log('ID Subtipo de Hecho:', this.nuevaNovedad.subtipo_hecho_id);
      } else {
        console.error('Tipo de hecho o subtipo de hecho no encontrados');
      }
    },
    (error) => {
      console.error('Error al obtener descripción de hecho:', error);
    }
  );
}
  
   
    cargarTipoHechoPorId(tipoHechoId: number): void {
      this.tipoHechoService.getTipoHecho(tipoHechoId).subscribe(
        data => {
          this.nuevaNovedad.tipo_hecho_id = data.id;
          this.nuevaNovedad.tipo_hecho = data.tipo_hecho;
          this.cargarSubtiposHecho(data.id); // Cargar subtipos de hecho relacionados
        },
        error => {
          console.error('Error al cargar tipo de hecho:', error);
        }
      );
    }
  
    cargarSubtipoHechoPorId(subtipoHechoId: number): void {
      this.subtipoHechoService.getSubtipoHecho(subtipoHechoId).subscribe(
        data => {
          this.nuevaNovedad.subtipo_hecho_id = data.id;
          this.nuevaNovedad.subtipo_hecho = data.subtipohecho;
          this.cargarDescripcionesHecho(data.id); // Cargar descripciones de hecho relacionadas
        },
        error => {
          console.error('Error al cargar subtipo de hecho:', error);
        }
      );
    }
  
    cargarDescripcionHechoPorId(descripcionHechoId: number): void {
      this.descripcionHechoService.getDescripcionHecho(descripcionHechoId).subscribe(
        data => {
          this.nuevaNovedad.descripcion_hecho_id = data.id;
          this.nuevaNovedad.descripcion_hecho = data.descripcion_hecho;
        },
        error => {
          console.error('Error al cargar descripción de hecho:', error);
        }
      );
    }
  
onElegir(tipo: string) {
  // 1. Resetear el formulario primero
  this.resetFormulario(tipo as 'victima' | 'victimario' | 'protagonista' | 'testigo');

  // 2. Asignar edad_valor y edad_unidad según el tipo
  let persona: any;
  let edad_valor = 0;
  let edad_unidad = 'años';

  switch (tipo) {
    case 'testigo':
      persona = this.testigo;
      break;
    case 'protagonista':
      persona = this.protagonista;
      break;
    case 'victimario':
      persona = this.victimario;
      break;
    case 'victima':
      persona = this.victima;
      break;
  }

  if (persona && persona.edad) {
    const partes = persona.edad.split(' ');
    edad_valor = Number(partes[0]) || 0;
    edad_unidad = partes[1] || 'años';
  }

  // Asignar a la variable correspondiente
  switch (tipo) {
    case 'victima':
      this.victima_edad_valor = edad_valor;
      this.victima_edad_unidad = edad_unidad;
      break;
    case 'victimario':
      this.victimario_edad_valor = edad_valor;
      this.victimario_edad_unidad = edad_unidad;
      break;
    case 'protagonista':
      this.protagonista_edad_valor = edad_valor;
      this.protagonista_edad_unidad = edad_unidad;
      break;
    case 'testigo':
      this.testigo_edad_valor = edad_valor;
      this.testigo_edad_unidad = edad_unidad;
      break;
  }

  // 3. Ahora abre el modal
  switch (tipo) {
    case 'testigo':
      this.openModalTestigo();
      break;
    case 'protagonista':
      this.openModalProtagonista();
      break;
    case 'victimario':
      this.openModalInculpado();
      break;
    case 'victima':
      this.openModal();
      break;
  }
}
                abrirModalInvolucrado() {
          const modal = new (window as any).bootstrap.Modal(document.getElementById('involucradoModal'));
          modal.show();
        }
 asignarEdad(tipo: string) {
  switch (tipo) {
    case 'victima':
      this.victima.edad = `${this.victima_edad_valor} ${this.victima_edad_unidad}`;
      break;
    case 'victimario':
      this.victimario.edad = `${this.victimario_edad_valor} ${this.victimario_edad_unidad}`;
      break;
    case 'protagonista':
      this.protagonista.edad = `${this.protagonista_edad_valor} ${this.protagonista_edad_unidad}`;
      break;
    case 'testigo':
      this.testigo.edad = `${this.testigo_edad_valor} ${this.testigo_edad_unidad}`;
      break;
  }
}
  showSwalElemento() {
    Swal.fire({
      html: `
        <p>
          <strong>
            <span style="color: #0f2f53;">SELECCIONA EL TIPO DE ELEMENTO QUE DESEAS AGREGAR:</span>
          </strong>
        </p>
        <hr>
        <div class="text-start">
          <p><strong>Recordatorio:</strong></p>
          <ul style="font-size: 0.65em;">
            <li>
            <strong><u>Bien sustraído</u></strong>: Elemento que fue robado, hurtado o sustraído durante el hecho. En el formulario deberás indicar si el bien sustraído a la víctima fue recuperado o no.
            </li>
            <li>
           <strong><u>Secuestrado</u></strong>: Elementos como armas, drogas, vehículos, celulares, etc. Se refiere a cualquier objeto que estaba en posesión del victimario, de procedencia dudosa, y que no pertenecía a la víctima.
            </li>
          </ul>
        </div>
      `,
      showCancelButton: true,
      showCloseButton: true, // <-- Agrega esta línea
      confirmButtonText: 'BIEN SUSTRAÍDO',
      cancelButtonText: 'SECUESTRADO',
      customClass: {
        htmlContainer: 'text-start'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.abrirModal();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.openModalSecuestrado();
      }
    });
  }
  

  onElementoSecuestradoChange(): void {
    this.mostrarSelectorDudoso = this.nuevoElementoSecuestrado.descripcion === "Elemento de dudosa procedencia";
  
    // Si el usuario cambia a otra opción, limpiar la selección previa
    if (!this.mostrarSelectorDudoso) {
      this.nuevoElementoSecuestrado.caracteristicas = '';
    }
  }
  cargarCategoriaPorElementoSecuestrado(elementoNombre: string): void {
    console.log("Elemento seleccionado (Secuestrado):", elementoNombre);
  
    if (elementoNombre) {
      this.elementoService.getCategoriaByElemento(elementoNombre).subscribe(
        (data) => {
          this.categoriaSeleccionada = data.categoria_nombre;
          this.nuevoElementoSecuestrado.descripcion = elementoNombre;
          this.nuevoElementoSecuestrado.elemento = data.categoria_nombre;
        },
        (error) => {
          console.error('Error al cargar la categoría:', error);
        }
      );
    } else {
      this.categoriaSeleccionada = '';
      this.nuevoElementoSecuestrado = { elemento: '', descripcion: '', caracteristicas: '' };
    }
  }
  
  
  editarElemento(index: number): void {
    const elemento = this.elementosAgregados[index];
    this.editIndex = index;
  
    // Verificar qué tipo de elemento es
    if (elemento.tipo === 'Bien Recuperado') {
      this.elementoRecuperado = true;
      this.nuevoBienRecuperado = {
        elemento: elemento.elemento,
        descripcion: elemento.descripcion,
        caracteristicas: elemento.caracteristicas || ''
      };
      this.descripcionSeleccionada = elemento.descripcion;
  
      // Asegurar que el modal correcto se abra
      this.modalBienRecuperadoAbierto = false;
      setTimeout(() => {
        this.modalBienRecuperadoAbierto = true;
      }, 100);
    } 
    else if (elemento.tipo === 'Bien No Recuperado') {
      this.elementoRecuperado = false;
      this.nuevoBienNoRecuperado = {
        elemento: elemento.elemento,
        descripcion: elemento.descripcion,
        caracteristicas: elemento.caracteristicas || ''
      };
      this.descripcionSeleccionada = elemento.descripcion;
  
      // Asegurar que el modal correcto se abra
      this.modalBienRecuperadoAbierto = false;
      setTimeout(() => {
        this.modalBienRecuperadoAbierto = true;
      }, 100);
    } 
    else if (elemento.tipo === 'Elemento Secuestrado') {
      this.nuevoElementoSecuestrado = {
        elemento: elemento.elemento,
        descripcion: elemento.descripcion,
        caracteristicas: elemento.caracteristicas || ''
      };
  
      // Asegurar que se abre el modal de Elemento Secuestrado
      this.openModalSecuestrado();
    }
  }
  
  

 // Método para eliminar un elemento
// Método para eliminar un elemento
eliminarElemento(index: number): void {
  const elemento = this.elementosAgregados[index];
  if (elemento.tipo === 'Elemento Secuestrado') {
    const indexInArray = this.nuevaNovedad.elemento_secuestrado.findIndex((el: any) => el.elemento === elemento.elemento && el.descripcion === elemento.descripcion);
    if (indexInArray !== -1) {
      this.nuevaNovedad.elemento_secuestrado.splice(indexInArray, 1);
    }
  } else if (elemento.tipo === 'Bien Recuperado') {
    const indexInArray = this.nuevaNovedad.bien_recuperado.findIndex((el: any) => el.elemento === elemento.elemento && el.descripcion === elemento.descripcion);
    if (indexInArray !== -1) {
      this.nuevaNovedad.bien_recuperado.splice(indexInArray, 1);
    }
  } else if (elemento.tipo === 'Bien No Recuperado') {
    const indexInArray = this.nuevaNovedad.bien_recuperado_no.findIndex((el: any) => el.elemento === elemento.elemento && el.descripcion === elemento.descripcion);
    if (indexInArray !== -1) {
      this.nuevaNovedad.bien_recuperado_no.splice(indexInArray, 1);
    }
  }
  this.elementosAgregados.splice(index, 1);
  this.actualizarElementosAgregados(); // Llamar a actualizarElementosAgregados después de eliminar
}
  actualizarElementosAgregados(): void {
    this.elementosAgregados = [
      ...this.nuevaNovedad.elemento_secuestrado.map((item: any) => ({ ...item, tipo: 'Elemento Secuestrado' })),
      ...this.nuevaNovedad.bien_recuperado.map((item: any) => ({ ...item, tipo: 'Bien Recuperado' })),
      ...this.nuevaNovedad.bien_recuperado_no.map((item: any) => ({ ...item, tipo: 'Bien No Recuperado' }))
    ];
  }


  resetFormularioE(): void {
    // Restablece los valores a los objetos originales vacíos
    this.nuevoElementoSecuestrado = { elemento: '', descripcion: '', caracteristicas: '' };
    this.nuevoBienRecuperado = { elemento: '', descripcion: '', caracteristicas: '' };
    this.nuevoBienNoRecuperado = { elemento: '', descripcion: '', caracteristicas: '' };
    this.elementoRecuperado = false; // Restablece el valor del checkbox
    // Restablece otras propiedades como las que manejan el estado del modal
    this.mostrarSelectorDudoso = false;
    this.categoriaSeleccionada = ''; // Limpiar la categoría
    this.descripcionSeleccionada = ''; // Limpiar la descripción seleccionada
  }
  
    agregarElemento(): void {
    console.log("Estado antes de agregar:", this.elementoRecuperado, this.nuevoBienRecuperado, this.nuevoBienNoRecuperado);
  
    // Dependiendo de elementoRecuperado, se agrega al objeto adecuado
    if (this.elementoRecuperado) {
      this.agregarBienRecuperado(); // Si el checkbox está marcado
    } else {
      this.agregarBienNoRecuperado(); // Si el checkbox no está marcado
    }
  }
  agregarElementoSecuestrado() {
    const nuevoElemento = {
      ...this.nuevoElementoSecuestrado,
      tipo: 'Elemento Secuestrado',
      elementos: this.nuevoElementoSecuestrado.elemento,
      caracteristicas: this.nuevoElementoSecuestrado.caracteristicas || '' // Asegurar que existe
    };
    if (this.editIndex !== null) {
      this.elementosAgregados[this.editIndex] = nuevoElemento;
      this.nuevaNovedad.elemento_secuestrado[this.editIndex] = nuevoElemento;
      this.editIndex = null;
    } else {
      this.nuevaNovedad.elemento_secuestrado.push(nuevoElemento);
      this.elementosAgregados.push(nuevoElemento);
    }
    this.nuevoElementoSecuestrado = { elemento: '', descripcion: '', caracteristicas: '' }; // Restablece el formulario
    this.cerrarModalElementoSecuestrado();
  }
  
  agregarBienRecuperado() {
    const nuevoElemento = {
      ...this.nuevoBienRecuperado,
      tipo: 'Bien Recuperado',
      elementos: this.nuevoBienRecuperado.elemento,
      caracteristicas: this.nuevoBienRecuperado.caracteristicas || '' // Asegurar que existe
    };
    if (this.editIndex !== null) {
      this.elementosAgregados[this.editIndex] = nuevoElemento;
      this.nuevaNovedad.bien_recuperado[this.editIndex] = nuevoElemento;
      this.editIndex = null;
    } else {
      this.nuevaNovedad.bien_recuperado.push(nuevoElemento);
      this.elementosAgregados.push(nuevoElemento);
    }
    this.nuevoBienRecuperado = { elemento: '', descripcion: '', caracteristicas: '' }; 
    this.cerrarModal();
    this.resetFormularioE();
  }
  
  agregarBienNoRecuperado() {
    const nuevoElemento = {
      ...this.nuevoBienNoRecuperado,
      tipo: 'Bien No Recuperado',
      elementos: this.nuevoBienNoRecuperado.elemento,
      caracteristicas: this.nuevoBienNoRecuperado.caracteristicas || '' // Asegurar que existe
    };
    if (this.editIndex !== null) {
      this.elementosAgregados[this.editIndex] = nuevoElemento;
      this.nuevaNovedad.bien_recuperado_no[this.editIndex] = nuevoElemento;
      this.editIndex = null;
    } else {
      this.nuevaNovedad.bien_recuperado_no.push(nuevoElemento);
      this.elementosAgregados.push(nuevoElemento);
    }
    this.nuevoBienNoRecuperado = { elemento: '', descripcion: '', caracteristicas: '' };
    this.resetFormularioE();
  }
  
  
  cargarElementosPorCategoria(categoriaNombre: string): void {
    this.elementoService.getElementosByCategoria(categoriaNombre).subscribe(
      data => {
        this.elementos = data;
      },
      error => {
        this.mensajeError = 'Error al cargar elementos';
        Swal.fire('Error', 'Error al cargar elementos: ' + error.message, 'error');
      }
    );
  }
  // mi-componente.component.ts
  
  cargarElementos(): void {
    this.elementoService.getElementos().subscribe(
      (data) => {
        this.elementos = data; // Asignar los elementos a la variable
        this.elementosOriginales = data; // Guardar una copia de la lista original
      },
      (error) => {
        this.mensajeError = 'Error al cargar elementos';
        Swal.fire('Error', 'Error al cargar elementos: ' + error.message, 'error');
      }
    );
  }


  

  cargarCategoriaPorElemento(elementoNombre: string): void {
    console.log("Elemento seleccionado:", elementoNombre);
    console.log("Elemento recuperado:", this.elementoRecuperado);
  
    if (elementoNombre) {
      this.elementoService.getCategoriaByElemento(elementoNombre).subscribe(
        (data) => {
          this.categoriaSeleccionada = data.categoria_nombre;
  
          if (this.elementoRecuperado) {
            console.log("Actualizando nuevoBienRecuperado:", data);
            this.nuevoBienRecuperado.descripcion = elementoNombre;
            this.nuevoBienRecuperado.elemento = data.categoria_nombre;
          } else {
            console.log("Actualizando nuevoBienNoRecuperado:", data);
            this.nuevoBienNoRecuperado.descripcion = elementoNombre;
            this.nuevoBienNoRecuperado.elemento = data.categoria_nombre;
          }
  
          // Mantener la descripción actual si el usuario ya la modificó
          this.actualizarDescripcion();
        },
        (error) => {
          console.error('Error al cargar la categoría:', error);
        }
      );
    } else {
      this.categoriaSeleccionada = '';
      this.nuevoBienRecuperado = { elemento: '', descripcion: '', caracteristicas: '' };
      this.nuevoBienNoRecuperado = { elemento: '', descripcion: '', caracteristicas: '' };
      this.actualizarDescripcion();
    }
  }
  
  actualizarDescripcion() {
    // Si el usuario ya escribió algo, no lo sobrescribimos
    if (!this.descripcionActual || this.descripcionActual === this.nuevoBienRecuperado.caracteristicas || this.descripcionActual === this.nuevoBienNoRecuperado.caracteristicas) {
      this.descripcionActual = this.elementoRecuperado ? this.nuevoBienRecuperado.caracteristicas : this.nuevoBienNoRecuperado.caracteristicas;
    }
  }
  

  
  cambiarDescripcion() {
    // Guarda SIEMPRE el valor actual en ambos objetos
    this.nuevoBienRecuperado.caracteristicas = this.descripcionActual;
    this.nuevoBienNoRecuperado.caracteristicas = this.descripcionActual;
  
    // Ahora muestra el valor correspondiente al nuevo estado
    if (this.elementoRecuperado) {
      this.descripcionActual = this.nuevoBienRecuperado.caracteristicas;
    } else {
      this.descripcionActual = this.nuevoBienNoRecuperado.caracteristicas;
    }
  }
  
  guardarDescripcion(event: any) {
    this.descripcionActual = event.target.value;
    if (this.elementoRecuperado) {
      this.nuevoBienRecuperado.caracteristicas = this.descripcionActual;
    } else {
      this.nuevoBienNoRecuperado.caracteristicas = this.descripcionActual;
    }
  }
 
  cerrarModalElementoSecuestrado() {
    this.modalElementoSecuestradoAbierto = false;
  }
  openModalSecuestrado() {
    this.modalElementoSecuestradoAbierto = true; // Para el *ngIf
    const modalElement = document.getElementById('modalSecuestrado');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  

  configurarFiltrado() {
    this.searchText$
      .pipe(
        debounceTime(300), // Espera 300ms después de cada tecla
        distinctUntilChanged(), // Evita llamadas repetitivas con el mismo valor
        switchMap((text) => this.filtrarElementos(text)) // Filtra elementos
      )
      .subscribe((resultados) => {
        this.elementos = resultados; // Actualiza la lista de elementos una sola vez
      });
  }
  
  filtrarElementos(texto: string) {
    if (!texto) {
      return of(this.elementosOriginales); // Si no hay texto, devuelve la lista original
    }
    const textoNormalizado = texto.toLowerCase().trim(); // Normaliza el texto ingresado
  
    const resultados = this.elementosOriginales.filter((elemento) =>
      elemento.elemento_nombre.toLowerCase().startsWith(textoNormalizado) // Filtra solo los que comienzan con el texto ingresado
    );
  
    return of(resultados); // Retorna los resultados filtrados como un observable
  }
   initMap(): void {
    // Inicializa el mapa centrado en una ubicación predeterminada
    this.map = L.map('map').setView([-24.18769889437684, -65.29709953331486], 15);
  
    // Agregar la capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  
    // Manejar el evento de clic para obtener latitud y longitud
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      if (this.isUpdating && !this.ubicacionEditable) {
        // Si está en modo de actualización y la ubicación no es editable, no permitir actualizar
        return;
      }
  
      this.nuevaNovedad.latitud = e.latlng.lat.toString();
      this.nuevaNovedad.longitud = e.latlng.lng.toString();
  
      // Verifica si map y marker están inicializados
      if (this.map && this.marker) {
        this.map.removeLayer(this.marker);
      }
  
      // Agregar el marcador en la posición seleccionada
      this.marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    });
  }
  
  actualizarMapaDesdeFormulario(): void {
    const lat = parseFloat(this.nuevaNovedad.latitud);
    const lng = parseFloat(this.nuevaNovedad.longitud);
  
    if (!isNaN(lat) && !isNaN(lng)) {
      this.map.setView([lat, lng], 17);
  
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
  
      this.marker = L.marker([lat, lng]).addTo(this.map);
    }
  }
  obtenerUbicacionActual(): void {
    if (navigator.geolocation) {
      Swal.fire({
        title: 'Obteniendo ubicación...',
        text: 'Por favor, espere mientras obtenemos su ubicación actual.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.nuevaNovedad.latitud = lat.toString();
          this.nuevaNovedad.longitud = lng.toString();
          this.map.setView([lat, lng], 17);
  
          if (this.marker) {
            this.map.removeLayer(this.marker);
          }
  
          this.marker = L.marker([lat, lng]).addTo(this.map);
          Swal.fire('Ubicación encontrada', 'La ubicación actual ha sido establecida en el mapa.', 'success');
        },
        (error) => {
          console.log('Error al obtener la ubicación:', error);
          Swal.fire('Error', 'No se pudo obtener la ubicación actual.', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'La geolocalización NO TIENES CAMARA.');
    }
  }
  preguntarDesbloquearUbicacion(): void {
    Swal.fire({
      title: '¿Desea modificar la ubicación?',
      text: 'Esta acción permitirá modificar la latitud y longitud.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, desbloquear',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ubicacionEditable = true;
        Swal.fire('Desbloqueado', 'Ahora puede modificar la ubicación.', 'success');
      }
    });
  }
  getAllNovedades(): void {
    this.novedadesService.getAllNovedades().subscribe(
      (data: Novedades[]) => {
        this.novedades = data;
        this.novedades.forEach(novedad => {
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener novedades:', error.message);
        Swal.fire('Error', 'Error al obtener novedades: ' + error.message, 'error');
      
      }
    );
  }
   
       cargarCuadrantePorId(cuadranteId: number): void {
      this.cuadranteService.getCuadrante(cuadranteId.toString()).subscribe(
        data => {
          this.cuadrantes = [data];
        },
        error => {
          this.mensajeError = 'Error al cargar el cuadrante';
          Swal.fire('Error', 'Error al cargar el cuadrante: ' + error.message, 'error');
        }
      );
    }
      cargarDatosPersonal(): void {
      if (!this.isUpdating) {
        this.buscarPersonalAutorPorLegajoUsuario();
      }
    }

  buscarPersonalAutorPorLegajoUsuario(): Promise<void> {
    return new Promise((resolve, reject) => {
      const legajo = this.usuarioLegajo;
      if (!legajo) { reject(); return; }
      this.personalService.getPersonalByLegajo(legajo).subscribe(
        (personal: Personal) => {
          this.nuevaNovedad.personal_autor_id = personal.id;
          this.nuevaNovedad.personal_autor_legajo = personal.legajo;
          this.nuevaNovedad.personal_autor_nombre = `(${personal.legajo})${personal.jerarquia}:${personal.nombre} ${personal.apellido}`;
          this.personalAutor = personal;
          this.mensajeError = '';
          resolve();
        },
        (error) => { reject(); }
      );
    });
  }
    async addNovedad(){
        try {
       await this.buscarPersonalAutorPorLegajoUsuario();

    if (
    !this.nuevaNovedad.cuadrante_id ||
    !this.nuevaNovedad.tipo_lugar ||
    !this.nuevaNovedad.lugar_hecho ||
    !this.nuevaNovedad.latitud ||
    !this.nuevaNovedad.longitud ||
    !this.nuevaNovedad.tipo_hecho_id ||
    !this.nuevaNovedad.origen_novedad ||
    !this.nuevaNovedad.unidad_interviniente ||
    !this.nuevaNovedad.modus_operandi_id 
      
      
  ) {
      Swal.fire('Formulario incompleto', 'Por favor, completa todos los campos requeridos.', 'warning');
      return;
    }
  
    this.nuevaNovedad.archivo = this.archivos[0]?.base64 || '';
    this.nuevaNovedad.archivo1 = this.archivos[1]?.base64 || '';
    this.nuevaNovedad.archivo2 = this.archivos[2]?.base64 || '';
    this.nuevaNovedad.archivo3 = this.archivos[3]?.base64 || '';
    this.nuevaNovedad.archivo4 = this.archivos[4]?.base64 || '';
    this.nuevaNovedad.archivo5 = this.archivos[5]?.base64 || '';
    this.nuevaNovedad.tipoArchivo = this.archivos[0]?.mimeType || '';
    this.nuevaNovedad.tipoArchivo1 = this.archivos[1]?.mimeType || '';
    this.nuevaNovedad.tipoArchivo2 = this.archivos[2]?.mimeType || '';
    this.nuevaNovedad.tipoArchivo3 = this.archivos[3]?.mimeType || '';
    this.nuevaNovedad.tipoArchivo4 = this.archivos[4]?.mimeType || '';
    this.nuevaNovedad.tipoArchivo5 = this.archivos[5]?.mimeType || '';
    this.nuevaNovedad.nombreArchivo = this.archivos[0]?.fileName || '';
    this.nuevaNovedad.nombreArchivo1 = this.archivos[1]?.fileName || '';
    this.nuevaNovedad.nombreArchivo2 = this.archivos[2]?.fileName || '';
    this.nuevaNovedad.nombreArchivo3 = this.archivos[3]?.fileName || '';
    this.nuevaNovedad.nombreArchivo4 = this.archivos[4]?.fileName || '';
    this.nuevaNovedad.nombreArchivo5 = this.archivos[5]?.fileName || '';
  
    // Incluir las personas temporales en la nueva novedad
    this.nuevaNovedad.personas = this.personasIds;
    this.nuevaNovedad.policias = this.policiasIds;
  // Convertir campos vacíos a null para los campos enteros
  // const camposEnteros = ['unidad_regional_id', 'cuadrante_id', 'personal_autor_id', 'oficial_cargo_id'];
  // camposEnteros.forEach(campo => {
  //   if ((this.nuevaNovedad as any)[campo] === '') {
  //     (this.nuevaNovedad as any)[campo] = null;
  //   }
  // });


    this.novedadesService.createNovedad(this.nuevaNovedad).subscribe(
      res => {
        console.log('Novedad creada', res);
        this.novedadGuardadaId = res.id; // Asigna el ID de la novedad guardada
        
      // console.log('Antes de vincular, personasTemporales:', this.personasTemporales);
      this.vincularPersonasANovedad(this.novedadGuardadaId);
      this.vincularPersonalANovedad(this.novedadGuardadaId);
        // Guardar los estados de las personas temporales
        this.personasTemporales.forEach((personaTemporal) => {
          const estado = new Estado();
          estado.novedad_id = this.novedadGuardadaId!;
          estado.persona_id = personaTemporal.persona.id;
          estado.estado = personaTemporal.estado;
          console.log('Creando estado:', estado); // Mostrar los valores del estado creado
          this.estadoService.createEstado(estado).subscribe(
            (response) => {
              
              console.log('Estado guardado:', response);
            },
            (error) => {
              console.error('Error al guardar estado:', error);
            }
          );
        });
        // Vincular personas a la novedad
      
        this.getAllNovedades();
        this.resetForm();
        Swal.fire('Éxito', 'Novedad guardada con éxito', 'success');
        this.router.navigate(['/tableros/novedades-list']); // Redirigir a la lista de novedades
      },
      error => {
        console.log('Error al crear novedad');
        console.log('Datos enviados para crear novedad:', JSON.stringify(this.nuevaNovedad, null, 2)); // Agregar un log para ver los datos enviados

        Swal.fire('Error', 'Error al crear la novedad', 'error');
      }
    );
      } catch {
    Swal.fire('Error', 'No se pudo obtener el personal autor.', 'error');
  }
  }
  

       vincularPersonasANovedad(novedadId: number): void {
      // console.log('personasTemporales al vincular:', this.personasTemporales);
      this.personasTemporales.forEach((personaTemporal) => {
        const personaId = personaTemporal.persona.id;
        const estado = personaTemporal.estado;
        if (!personaId || personaId === 0) {
          console.error('Error: Intentando agregar una persona con un ID no válido:', personaId);
          return;
        }
             this.novedadesPersonaService.addPersonaToNovedad(novedadId, personaId, estado).subscribe(
          () => {
            console.log(`Persona con ID ${personaId} y estado ${estado} agregada a la novedad`);
          },
          error => {
            console.error('Error al agregar persona a la novedad primero:', error);
          }
        );
      });
    }

  
updateNovedad(): void { 
 if (!this.nuevaNovedad.personal_autor_nombre) {
    this.buscarPersonalAutorPorLegajoUsuario();
  }

  if (!this.nuevaNovedad.unidad_regional_id) {
    Swal.fire('Formulario incompleto', 'Por favor, completa todos los campos requeridos.', 'warning');
    return;
  }
  this.nuevaNovedad.archivo = this.archivos[0]?.base64 || '';
  this.nuevaNovedad.archivo1 = this.archivos[1]?.base64 || '';
  this.nuevaNovedad.archivo2 = this.archivos[2]?.base64 || '';
  this.nuevaNovedad.archivo3 = this.archivos[3]?.base64 || '';
  this.nuevaNovedad.archivo4 = this.archivos[4]?.base64 || '';
  this.nuevaNovedad.archivo5 = this.archivos[5]?.base64 || '';
  this.nuevaNovedad.tipoArchivo = this.archivos[0]?.mimeType || '';
  this.nuevaNovedad.tipoArchivo1 = this.archivos[1]?.mimeType || '';
  this.nuevaNovedad.tipoArchivo2 = this.archivos[2]?.mimeType || '';
  this.nuevaNovedad.tipoArchivo3 = this.archivos[3]?.mimeType || '';
  this.nuevaNovedad.tipoArchivo4 = this.archivos[4]?.mimeType || '';
  this.nuevaNovedad.tipoArchivo5 = this.archivos[5]?.mimeType || '';
  this.nuevaNovedad.nombreArchivo = this.archivos[0]?.fileName || '';
  this.nuevaNovedad.nombreArchivo1 = this.archivos[1]?.fileName || '';
  this.nuevaNovedad.nombreArchivo2 = this.archivos[2]?.fileName || '';
  this.nuevaNovedad.nombreArchivo3 = this.archivos[3]?.fileName || '';
  this.nuevaNovedad.nombreArchivo4 = this.archivos[4]?.fileName || '';
  this.nuevaNovedad.nombreArchivo5 = this.archivos[5]?.fileName || '';

  // console.log('Datos enviados:', JSON.stringify(this.nuevaNovedad, null, 2)); // Agregar un log para ver los datos enviados 
  this.novedadesService.updateNovedad(this.nuevaNovedad.id.toString(), this.nuevaNovedad).subscribe(
    res => {
      console.log('Novedad actualizada', res);
      this.nuevaNovedad.id = res.id; // Asegurarse de que el ID de la novedad esté definido
      this.novedadGuardadaId = this.nuevaNovedad.id; // Asigna el ID de la novedad actualizada
      // Actualizar las relaciones many-to-many
      this.actualizarRelacionesPersonas();
      this.actualizarRelacionesPersonal();
          // Guardar los estados de las personas temporales
      this.personasTemporales.forEach((personaTemporal) => {
        this.guardarEstado(personaTemporal);
      });
      this.actualizarElementosAgregados(); // Llamar a actualizarElementosAgregados
      this.getAllNovedades();
      this.resetForm();
      Swal.fire('Éxito', 'Novedad actualizada con éxito', 'success');
      this.router.navigate(['/tableros/novedades-list']); // Redirigir a la lista de novedades
    },
    error => {
      console.error('Error al actualizar novedad', error);
      Swal.fire('Error', 'Error al actualizar la novedad', 'error');
    }
  );
}
actualizarRelacionesPersonas(): void {
  const novedadId = this.novedadGuardadaId || this.nuevaNovedad.id; // Usar el ID de la novedad guardada o el ID de la nueva novedad
  if (!novedadId) {
    console.log('Error: El ID de la novedad no está definido.');
    return;
  }

  // Obtener las personas actualmente asociadas a la novedad
  this.novedadesPersonaService.getPersonasByNovedadId(novedadId).subscribe(
    (personasActuales: Persona[]) => {
      const personasActualesIds = personasActuales.map(persona => persona.id);
          // Eliminar las relaciones que ya no existen
          personasActualesIds.forEach(personaId => {
            if (!this.personasIds.includes(personaId)) {
              // Eliminar el estado antes de eliminar la relación de persona
              this.estadoService.deleteEstado(novedadId, personaId).subscribe(
                () => {
                  console.log(`Estado de la persona con ID ${personaId} eliminado`);
                  // Eliminar la relación de persona
                  this.novedadesPersonaService.removePersonaFromNovedad(novedadId, personaId).subscribe(
                    () => {
                      console.log(`Persona con ID ${personaId} eliminada de la novedad`);
                    },
                    error => {
                      console.error('Error al eliminar persona de la novedad:', error);
                    }
                  );
                },
                error => {
                  console.error('Error al eliminar estado de la persona:', error);
                }
              );
            }
          });

  
      // Agregar las nuevas relaciones
      this.personasIds.forEach(personaId => {
        if (!personasActualesIds.includes(personaId)) {
          if (!personaId || personaId === 0) {
            console.error('Error: Intentando agregar una persona con un ID no válido:', personaId);
            return;
          }
          // Buscar el estado correspondiente en personasTemporales
          const personaTemporal = this.personasTemporales.find(pt => pt.persona.id === personaId);
          const estado = personaTemporal ? personaTemporal.estado : '';
          console.log('Agregando persona a la novedad:', { novedad_id: novedadId, persona_id: personaId, estado });
          this.novedadesPersonaService.addPersonaToNovedad(novedadId, personaId, estado).subscribe(
            () => {
              console.log(`Persona con IDactualizar ${personaId} y estado ${estado} agregada a la novedad`);
              // Guardar el estado después de agregar la persona
              if (personaTemporal) {
                this.guardarEstado(personaTemporal);
              }
            },
            error => {
              console.error('Error al agregar persona a la novedad:', error);
            }
          );
        }
      });
    },
    error => {
      console.error('Error al obtener personas actuales de la novedad:', error);
    }
  );
} 
 vincularPersonalANovedad(novedadId: number): void {
    this.personalTemporales.forEach(personalTemporal => {
      const personalId = personalTemporal.personal.id;
      if (!personalId || personalId === 0) {
        console.error('Error: Intentando agregar un policía con un ID no válido:', personalId);
        return;
      }
  
      // Vincular policía a la novedad
      console.log('Agregando persona a la novedad:', { novedad_id: novedadId, personal_id: personalId }); // Agregar un log para ver los datos enviados
      this.novedadesPersonalService.addPersonalToNovedad(novedadId, personalId).subscribe(
        () => console.log(`Personal con ID ${personalId} agregado a la novedad`),
        error => console.error('Error al agregar personal a la novedad:', error)
      );
    });
  }
actualizarRelacionesPersonal(): void {
  const novedadId = this.novedadGuardadaId || this.nuevaNovedad.id; // Usar el ID de la novedad guardada o la nueva novedad
  if (!novedadId) {
    console.log('Error: El ID de la novedad no está definido.');
    return;
  }

  // Obtener el personal actualmente asociado a la novedad
  this.novedadesPersonalService.getPersonalByNovedadId(novedadId).subscribe(
    (personalActual: Personal[]) => {
      const personalActualIds = personalActual.map(persona => persona.id);

      // Eliminar las relaciones que ya no existen
      personalActualIds.forEach(personalId => {
        if (!this.policiasIds.includes(personalId)) {
          this.novedadesPersonalService.removePersonalFromNovedad(novedadId, personalId).subscribe(
            () => {
              console.log(`Personal con ID ${personalId} eliminado de la novedad`);
            },
            error => {
              console.error('Error al eliminar personal de la novedad:', error);
            }
          );
        }
      });
 
      this.policiasIds.forEach(personalId => {
        if (!personalActualIds.includes(personalId)) {
          if (!personalId || personalId === 0) {
            console.error('Error: Intentando agregar un personal con un ID no válido:', personalId);
            return;
          }
          console.log('Agregando personal a la novedad:', { novedad_id: novedadId, personal_id: personalId });
          this.novedadesPersonalService.addPersonalToNovedad(novedadId, personalId).subscribe(
            () => {
              console.log(`Personal con ID ${personalId} agregado a la novedad`);
            },
            error => {
              console.error('Error al agregar personal a la novedad:', error);
            }
          );
        }
      });
    },
    error => {
      console.error('Error al obtener personal actual de la novedad:', error);
    }
  );
}


  deleteNovedad(id: string): void {
    this.novedadesService.deleteNovedad(id).subscribe(
      res => {
        console.log('Novedad eliminada', res);
        this.getAllNovedades();
        Swal.fire('Éxito', 'Novedad eliminada con éxito', 'success');
      },
      error => {
        console.error('Error al eliminar novedad', error);
        Swal.fire('Error', 'Error al eliminar la novedad', 'error');
      }
    );
  }
    cargarCategorias(): void {
    // console.log('Cargando categorías...');
    this.categoriaService.getCategorias().subscribe(
      data => {
        // console.log('Categorías cargadas:', data);
        this.categoria = data;
      },
      error => {
        console.error('Error al cargar categorías:', error);
        this.mensajeError = 'Error al cargar categorías';
        Swal.fire('Error', 'Error al cargar categorías: ' + error.message, 'error');
      }
    );
  }

  

  cargarUnidadesRegionales(): void {
    this.unidadRegionalService.getUnidadesRegionales().subscribe(
      data => {
        this.unidadesRegionales = data;
      },
      error => {
        this.mensajeError = 'Error al cargar unidades regionales';
        Swal.fire('Error', 'Error al cargar unidades regionales: ' + error.message, 'error');
      }
    );
  }

  cargarDependencias(unidadRegionalId: number): void {
    this.dependenciaService.getDependenciasByUnidadRegional(unidadRegionalId).subscribe(
      data => {
        this.dependencias = data;
      },
      error => {
        console.error('Error al obtener las dependencias:', error.message);
        Swal.fire('Error', 'Error al obtener dependencias: ' + error.message, 'error');
      }
    );
  }
  cargarCuadrantes(UnidadRegionalId: number): void {
    this.cuadranteService.getCuadrantesByUnidadRegional(UnidadRegionalId).subscribe(
      data => {
        this.cuadrantes = data;
      },
      error => {
        this.mensajeError = 'Error al cargar cuadrantes';
        Swal.fire('Error', 'Error al cargar cuadrantes: ' + error.message, 'error');
      }
    );
  }
 
  cargarDepartamentos(): void {
    this.departamentoService.getDepartamentos().subscribe(
      data => {
        this.departamentos = data;
      },
      error => {
        this.mensajeError = 'Error al cargar departamentos';
        Swal.fire('Error', 'Error al cargar departamentos: ' + error.message, 'error');
      }
    );
  }

  cargarLocalidades(departamentoId: number | null | undefined): void {
    if (departamentoId == null) return; // Si es null o undefined, salir
    this.localidadService.getLocalidadesByDepartamento(departamentoId.toString()).subscribe(
      data => {
        this.localidades = data;
      },
      error => {
        this.mensajeError = 'Error al cargar localidades';
        Swal.fire('Error', 'Error al cargar localidades: ' + error.message, 'error');
      }
    );
  }
  
    onDepartamentoChange(tipo: 'victima' | 'victimario' | 'protagonista' | 'testigo') {
      const persona = this[tipo];
      const dep = this.departamentos.find(d => Number(d.id) === Number(persona.departamento_id));
      persona.departamento_nombre = dep ? dep.nombre : '';
      // Cargar localidades como ya lo haces
      if (persona.departamento_id) {
        this.cargarLocalidades(persona.departamento_id);
      }
    }
    
    onLocalidadChange(tipo: 'victima' | 'victimario' | 'protagonista' | 'testigo') {
      const persona = this[tipo];
      const loc = this.localidades.find(l => String(l.id) === String(persona.localidad_id));
      persona.localidad_nombre = loc ? loc.nombre : '';
    }
///////////////////////////////////////////////////////////////////
// Método para inicializar los archivos al crear una nueva novedad
inicializarArchivos(): void {
  this.archivos = [
    { file: null, base64: '', mimeType: '', fileName: '' },
    { file: null, base64: '', mimeType: '', fileName: '' },
    { file: null, base64: '', mimeType: '', fileName: '' },
    { file: null, base64: '', mimeType: '', fileName: '' },
    { file: null, base64: '', mimeType: '', fileName: '' },
    { file: null, base64: '', mimeType: '', fileName: '' }
  ];
}

  cargarArchivosNovedad(): void {
    this.archivos = [
      { file: null, base64: this.nuevaNovedad.archivo || '', mimeType: this.nuevaNovedad.tipoArchivo || '', fileName: this.nuevaNovedad.nombreArchivo || '' },
      { file: null, base64: this.nuevaNovedad.archivo1 || '', mimeType: this.nuevaNovedad.tipoArchivo1 || '', fileName: this.nuevaNovedad.nombreArchivo1 || '' },
      { file: null, base64: this.nuevaNovedad.archivo2 || '', mimeType: this.nuevaNovedad.tipoArchivo2 || '', fileName: this.nuevaNovedad.nombreArchivo2 || '' },
      { file: null, base64: this.nuevaNovedad.archivo3 || '', mimeType: this.nuevaNovedad.tipoArchivo3 || '', fileName: this.nuevaNovedad.nombreArchivo3 || '' },
      { file: null, base64: this.nuevaNovedad.archivo4 || '', mimeType: this.nuevaNovedad.tipoArchivo4 || '', fileName: this.nuevaNovedad.nombreArchivo4 || '' },
      { file: null, base64: this.nuevaNovedad.archivo5 || '', mimeType: this.nuevaNovedad.tipoArchivo5 || '', fileName: this.nuevaNovedad.nombreArchivo5 || '' }
    ];
  }
getArchivosNovedad(novedad: Novedades): { base64: string; mimeType: string; fileName: string }[] {
    return [
      { base64: novedad.archivo || '', mimeType: novedad.tipoArchivo || 'application/octet-stream', fileName: novedad.nombreArchivo || 'Archivo 1' },
      { base64: novedad.archivo1 || '', mimeType: novedad.tipoArchivo1 || 'application/octet-stream', fileName: novedad.nombreArchivo1 || 'Archivo 2' },
      { base64: novedad.archivo2 || '', mimeType: novedad.tipoArchivo2 || 'application/octet-stream', fileName: novedad.nombreArchivo2 || 'Archivo 3' },
      { base64: novedad.archivo3 || '', mimeType: novedad.tipoArchivo3 || 'application/octet-stream', fileName: novedad.nombreArchivo3 || 'Archivo 4' },
      { base64: novedad.archivo4 || '', mimeType: novedad.tipoArchivo4 || 'application/octet-stream', fileName: novedad.nombreArchivo4 || 'Archivo 5' },
      { base64: novedad.archivo5 || '', mimeType: novedad.tipoArchivo5 || 'application/octet-stream', fileName: novedad.nombreArchivo5 || 'Archivo 6' } // Añadir más archivos si es necesario
    ];
  }
  resetForm(): void {
    this.nuevaNovedad = new Novedades();
    this.inicializarArchivos();
    this.mensajeError = '';
  }
   ampliarImagen(event: any): void {
    const img = event.target;
    if (img.style.maxWidth === '600px') {
      img.style.maxWidth = '100%';
      img.style.maxHeight = '100%';
    } else {
      img.style.maxWidth = '600px';
      img.style.maxHeight = '600px';
    }
  }
// Método para manejar la selección de archivos
onFileSelectedNovedad(event: any, index: number): void {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.archivos[index] = {
        file: file,
        base64: e.target.result.split(',')[1],
        mimeType: file.type,
        fileName: file.name
      };
      console.log('Archivo cargado:', this.archivos[index]);
    };
    reader.readAsDataURL(file);
  }
}

// Método para abrir el sistema de archivos
abrirSistemaArchivosNovedad(): void {
  const index = this.obtenerIndiceDisponibleNovedad();
  if (index !== -1) {
    const inputElement = document.getElementById('archivoNovedad') as HTMLInputElement;
    if (inputElement) {
      inputElement.setAttribute('accept', '*/*');
      inputElement.onchange = (event: any) => this.onFileSelectedNovedad(event, index);
      inputElement.click();
    }
  } else {
    Swal.fire('Límite alcanzado', 'No puedes agregar más de 6 archivos.', 'warning');
  }
}

// Método para obtener el índice disponible
obtenerIndiceDisponibleNovedad(): number {
  for (let i = 0; i < this.archivos.length; i++) {
    if (!this.archivos[i].file && !this.archivos[i].base64) {
      return i;
    }
  }
  return -1;
}

// Método para abrir la cámara
// ✅ Correcto (abrir el modal directamente)
// Método para abrir la cámara de Novedad
// Variables para manejar la cámara de novedades

// Método para abrir la cámara de novedades
abrirCamaraN(): void {
  const index = this.obtenerIndiceDisponibleN();
  if (index !== -1) {
    // Mostrar el modal de la cámara
    const modalElement = document.getElementById('camera-modal-N');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }

    // Listar los dispositivos de cámara disponibles
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        this.availableCamerasN = devices.filter(device => device.kind === 'videoinput');
        if (this.availableCamerasN.length > 0) {
          // Iniciar con la primera cámara disponible
          this.iniciarCamaraN(this.availableCamerasN[0].deviceId);
        } else {
          Swal.fire('Error', 'No se encontraron cámaras disponibles.', 'error');
          this.cerrarCamaraN();
        }
      })
      .catch((error) => {
        console.error('Error al listar dispositivos:', error);
        Swal.fire('Error', 'No se pudieron listar los dispositivos.', 'error');
        this.cerrarCamaraN();
      });
  } else {
    Swal.fire('Límite alcanzado', 'No puedes agregar más de 6 archivos.', 'warning');
  }
}

// Método para iniciar la cámara de novedades con un dispositivo específico
iniciarCamaraN(deviceId: string): void {
  if (this.streamNovedad) {
    this.streamNovedad.getTracks().forEach(track => track.stop()); // Detener la cámara actual
  }

  const constraints = {
    video: {
      deviceId: deviceId ? { ideal: deviceId } : undefined, // Usar "ideal" en lugar de "exact"
      width: { ideal: 1280 },
      height: { ideal: 720 }
    }
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      this.streamNovedad = stream;

      // Asignar el stream al elemento de video
      if (this.videoElementNovedad) {
        this.videoElementNovedad.nativeElement.srcObject = stream;
        this.videoElementNovedad.nativeElement.play();
      }
    })
    .catch((error) => {
      console.error('Error al acceder a la cámara:', error);
      Swal.fire('No puedes invertir la camara', 'Solo hay una cámara disponible.', 'warning');
      this.cerrarCamaraN();
    });
}

// Método para alternar entre cámaras de novedades
alternarCamaraN(): void {
  if (this.availableCamerasN.length > 1) {
    this.currentCameraIndexN = (this.currentCameraIndexN + 1) % this.availableCamerasN.length;
    const nextCamera = this.availableCamerasN[this.currentCameraIndexN];
    this.iniciarCamaraN(nextCamera.deviceId);
  } else {
    // Mostrar un mensaje si solo hay una cámara disponible
    Swal.fire('Advertencia', 'Solo hay una cámara disponible.', 'warning');
  }
}

// Método para tomar foto en Novedad
tomarFotoN(): void {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (context && this.videoElementNovedad) {
    canvas.width = this.videoElementNovedad.nativeElement.videoWidth;
    canvas.height = this.videoElementNovedad.nativeElement.videoHeight;
    context.drawImage(this.videoElementNovedad.nativeElement, 0, 0, canvas.width, canvas.height);

    const base64Image = canvas.toDataURL('image/png').split(',')[1];
    const index = this.obtenerIndiceDisponibleN();
    if (index !== -1) {
      this.archivos[index] = {
        file: null,
        base64: base64Image,
        mimeType: 'image/png',
        fileName: `foto_novedad_${index + 1}.png`
      };
      this.cerrarCamaraN();
    } else {
      Swal.fire('Límite alcanzado', 'No puedes agregar más de 6 archivos.', 'warning');
    }
  }
}

// // Método para cerrar la cámara de Novedad
cerrarCamaraN(): void {
  if (this.streamNovedad) {
    this.streamNovedad.getTracks().forEach(track => track.stop());
   
  }
  const modalElement = document.getElementById('camera-modal-N');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
  }
}


// Método para obtener índice disponible en Novedad
obtenerIndiceDisponibleN(): number {
  for (let i = 0; i < this.archivos.length; i++) {
    if (!this.archivos[i].base64) {
      return i;
    }
  }
  return -1;
}

// Método para abrir el modal de la cámara
openModalCamaraN(): void {
  const modalElement = document.getElementById('camera-modal-novedad');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}

// Método para eliminar un archivo cargado
eliminarArchivoCargadoN(index: number): void {
  if (index >= 0 && index < this.archivos.length) {
    this.archivos[index] = { file: null, base64: '', mimeType: '', fileName: '' };
  }
}

// Método para obtener la URL de un archivo en Novedad
getFileUrlNovedad(base64: string, mimeType: string): SafeUrl {
  const url = `data:${mimeType};base64,${base64}`;
  return this.domSanitizer.bypassSecurityTrustUrl(url);
}

// ✅ Correcto (acceso directo)
@ViewChild('videoElementNovedad', { static: false }) videoElementNovedad!: ElementRef<HTMLVideoElement>;
  ///////////////////////////////////////////////////////
  OpenModalPolicia(): void {
    const modalElement = document.getElementById('modalPolicia');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  buscarPersonalPorLegajo(legajo: string): void {
    if (!legajo) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, inserte un legajo para la búsqueda.',
        });
        return;
    }

    this.personalService.getPersonalByLegajo(legajo).subscribe(
        (data: Personal) => { // <-- Suponiendo que retorna un solo objeto
          

            this.nuevaPersonal = data; // Almacena los datos en nuevaPersonal
        },
        (error) => {
            if (error.status === 404) {
                Swal.fire({
                    icon: 'info',
                    title: 'Personal no encontrado',
                    text: `No se encontró ningún personal con legajo ${legajo}.`,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error al buscar el personal.',
                });
            }
        }
    );
}


agregarPersonalTemporal(): void {
  if (this.nuevaPersonal.nombre && this.nuevaPersonal.apellido && this.nuevaPersonal.legajo) {
    const index = this.personalTemporales.findIndex(pt => pt.personal.legajo === this.nuevaPersonal.legajo);
    
    if (index !== -1) {
      this.personalTemporales[index] = { personal: { ...this.nuevaPersonal } };
      console.log('Personal actualizado temporalmente:', { personal: { ...this.nuevaPersonal } });
    } else {
      this.personalTemporales.push({ personal: { ...this.nuevaPersonal } });
      this.policiasIds.push(this.nuevaPersonal.id);
      console.log('Personal agregado temporalmente:', { personal: { ...this.nuevaPersonal } });
  
    this.cerrarModalPersonal()
    }

    this.resetFormularioPersonal();
   
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Datos incompletos',
      text: 'Por favor, complete todos los campos requeridos.',
    });
  }
}
mostrarErrorCampo(valor: any): boolean {
  return valor === null || valor === undefined || valor === '';
}
borrarPersonalTemporal(id: number): void {
  const indexTemporal = this.personalTemporales.findIndex(pt => pt.personal.id === id);
  if (indexTemporal !== -1) {
    this.personalTemporales.splice(indexTemporal, 1);
    console.log('Personal borrado temporalmente:', id);
  }

  const idIndex = this.policiasIds.indexOf(id);
  if (idIndex !== -1) {
    this.policiasIds.splice(idIndex, 1);
    console.log('ID de personal borrado del array policiasIds:', id);
  }
}

cerrarModalPersonal(): void {
  const modalElement = document.getElementById('modalPolicia');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) modal.hide();
  }
}

resetFormularioPersonal(){
  this.nuevaPersonal = new Personal();

}
cargarPersonalRelacionado(novedadId: number): void {
  console.log(`Cargando personal relacionado para la novedad ID: ${novedadId}`);
  
  this.novedadesService.getPersonalByNovedadId(novedadId).subscribe(
    (personal: Personal[]) => {
      console.log('Personal recibido:', personal); // Verifica que estás recibiendo datos
      this.personalTemporales = personal.map(p => ({ personal: p }));
      this.policiasIds = personal.map(p => p.id); // Agregar los IDs
      
      console.log('Array de personal temporales:', this.personalTemporales);
      console.log('Array de IDs de policías:', this.policiasIds);
    },
    (error: HttpErrorResponse) => {
      console.error('Error al cargar personal relacionado:', error.message);
    }
  );
}


  ////////////////
  setDefaultTime(): void {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.nuevaNovedad.horario = `${hours}:${minutes}`;
  }
 
  openModal(): void {
    const modalElement = document.getElementById('modalVictima');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  openModalInculpado(): void {
    const modalElement = document.getElementById('modalVictimario');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  openModalProtagonista() {
    const modalElement= document.getElementById('modalProtagonista');
    if(modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  openModalTestigo() {
    const modalElement= document.getElementById('modalTestigo');
    if(modalElement){
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

    limpiarDni(event: any) {
    this.victima.dni = event.target.value.replace(/[^0-9]/g, '');
  }


agregarPersonaTemporal(estado: 'victima' | 'victimario' | 'protagonista' | 'testigo'): void {
  const personaBase = estado === 'victima' ? this.victima
    : estado === 'victimario' ? this.victimario
    : estado === 'testigo' ? this.testigo
    : this.protagonista;

  const persona = { ...personaBase };

  if (persona.nombre) {
    if (persona.dni) {
      this.personaService.getPersonaByDni(persona.dni).subscribe(
        (data: Persona) => {
          if (data) {
            persona.id = data.id;

            const index = this.personasTemporales.findIndex(pt => pt.persona.id === persona.id);
            if (index === -1) {
              this.personasTemporales.push({ persona, estado });
              if (!this.personasIds.includes(persona.id)) {
                this.personasIds.push(persona.id); // ✅ Asegurarse de guardar el ID
              }
              console.log('Persona agregada temporalmente:', { persona, estado });
            } else {
              this.personasTemporales[index] = { persona, estado };
              console.log('Persona actualizada temporalmente:', { persona, estado });
            }

            this.cerrarModal2(estado);
            setTimeout(() => this.resetFormulario(estado), 300);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se encontró la persona con el DNI proporcionado.',
            });
          }
        },
        (error) => {
          console.error('Error al buscar persona por DNI:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al buscar la persona por DNI.',
          });
        }
      );
    } else {
    const index = this.personasTemporales.findIndex(pt => pt.persona.id === persona.id);

      if (index === -1) {
        this.personasTemporales.push({ persona, estado });
         if (!this.personasIds.includes(persona.id)) {
                this.personasIds.push(persona.id); // ✅ Asegurarse de guardar el ID
              }
        console.log('Persona agregada temporalmente (sin DNI):', { persona, estado });
      } else {
        this.personasTemporales[index] = { persona, estado };
        console.log('Persona actualizada temporalmente (sin DNI):', { persona, estado });
      }
    }
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Datos incompletos',
      text: 'Por favor, complete al menos el nombre o alias',
    });
  }
}

        
  guardarPersona(estado: 'victima' | 'victimario' | 'protagonista' | 'testigo', verificado: boolean = false): void {
  console.log('Entrando a guardarPersona', { verificado });

  const persona = estado === 'victima' ? this.victima
                : estado === 'victimario' ? this.victimario
                : estado === 'testigo' ? this.testigo
                : this.protagonista;


  if (!verificado && persona.dni) {
    if (persona.id) {
      // Si ya tiene ID, es actualización
      this.verificarDuplicidadDNI(persona.dni, estado, 'actualizar', persona.id);
    } else {
      // Si no tiene ID, es creación
      this.verificarDuplicidadDNI(persona.dni, estado, 'crear');
    }
    return;
  }
   // 👉 Normalizar edad antes de guardar
  this.asignarEdad(estado); // <--- AGREGA ESTA LÍNEA
  if (persona.nombre) {
    // Asignar fotos si hay archivos cargados
    persona.foto = this.archivosPersonas[0]?.base64 || '';
    persona.foto1 = this.archivosPersonas[1]?.base64 || '';
    persona.foto2 = this.archivosPersonas[2]?.base64 || '';
    persona.foto_tipo = this.archivosPersonas[0]?.mimeType || '';
    persona.foto_tipo1 = this.archivosPersonas[1]?.mimeType || '';
    persona.foto_tipo2 = this.archivosPersonas[2]?.mimeType || '';
    persona.foto_nombre = this.archivosPersonas[0]?.fileName || '';
    persona.foto_nombre1 = this.archivosPersonas[1]?.fileName || '';
    persona.foto_nombre2 = this.archivosPersonas[2]?.fileName || '';

    if (persona.id) {
      // 👉 Si ya tiene ID, actualizar
      this.actualizarPersona(estado);
    } else {
      // 👉 Crear persona nueva
      console.log('Creando nueva persona:', persona);
      this.personaService.createPersona(persona).subscribe(
        (response: Persona) => {
          const personaConId = { ...persona, id: response.id };
          this.actualizarPersonaTemporal(personaConId, estado);
          persona.id = response.id;

          if (!this.personasIds.includes(response.id)) {
            this.personasIds.push(response.id);
          }

          this.agregarPersonaTemporal(estado);
          this.cerrarModal2(estado);
        },
        (error) => {
          if (persona.dni) {
            Swal.fire({
              icon: 'warning',
              title: 'La persona ya existe',
              text: 'Ya existe una persona con este DNI. Búsquela o actualice sus datos.',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo guardar la persona. Complete los datos correctamente.',
            });
          }
        }
      );
    }
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Datos incompletos',
      text: 'Por favor, complete al menos el nombre o alias',
    });
  }
}

      cerrarModal2(estado: string): void {
  const modalId = estado === 'victima' ? 'modalVictima'
                : estado === 'victimario' ? 'modalVictimario'
                : estado === 'testigo' ? 'modalTestigo'
                : 'modalProtagonista';

  const modalElement = document.getElementById(modalId);
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();
  }
}
verificarDuplicidadDNI(
  dni: string,
  contexto: 'victima' | 'victimario' | 'protagonista' | 'testigo',
  modo: 'crear' | 'actualizar' = 'crear',
  idActual?: number
): void {
  this.personaService.getPersonaByDni(dni).subscribe(
    (data: Persona | null) => {
      if (data && data.id) {
        // Si es actualización y el id coincide, permitir
        if (modo === 'actualizar' && idActual && data.id === idActual) {
          this.guardarPersona(contexto, true); // Ya está verificado
        } else {
          // Solo carga los datos en el formulario y abre el modal para editar
          this.asignarPersonaPorContexto(data, contexto);
          this.asignarEdadAuxiliar(contexto, data); // <-- Agrega esto

          Swal.fire({
            icon: 'info',
            title: 'La persona con este dni ya existe',
            text: 'Busquela para poder ver sus datos y agregar o modificar algo.',
          });
        }
      } else {
        // Si no existe, proceder normalmente
        this.guardarPersona(contexto, true);
      }
    },
    (error) => {
      if (error.status === 404) {
        this.guardarPersona(contexto, true);
      }
    }
  );
}
  buscarPersonaPorDNI(dni: string, contexto: 'victima' | 'victimario' | 'protagonista'| 'testigo'): void {
    if (!dni) {
      Swal.fire({
        icon: 'warning',
        title: 'Campo vacío',
        text: 'Por favor, inserte un dato para la búsqueda.',
      });
      return;
    }
  
    this.personaService.getPersonaByDni(dni).subscribe(
      (data: Persona) => {
        Swal.fire({
          icon: 'success',
          title: 'Persona encontrada',
          text: `La persona con DNI ${dni} ha sido encontrada.`,
        });

        // Asignar la persona encontrada según el contexto
        if (contexto === 'victima') {
          this.victima = data;
        } else if (contexto === 'victimario') {
          this.victimario = data;
        } else if (contexto === 'protagonista') {
          this.protagonista = data;
        } else if (contexto === 'testigo') {
          this.testigo = data;
        }
        this.asignarEdadAuxiliar(contexto, data); // <-- Agrega esto

        // Verificar si la persona tiene una localidad válida antes de cargar
        if (data.localidad_id) {
          this.cargarLocalidadPorId(+data.localidad_id);
        }

        this.cargarArchivosPersona(data); // Cargar los archivos de la persona
        // this.guardarPersona(contexto, true)
      },
      (error) => {
        if (error.status === 404) {
          Swal.fire({
            icon: 'info',
            title: 'Persona no encontrada',
            text: `No se encontró ninguna persona con DNI ${dni}.`,
          });
          this.resetFormulario(contexto); // Vaciar el formulario si no se encuentra la persona
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al buscar la persona.',
          });
          this.resetFormulario(contexto); // Vaciar el formulario si no se encuentra la persona
        }
      }
    );
  }

   actualizarPersona(estado: 'victima' | 'victimario' | 'protagonista'| 'testigo',verificado: boolean = false): void {
    const persona = estado === 'victima' ? this.victima : estado === 'victimario' ?  this.victimario : estado === 'testigo' ?  this.testigo : this.protagonista;
    this.asignarEdad(estado); // <--- AGREGA ESTA LÍNEA
    if (persona.nombre ) {
      // Asignar los archivos a la persona
      persona.foto = this.archivosPersonas[0]?.base64 || '';
      persona.foto1 = this.archivosPersonas[1]?.base64 || '';
      persona.foto2 = this.archivosPersonas[2]?.base64 || '';
      persona.foto_tipo = this.archivosPersonas[0]?.mimeType || '';
      persona.foto_tipo1 = this.archivosPersonas[1]?.mimeType || '';
      persona.foto_tipo2 = this.archivosPersonas[2]?.mimeType || '';
      persona.foto_nombre = this.archivosPersonas[0]?.fileName || '';
      persona.foto_nombre1 = this.archivosPersonas[1]?.fileName || '';
      persona.foto_nombre2 = this.archivosPersonas[2]?.fileName || '';
  
      console.log('Datos enviados para actualizar persona:', JSON.stringify(persona, null, 2)); // Agregar un log para ver los datos enviados
      this.personaService.updatePersona(persona).subscribe(
        (response) => {
          this.actualizarPersonaTemporal(persona, estado); // Actualizar la persona en la lista temporal
        
        this.cerrarModal2(estado);
          setTimeout(() => this.resetFormulario(estado), 300);   
        },
        (error) => {
          console.error('Error al actualizar persona:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al actualizar persona. ' + error.error.msg,
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Datos incompletos de actualización',
        text: 'Por favor, complete al menos el nombre o alias',
      });
    }
  }
actualizarPersonaTemporal(persona: Persona, estado: 'victima' | 'victimario' | 'protagonista'| 'testigo'): void {
  const index = this.personasTemporales.findIndex(pt => pt.persona.id === persona.id);
  if (index !== -1) {
    this.personasTemporales[index] = { persona: { ...persona }, estado };
    console.log('Persona actualizada temporalmente:', { persona: { ...persona }, estado });
  } else {
    // Si no existe, la agregamos
    this.personasTemporales.push({ persona: { ...persona }, estado });
    if (!this.personasIds.includes(persona.id)) {
      this.personasIds.push(persona.id);
    }
    console.log('Persona agregada temporalmente (por edición):', { persona: { ...persona }, estado });
  }
}
private asignarEdadAuxiliar(tipo: 'victima' | 'victimario' | 'protagonista' | 'testigo', persona: Persona): void {
  let edad_valor = 0;
  let edad_unidad = 'años';
  if (persona && persona.edad) {
    const partes = persona.edad.split(' ');
    edad_valor = Number(partes[0]) || 0;
    edad_unidad = partes[1] || 'años';
  }
  switch (tipo) {
    case 'victima':
      this.victima_edad_valor = edad_valor;
      this.victima_edad_unidad = edad_unidad;
      break;
    case 'victimario':
      this.victimario_edad_valor = edad_valor;
      this.victimario_edad_unidad = edad_unidad;
      break;
    case 'protagonista':
      this.protagonista_edad_valor = edad_valor;
      this.protagonista_edad_unidad = edad_unidad;
      break;
    case 'testigo':
      this.testigo_edad_valor = edad_valor;
      this.testigo_edad_unidad = edad_unidad;
      break;
  }
}
    editarPersona(id: number, estado: 'victima' | 'victimario' | 'protagonista'| 'testigo'): void {
      const personaTemporal = this.personasTemporales.find(pt => pt.persona.id === id);
      if (personaTemporal) {
        this.isEditing = true;
        if (estado === 'victima') {
          this.victima = { ...personaTemporal.persona };
          this.cargarArchivosPersona(this.victima); // Cargar los archivos de la persona
          if (this.victima.localidad_id) {
            this.cargarLocalidadPorId(+this.victima.localidad_id); // Cargar la localidad por ID
          }
          this.openModal(); // Abrir el modal de víctima
        } else if (estado === 'victimario') {
          this.victimario = { ...personaTemporal.persona };
          this.cargarArchivosPersona(this.victimario); // Cargar los archivos de la persona
          if (this.victimario.localidad_id) {
            this.cargarLocalidadPorId(+this.victimario.localidad_id); // Cargar la localidad por ID
          }
          this.openModalInculpado();     
        } else if (estado === 'protagonista') {
          this.protagonista = { ...personaTemporal.persona };
          this.cargarArchivosPersona(this.protagonista); // Cargar los archivos de la persona
          if (this.protagonista.localidad_id) {
            this.cargarLocalidadPorId(+this.protagonista.localidad_id); // Cargar la localidad por ID
          }
          this.openModalProtagonista(); // Abrir el modal de protagonista
        }
        else if (estado === 'testigo') {
          this.testigo = { ...personaTemporal.persona }; // Estabas asignando this.protagonista aquí
          this.cargarArchivosPersona(this.testigo);
          if (this.testigo.localidad_id) {
            this.cargarLocalidadPorId(+this.testigo.localidad_id);
          }
          this.openModalTestigo();
        }
        
      }
    }
 
    cargarPersonas(): void {
    if (this.novedadId !== null) {
      console.log('Cargando personas para la novedad con ID:', this.novedadId);
      this.novedadesService.getPersonasByNovedadId(this.novedadId).subscribe(
        (data: Persona[]) => {
          this.personas = data;
          
          console.log('Personas cargadas:', this.personas);
        },
        (error) => {
          console.error('Error al cargar personas:', error);
        }
      );
    }
  }

cargarPersonasRelacionadas(novedadId: number): void {
  console.log(`Cargando personas para la novedad con ID: ${novedadId}`);
  this.novedadesService.getPersonasByNovedadId(novedadId).subscribe(
    (personas: Persona[]) => {
      this.personas = personas;
     
      personas.forEach(persona => {
        this.estadoService.getEstadoByNovedadAndPersona(novedadId, persona.id).subscribe(
          (estado: Estado) => {
            this.personasTemporales.push({ persona, estado: estado.estado as 'victima' | 'victimario' | 'protagonista' });
            this.personasIds.push(persona.id); // Agregar el ID de la persona al array personasIds
          },
          (error: HttpErrorResponse) => {
            console.error('Error al obtener estado:', error.message);
          }
        );
      });
      console.log('Array de personas:', this.personasIds); // Verifica
    },
    (error: HttpErrorResponse) => {
      console.error('Error al cargar personas relacionadas:', error.message);
    }
  );
}
      borrarPersona(id: number): void {
      // Eliminar de la lista temporal
      const indexTemporal = this.personasTemporales.findIndex(pt => +pt.persona.id === id);
      if (indexTemporal !== -1) {
        this.personasTemporales.splice(indexTemporal, 1);
        console.log('Persona borrada temporalmente:', id);
      }
    
      // Eliminar el ID de la persona del array personasIds
      const idIndex = this.personasIds.indexOf(id);
      if (idIndex !== -1) {
        this.personasIds.splice(idIndex, 1);
        console.log('ID de persona borrado del array personasIds:', id);
      }
    
      // Solo si la novedad ya fue guardada y la persona está asociada en la base de datos
      if (this.novedadId !== null && idIndex !== -1) {
        this.novedadesService.deletePersonaFromNovedad(this.novedadId, id).subscribe(
          () => {
            console.log('Persona borrada permanentemente:', id);
            this.cargarPersonas(); // Actualizar la lista de personas cargadas
          },
          (error) => {
            console.error('Error al borrar persona permanentemente:', error);
          }
        );
      }
    }

 
  private asignarPersonaPorContexto(persona: Persona, contexto: 'victima' | 'victimario' | 'protagonista' | 'testigo'): void {
    if (contexto === 'victima') {
        this.victima = persona;
    } else if (contexto === 'victimario') {
        this.victimario = persona;
    } else if (contexto === 'protagonista') {
        this.protagonista = persona;
    } else if (contexto === 'testigo') {
        this.testigo = persona;
    }
}


guardarEstado(personaTemporal: { persona: Persona; estado: string }): void {
  
  const estado = new Estado();
  estado.novedad_id = this.novedadGuardadaId! || this.nuevaNovedad.id; 
  estado.persona_id = personaTemporal.persona.id;
  estado.estado = personaTemporal.estado;

  // Obtener el estado existente
  this.estadoService.getEstadoByNovedadAndPersona(estado.novedad_id, estado.persona_id).subscribe(
    (estadoExistente: Estado) => {
      console.log('Estado existente:', estadoExistente);
      console.log('Estado temporal:', personaTemporal.estado);
      if (estadoExistente && estadoExistente.estado !== personaTemporal.estado) {
        console.log('Estados diferentes, eliminando el estado anterior');
        // Eliminar el estado anterior si es diferente
        this.estadoService.deleteEstado(estado.novedad_id, estado.persona_id).subscribe(
          () => {
            console.log('Estado anterior eliminado');
            // Crear el nuevo estado
            this.estadoService.createEstado(estado).subscribe(
              (response) => {
                console.log('Estado guardado:', response);
              },
              (error) => {
                console.error('Error al guardar estado:', error);
              }
            );
          },
          (error) => {
            console.error('Error al eliminar estado anterior:', error);
          }
        );
      } else if (!estadoExistente) {
        console.log('Estado no existe, creando nuevo estado');
        // Crear el nuevo estado si no existe
        this.estadoService.createEstado(estado).subscribe(
          (response) => {
            console.log('Estado guardado:', response);
          },
          (error) => {
            console.error('Error al guardar estado:', error);
          }
        );
      } else {
        console.log('El estado existente es igual al estado temporal, no se realiza ninguna acción');
      }
    },
    (error) => {
      if (error.status === 404) {
        console.log('Estado no encontrado, creando nuevo estado');
        // Crear el nuevo estado si no se encuentra uno existente
        this.estadoService.createEstado(estado).subscribe(
          (response) => {
            console.log('Estado guardado:', response);
          },
          (error) => {
            console.error('Error al guardar estado:', error);
          }
        );
      } else {
        console.log('la persona no tiene estado vamos a crear uno:', error);
      }
    }
  );
}

resetFormulario(contexto: 'victima' | 'victimario' | 'protagonista' | 'testigo'): void {
  if (contexto === 'victima') {
      this.victima = new Persona();
  } else if (contexto === 'victimario') {
      this.victimario = new Persona();
  } else if (contexto === 'protagonista') {
      this.protagonista = new Persona();
  } else if (contexto === 'testigo') {
      this.testigo = new Persona();
  }

  // Resetear localidades y selección
  this.localidades = []; 
  

  this.isEditing = false;
  this.resetArchivosPersona(); // Restablecer los archivos de la persona
}


  cargarLocalidadPorId(localidadId: number): void {
      this.localidadService.getLocalidadById(localidadId.toString()).subscribe(
        data => {
          this.localidades = [data];
        },
        error => {
          this.mensajeError = 'Error al cargar la localidad';
          Swal.fire('Error', 'Error al cargar la localidad: ' + error.message, 'error');
        }
      );
    }
  
  
  
cancelarActualizacion(modalId: string): void {
  const modalElement = document.getElementById(modalId);
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
    this.isEditing = false;
  
  }
}
cancelUpdate(): void {
  this.router.navigate(['/tableros/novedades-list']);
}
resetFormNov(): void {
  this.nuevaNovedad = new Novedades();
  this.victima = new Persona();
  this.victimario = new Persona();
  this.protagonista = new Persona();
  this.testigo  = new Persona();
  this.personas = [];
  
  this.personasIds = [];
  this.personasTemporales = [];
  this.archivos = [
    { file: null, base64: '', mimeType: '', fileName: '' }
  ];
  this.isUpdating = false;
}
  ///////////////////////////////////////////////////////
// Manejo de archivos para personas

onFileSelectedPersona(event: any, index: number): void {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.archivosPersonas[index] = {
        file: file,
        base64: e.target.result.split(',')[1],
        mimeType: file.type,
        fileName: file.name
      };
      console.log('Archivo cargado para persona:', this.archivosPersonas[index]);
      this.cdr.detectChanges(); // Forzar la detección de cambios
    };
    reader.readAsDataURL(file);
  }
}
cargarArchivosPersona(persona: Persona): void {
  this.archivosPersonas = [
    { file: null, base64: persona.foto || '', mimeType: persona.foto_tipo || '', fileName: persona.foto_nombre || '' },
    { file: null, base64: persona.foto1 || '', mimeType: persona.foto_tipo1 || '', fileName: persona.foto_nombre1 || '' },
    { file: null, base64: persona.foto2 || '', mimeType: persona.foto_tipo2 || '', fileName: persona.foto_nombre2 || '' }
  ];
}

agregarArchivoPersona(): void {
  if (this.archivosPersonas.length < 3) {
    this.archivosPersonas.push({ file: null, base64: '', mimeType: '', fileName: '' });
  } else {
    Swal.fire('Límite alcanzado', 'No puedes agregar más de 3 archivos.', 'warning');
  }
}

eliminarArchivoPersona(index: number): void {
  this.archivosPersonas.splice(index, 1);
}

getFileUrlPersona(base64: string, mimeType: string): SafeUrl {
  const url = `data:${mimeType};base64,${base64}`;
  return this.domSanitizer.bypassSecurityTrustUrl(url);
}

getArchivosPersona(persona: Persona): { base64: string; mimeType: string; fileName: string }[] {
  return [
    { base64: persona.foto || '', mimeType: persona.foto_tipo || 'application/octet-stream', fileName: persona.foto_nombre || 'Foto 1' },
    { base64: persona.foto1 || '', mimeType: persona.foto_tipo1 || 'application/octet-stream', fileName: persona.foto_nombre1 || 'Foto 2' },
    { base64: persona.foto2 || '', mimeType: persona.foto_tipo2 || 'application/octet-stream', fileName: persona.foto_nombre2 || 'Foto 3' }
  ];
}

resetArchivosPersona(): void {
  this.archivosPersonas = [
    { file: null, base64: '', mimeType: '', fileName: '' },
    { file: null, base64: '', mimeType: '', fileName: '' },
    { file: null, base64: '', mimeType: '', fileName: '' }
  ];
}
eliminarArchivoCargadoP(index: number): void {
  if (index >= 0 && index < this.archivosPersonas.length) {
    this.archivosPersonas[index] = { file: null, base64: '', mimeType: '', fileName: '' };
  }
}

abrirSistemaArchivos(): void {
  console.log('Abriendo sistema de archivos...');
  const index = this.obtenerIndiceDisponible();
  if (index !== -1) {
    const inputElement = document.getElementById('archivoPersona') as HTMLInputElement;
    if (inputElement) {
      console.log('Input de archivo encontrado, haciendo clic...');
      inputElement.setAttribute('accept', '*/*');
      inputElement.click();
    } else {
      console.error('Input de archivo no encontrado');
    }
  } else {
    Swal.fire('Límite alcanzado', 'No puedes agregar más de 3 archivos.', 'warning');
  }
}

obtenerIndiceDisponible(): number {
  for (let i = 0; i < this.archivosPersonas.length; i++) {
    if (!this.archivosPersonas[i].base64) {
      return i;
    }
  }
  return -1;
}
 // Otros atributos y métodos...

 abrirCamara(): void {
  const index = this.obtenerIndiceDisponible();
  if (index !== -1) {
    // Mostrar el modal de la cámara
    this.openModalCamara();

    // Listar los dispositivos de cámara disponibles
    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        this.availableCameras = devices.filter(device => device.kind === 'videoinput');
        if (this.availableCameras.length > 0) {
          // Iniciar con la primera cámara disponible
          this.iniciarCamara(this.availableCameras[0].deviceId);
        } else {
          Swal.fire('Error', 'No se encontraron cámaras disponibles.', 'error');
          this.cerrarCamara();
        }
      })
      .catch((error) => {
        console.error('Error al listar dispositivos:', error);
        Swal.fire('Error', 'No se pudieron listar los dispositivos.', 'error');
        this.cerrarCamara();
      });
  } else {
    Swal.fire('Límite alcanzado', 'No puedes agregar más de 3 archivos.', 'warning');
  }
}
// Método para iniciar la cámara con un dispositivo específico
// Método para alternar entre cámaras
alternarCamara(): void {
  if (this.availableCameras.length > 1) {
    this.currentCameraIndex = (this.currentCameraIndex + 1) % this.availableCameras.length;
    const nextCamera = this.availableCameras[this.currentCameraIndex];
    this.iniciarCamara(nextCamera.deviceId);
  } else {
    // Mostrar un mensaje si solo hay una cámara disponible
    Swal.fire('Advertencia', 'Solo hay una cámara disponible.', 'warning');
    this.cerrarCamara();
  }
}

// Método para iniciar la cámara con un dispositivo específico
iniciarCamara(deviceId: string): void {
  if (this.stream) {
    this.stream.getTracks().forEach(track => track.stop()); // Detener la cámara actual
  }

  const constraints = {
    video: {
      deviceId: deviceId ? { ideal: deviceId } : undefined,
      width: { ideal: 1280 },
      height: { ideal: 720 }
    }
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      this.stream = stream;

      // Asignar el stream al elemento de video
      if (this.videoElementRef) {
        this.videoElementRef.srcObject = stream;
        this.videoElementRef.play();
      }
    })
    .catch((error) => {
      console.error('Error al acceder a la cámara:', error);
      Swal.fire('No puedes invertir la camara', 'Solo hay una cámara disponible.', 'warning');
      this.cerrarCamara();
    });
}
cerrarCamara(): void {
  if (this.stream) {
    this.stream.getTracks().forEach(track => track.stop());
  }
  this.mostrarCamara = false;
  const modalElement = document.getElementById('camera-modal');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
  }
}
openModalCamara() {
  const modalElement = document.getElementById('camera-modal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
tomarFoto(): void {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (context && this.videoElementRef) {
    canvas.width = this.videoElementRef.videoWidth;
    canvas.height = this.videoElementRef.videoHeight;
    context.drawImage(this.videoElementRef, 0, 0, canvas.width, canvas.height);

    const base64Image = canvas.toDataURL('image/png').split(',')[1];
    const index = this.obtenerIndiceDisponible();
    if (index !== -1) {
      this.archivosPersonas[index] = {
        file: null,
        base64: base64Image,
        mimeType: 'image/png',
        fileName: `foto_${index + 1}.png`
      };
      this.cerrarCamara();
    } else {
      Swal.fire('Límite alcanzado', 'No puedes agregar más de 3 archivos.', 'warning');
    }
  }
}
@ViewChild('videoElement', { static: false }) set videoElement(element: ElementRef<HTMLVideoElement>) {
  if (element) {
    this.videoElementRef = element.nativeElement;
  }
}
onExtranjeroChange(valor: boolean) {
  if (!valor) {
    this.victima.nacionalidad = '';
    this.victima.provincia = '';
    this.victimario.nacionalidad = '';
    this.victimario.provincia = '';
    this.protagonista.nacionalidad = '';
    this.protagonista.provincia = '';
    this.testigo.nacionalidad = '';
    this.testigo.provincia = '';

  }
}


}