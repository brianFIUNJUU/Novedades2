import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovedadesService } from '../../../services/novedades.service';
import { NovedadesPersonaService } from '../../../services/novedades_persona.service';
import { Novedades} from '../../../models/novedades';
import { UnidadRegional } from '../../../models/unidad_regional';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { CuadranteService } from '../../../services/cuadrante.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Cuadrante } from '../../../models/cuadrante';
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../models/persona';
import {EstadoService} from '../../../services/estado.service';
import {Estado} from '../../../models/estado';
import { PersonalService } from '../../../services/personal.service'; // Importar el servicio de Personal
import {Personal} from '../../../models/personal'; // Importar el modelo de Personal
import { AuthenticateService } from '../../../services/authenticate.service';
import { ExcelExportService } from '../../../services/excel-export.service';
import { forkJoin,of } from 'rxjs';
import { map,switchMap} from 'rxjs/operators';
import { ExportRow } from '../../../models/export-row';
import * as L from 'leaflet';
import * as bootstrap from 'bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReactiveFormsModule } from '@angular/forms';
import { CellHookData, HAlignType, RowInput } from 'jspdf-autotable';
import { DepartamentoService } from '../../../services/departamento.service';
import { Localidad } from '../../../models/localidad';
import { Departamento } from '../../../models/departamento';
import { LocalidadService } from '../../../services/localidad.service'
import { Validator } from '@angular/forms';
import { ArchivoNovedadService } from '../../../services/archivo_novedad.services';
import { NovedadElemento } from  '../../../models/novedad_elemento';
import { NovedadElementoService } from  '../../../services/novedad_elemento.service';
// Tipo para los códigos de novedad 
type CodigoNovedad = 'R' | 'A' | 'V';
type FontStyleType = 'normal' | 'bold' | 'italic' ;
@Component({
  selector: 'app-novedades-list',
  templateUrl: './novedades-list.component.html',
  styleUrls: ['./novedades-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
})
export class NovedadesListComponent implements OnInit {
  novedades: Novedades[] = [];
  personales: Personal[] = [];
  map!: L.Map;
  marker!: L.Marker;
  unidadesRegionales: UnidadRegional[] = [];
  mensajeError: string = '';
  userType: string = 'administrador'; // Ajusta esto según tu lógica de autenticación 
   userInfo: any = {};
  usuarioNombre: string = '';
  usuarioLegajo: string = '';
  usuarioUnidad: string = ''; // Almacenar el número de unidad del usuario
  fechaFiltroUnidadInicio: string = '';
fechaFiltroUnidadFin: string = '';
  legajoFiltro: string = '';
  filteredNovedades: any[] = [];
  colorFilter: string = '';
  fechaSeleccionada: string = ''; // Almacenar la fecha seleccionada
  actaForm: FormGroup;
  actaSecForm: FormGroup;
  departamentos: Departamento[] = [];
  localidades: Localidad[] = [];
  // Declaración de la variable novedadesFiltradas
novedadesFiltradas: Novedades[] = [];
personasParaActa: Persona[] = [];
 mostrarFiltroFechaUsuario = false;
  fechaFiltroUsuario: string = '';
    mostrarFiltroFechaAdmin = false;
  fechaFiltroAdmin: string = '';
   fechaFiltroAdminInicio: string = '';
  fechaFiltroAdminFin: string = '';
  fechaFiltroUsuarioInicio: string = '';
  fechaFiltroUsuarioFin: string = '';
  mostrarFiltroLegajoAdmin = false;
  mostrarFiltroIdAdmin = false;
  mostrarFiltroUnidadAdmin = false;
  mostrarFiltroFechaUnid = false;
    mostrarFiltroOrigenTorre911 = false;
  fechaFiltroOrigenInicio = '';
  fechaFiltroOrigenFin = ''; 
mostrarFiltroNIncidencia = false;
nIncidenciaFiltro = '';

idFiltro: string = '';
  unidadFiltro: string = '';

  constructor(
    private novedadesService: NovedadesService,
    private unidadRegionalService: UnidadRegionalService,
    private personaService: PersonaService,
    private cuadranteService: CuadranteService,
    private estadoService:EstadoService,
    private router: Router,
    private personalService: PersonalService,
    private authService: AuthenticateService,
    private excelExportService: ExcelExportService,
    private novedadesPersonaService: NovedadesPersonaService,
    private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private localidadService: LocalidadService,
    private archivoNovedadService: ArchivoNovedadService,
    private novedadElementoService: NovedadElementoService
  ) {
    this.actaForm = this.fb.group({
      departamento: ['', Validators.required],
      localidad: ['', Validators.required],
      fechaActa: [''],
      horaActa: [''],
      fechaIntervencion: [''],
      horaIntervencion: [''],
      relato: [''],
      direccion: [''],
      descripcion_hecho: [''],
      
    });
    this.actaSecForm = this.fb.group({
      fechaActa: [''], //
      horaActa: [''], //
      direccion: [''], //
      ciudad: [''], //
      latitud: [''], //
      longitud: [''], //
      fiscal: [''], //
      juez: [''], //
      fechaOrden: [''], //
      filmacion: [''], //
      descripcion: [''], //
      relato: [''], //
  
    });
  }
  openDocumentOptions(novedad: any) {
    Swal.fire({
      title: 'Selecciona el documento a generar',
      input: 'select',
      inputOptions: {
        'procedimiento': 'Acta de procedimiento',
        'secuestro': 'Acta de secuestro'
      },
      inputPlaceholder: 'Selecciona un documento',
      showCancelButton: true,
      confirmButtonText: 'Generar',
      cancelButtonText: 'Cancelar',
      preConfirm: (value) => {
        if (value === 'procedimiento') {
          this.openActaModal(novedad); // Llamar a la función para "Acta de procedimiento"
        } else if (value === 'secuestro') {
          this.OpenSecuestro(novedad); // Llamar a la función para "Acta de secuestro"
        }
      }
    });
  }
 ngOnInit(): void {
  this.authService.getUserInfo().subscribe(userInfo => {
    this.usuarioNombre = userInfo.nombre;
    this.userInfo = userInfo;
    this.usuarioLegajo = userInfo.legajo;

    // Detectar si es EncargadoUnidad y asignar el número de unidad
    if (userInfo.perfil.startsWith('EncargadoUnidad')) {
      // Si el perfil es exactamente "EncargadoUnidad", asigna 1
      // Si es "EncargadoUnidad 2", asigna 2, etc.
      const match = userInfo.perfil.match(/EncargadoUnidad\s?(\d*)/);
      this.usuarioUnidad = match && match[1] ? match[1] : '1';
      // Traer novedades de esa unidad regional
      this.getNovedadesByUnidadRegionalUsuario();
    } else if (userInfo.perfil === 'usuario') {
      this.getNovedadesByLegajoByToday();
    } else {
      this.getNovedadesByToday();
    }
  });
}

verNovedad(id: string): void {
  this.router.navigate(['/tableros/novedades', id], { queryParams: { view: 'readonly' } });
}
   onFiltroUnidadChange(event: any) {
    const valor = event.target.value;
    this.mostrarFiltroFechaUnid = false;
    if (valor === 'todas') {
      this.mostrarFiltroFechaUnid = false;
      this.getNovedadesByUnidadRegionalUsuarioTodas();
    } else if (valor === 'hoy') {
      this.mostrarFiltroFechaUnid = false;
      this.getNovedadesByUnidadRegionalUsuario();
    } else if (valor === 'fecha') {
      this.mostrarFiltroFechaUnid = true;
    }
  }
getNovedadesByUnidadRegionalUsuario(): void {
  if (this.usuarioUnidad) {
    this.novedadesService.getNovedadesByUnidadRegionalByToday(this.usuarioUnidad).subscribe(
      (data: Novedades[]) => {
        this.novedades = data;
        this.filteredNovedades = [...this.novedades];
        this.novedades.forEach(novedad => {
          this.filtrarNovedadesC();
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener novedades por unidad regional:', error.message);
        // Swal.fire('Error', 'Error al obtener novedades por unidad regional: ' + error.message, 'error');
      }
    );
  }
} 



getNovedadesByUnidadRegionalUsuarioTodas(): void {
  if (this.usuarioUnidad) {
    this.novedadesService.getNovedadesByUnidadRegional(this.usuarioUnidad).subscribe(
      (data: Novedades[]) => {
        this.novedades = data;
        this.filteredNovedades = [...this.novedades];
        this.novedades.forEach(novedad => {
          this.filtrarNovedadesC();
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener novedades por unidad regional:', error.message);
        // Swal.fire('Error', 'Error al obtener novedades por unidad regional: ' + error.message, 'error');
      }
    );
  }
}

  // Filtrar por rango de fecha
filtrarNovedadesUnidadPorFecha() {
  if (this.usuarioUnidad && this.fechaFiltroUnidadInicio && this.fechaFiltroUnidadFin) {
    this.novedadesService.getNovedadesByUnidadRegionalByRangoFecha(
      this.usuarioUnidad,
      this.fechaFiltroUnidadInicio,
      this.fechaFiltroUnidadFin
    ).subscribe(
      (data: Novedades[]) => {
        this.novedades = data;
        this.filteredNovedades = [...this.novedades];
        this.novedades.forEach(novedad => {
          this.filtrarNovedadesC();
        });
      }
    );
  }
}
 
  onFiltroAdminChange(event: any) {
    const valor = event.target.value;
    this.mostrarFiltroFechaAdmin = false;
    this.mostrarFiltroLegajoAdmin = false;
    this.mostrarFiltroIdAdmin = false;
    this.mostrarFiltroUnidadAdmin = false;
    this.mostrarFiltroOrigenTorre911 = false; // Resetear el filtro de origen Torre 911
    this.mostrarFiltroNIncidencia = false; // Resetear el filtro de N_incidencia
    if (valor === 'todas') {
      this.getAllNovedades();
    } else if (valor === 'hoy') {
      this.getNovedadesByToday();
    } else if (valor === 'fecha') {
      this.mostrarFiltroFechaAdmin = true;
    } else if (valor === 'porLegajo') {
      this.mostrarFiltroLegajoAdmin = true;
    } else if (valor === 'porId') {
      this.mostrarFiltroIdAdmin = true;
    }
    else if (valor === 'porUnidad') {
      this.mostrarFiltroUnidadAdmin = true;
    }
     else if (valor === 'TORRE 911') {
      this.mostrarFiltroOrigenTorre911 = true;
    } 
    else if (valor === 'por N_incidencia') {
    this.mostrarFiltroNIncidencia = true;
  // Oculta otros filtros si es necesario
    } 

  }
    filtrarporUnidadAdmin() {
       Swal.fire({
    title: 'Cargando...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
    if (this.unidadFiltro) {
      this.novedadesService.getNovedadesByUnidadRegional(this.unidadFiltro).subscribe(
        (data: Novedades[]) => {
          this.novedades = data;
          this.filteredNovedades = [...this.novedades];
          this.novedades.forEach(novedad => {
            this.filtrarNovedadesC();
          });
                Swal.close(); // También ciérralo si hay error

        }
      );
    }
  }
filtrarPorOrigenTorre911() {
  this.novedadesService.getNovedadesByOrigenNovedadYRangoFecha(
    'TORRE 911',
    this.fechaFiltroOrigenInicio,
    this.fechaFiltroOrigenFin
  ).subscribe((data: Novedades[]) => {
    this.novedades = data;
    this.filteredNovedades = [...this.novedades];
    this.filtrarNovedadesC();
  });
}

filtrarPorNIncidencia() {
  if (this.nIncidenciaFiltro) {
    this.novedadesService.getNovedadesByNIncidencia(this.nIncidenciaFiltro).subscribe((data: Novedades[]) => {
      this.novedades = data;
      this.filteredNovedades = [...this.novedades];
      this.filtrarNovedadesC();
    });
  }
}
  filtrarporIdAdmin() {
    if (this.idFiltro) {
      this.novedadesService.getNovedadById(this.idFiltro).subscribe(
        (data: Novedades) => {
          // Si el backend devuelve un solo objeto, conviértelo en array
          this.novedades = data ? [data] : [];
          this.filteredNovedades = [...this.novedades];
          this.novedades.forEach(novedad => {
            this.filtrarNovedadesC();
          });
        },
        (error: HttpErrorResponse) => {
          this.novedades = [];
          this.filteredNovedades = [];
          Swal.fire('Error', 'No se encontró novedad con ese ID', 'error');
        }
      );
    }
  }
  
  filtrarporLegajoAdmin() {
    Swal.fire({
    title: 'Cargando...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
    if (this.legajoFiltro) {
      this.novedadesService.getNovedadesByPersonalAutorLegajo(this.legajoFiltro).subscribe(
        (data: Novedades[]) => {
          this.novedades = data;
          this.filteredNovedades = [...this.novedades];
          this.novedades.forEach(novedad => {
            this.filtrarNovedadesC();
          });
                Swal.close(); // También ciérralo si hay error

        }
      );
    }
  }
  
  filtrarNovedadesPorFechaAdmin() {
     Swal.fire({
    title: 'Cargando...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
    if (this.fechaFiltroAdminInicio && this.fechaFiltroAdminFin) {
      this.novedadesService.getNovedadesByRangoFecha(this.fechaFiltroAdminInicio, this.fechaFiltroAdminFin).subscribe(
        (data: Novedades[]) => {
                    this.novedades = data;
          this.filteredNovedades = [...this.novedades];
          this.novedades.forEach(novedad => {
            this.filtrarNovedadesC();
          });
                Swal.close(); // También ciérralo si hay error

        }
      );
    }
  }
  getNovedadesByToday(): void {
  this.novedadesService.getNovedadesByToday().subscribe(
    (data: Novedades[]) => {
            this.novedades = data;
      this.filteredNovedades = [...this.novedades];
      this.novedades.forEach(novedad => {
        this.filtrarNovedadesC();
      });
    },
    (error: HttpErrorResponse) => {
      console.error('Error al obtener novedades del día:', error.message);
      // Swal.fire('Error', 'Error al obtener novedades del día: ' + error.message, 'error');
    }
  );
}
getAllNovedades(): void {
     Swal.fire({
    title: 'Cargando...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

    this.novedadesService.getAllNovedades().subscribe(
      (data: Novedades[]) => {
                this.novedades = data;
        this.filteredNovedades = [...this.novedades];
        this.novedades.forEach(novedad => {
          // this.cargarPersonas(novedad);
          this.filtrarNovedadesC()
        });
              Swal.close(); // Cierra el Swal solo cuando termina correctamente

      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener novedades:', error.message);
        // Swal.fire('Error', 'Error al obtener novedades: ' + error.message, 'error');
              Swal.close(); // También ciérralo si hay error

      }
    );
  }
  
  onFiltroUsuarioChange(event: any) {
    const valor = event.target.value;
    if (valor === 'todas') {
      this.mostrarFiltroFechaUsuario = false;
      this.getNovedadesByLegajo();
    } else if (valor === 'hoy') {
      this.mostrarFiltroFechaUsuario = false;
      this.getNovedadesByLegajoByToday();
    } else if (valor === 'fecha') {
      this.mostrarFiltroFechaUsuario = true;
    }
  }
  
   filtrarMisNovedadesPorFecha() {
    if (this.fechaFiltroUsuarioInicio && this.fechaFiltroUsuarioFin) {
      this.novedadesService.getNovedadesByLegajoByRangoFecha(
        this.usuarioLegajo,
        this.fechaFiltroUsuarioInicio,
        this.fechaFiltroUsuarioFin
      ).subscribe(
        (data: Novedades[]) => {
          this.novedades = data;
          this.filteredNovedades = [...this.novedades];
          this.novedades.forEach(novedad => {
            this.filtrarNovedadesC();
          });
        }
      );
    }
  }
  getNovedadesByLegajo(): void {
      Swal.fire({
    title: 'Cargando...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
    this.novedadesService.getNovedadesByPersonalAutorLegajo(this.usuarioLegajo).subscribe(
      (data: Novedades[]) => {
                this.novedades = data;
        this.filteredNovedades = [...this.novedades];
        this.novedades.forEach(novedad => {
          // this.cargarPersonas(novedad);
          this.filtrarNovedadesC();
        });
              Swal.close(); // Cierra el Swal solo cuando termina correctamente

      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener novedades:', error.message);
              Swal.close(); // También ciérralo si hay error

      }
    );
  }

   getNovedadesByLegajoByToday(): void {
  this.novedadesService.getNovedadesByLegajoByToday(this.usuarioLegajo).subscribe(
    (data: Novedades[]) => {
            this.novedades = data;
      this.filteredNovedades = [...this.novedades];
      this.novedades.forEach(novedad => {
        this.filtrarNovedadesC();
      });
    },
    (error: HttpErrorResponse) => {
      console.error('Error al obtener novedades del día por legajo:', error.message);
     
    }
  );
}
  
  initForm(): void {
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
    const currentTime = today.toTimeString().slice(0, 5); // HH:mm
  
    // Inicializamos el formulario correctamente
    this.actaForm = this.fb.group({
      fechaActa: [currentDate], 
      horaActa: [currentTime], 
      fechaIntervencion: [''],
      horaIntervencion: [''],
      localidad: ['', Validators.required],
      departamento: ['', Validators.required],
      relato: [''],
      direccion: [''],
      descripcion_hecho: [''],
    
    });
    this.actaSecForm = this.fb.group({
      fechaActa: [currentDate], 
      horaActa: [currentTime], 
      direccion: [''],
      ciudad: [''],
      latitud: [''],
      longitud: [''],
      fiscal: [''],
      juez: [''],
      fechaOrden: [''],
      filmacion: [''],
      descripcion: [''],
      relato: [''],
   
    });
  }
  openActaModal(novedad: any): void {
    this.cargarDepartamentos(); // Solo aquí
    this.initForm(); // Asegurar que el formulario se inicializa antes de abrir el modal
    this.actaForm.patchValue({
      fechaIntervencion: novedad.fecha,
      horaIntervencion: novedad.horario,
      relato:novedad.descripcion,
      direccion: novedad.lugar_hecho,
      descripcion_hecho: novedad.descripcion_hecho,
    });
    this.cargarPersonasActa(novedad); // <-- Cargar personas para mostrar en el modal
// y mary dijo que era funcionaria sin titulo
    // Abrir el modal (usando bootstrap modal API)
    const modalElement = document.getElementById('actaModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  OpenSecuestro(novedad:any):void{
    this.initForm();
    this.actaSecForm.patchValue({
      fechaActa: novedad.fecha,
      horaActa: novedad.horario,
      direccion: novedad.lugar_hecho,
      ciudad: novedad.localidad,
      latitud: novedad.latitud,
      longitud: novedad.longitud,
      fiscal: novedad.fiscal,
      juez: novedad.juez,
      fechaOrden: novedad.fecha_orden,
      filmacion: novedad.filmacion,
      descripcion: novedad.descripcion,
    }); 
    const modalElement = document.getElementById('actaSecModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
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
  
    onDepartamentoChange(nombreDepartamento: string): void { 
      this.actaForm.patchValue({ departamento: nombreDepartamento });
    
      const deptoSeleccionado = this.departamentos.find(dep => dep.nombre === nombreDepartamento);
      if (deptoSeleccionado) {
        this.cargarLocalidades(Number(deptoSeleccionado.id));
        console.log('Departamento seleccionado:', nombreDepartamento);
      }
    }
    
    onLocalidadChange(nombreLocalidad: string): void {
      this.actaForm.patchValue({ localidad: nombreLocalidad });
      console.log('Localidad seleccionada:', nombreLocalidad);
    }
    cargarPersonas(novedad: Novedades): void {
      // console.log(`Cargando personas para la novedad con ID: ${novedad.id}`);
      // console.log(`Array de personas: ${JSON.stringify(novedad.personas)}`);
      if (novedad.personas && novedad.personas.length > 0) {
        novedad.personas.forEach((personaId: any) => {
          const id = typeof personaId === 'object' ? personaId.id : personaId;
          // console.log(`Cargando persona con ID: ${id}`);
          this.personaService.getPersona(id).subscribe(
            (persona: Persona) => {
              // console.log(`Persona cargada: ${JSON.stringify(persona)}`);
              // Obtener el estado de la persona para la novedad actual
              this.estadoService.getEstadoByNovedadAndPersona(novedad.id, persona.id).subscribe(
                (estado: Estado) => {
                  persona.estado = estado.estado;
                  // console.log(`Estado de la persona: ${persona.estado}`);
                  if (!novedad.personasDetalles) {
                    novedad.personasDetalles = [];
                  }
                  novedad.personasDetalles.push(persona);
                },
                
              );
            },
            (error: HttpErrorResponse) => {
              console.error('Error al obtener persona:', error.message);
            }
          );
        });
      } else {
        // console.log('El array de personas está vacío o no está definido.');
      }
    }
    
cargarPersonasActa(novedad: Novedades): void {
  this.personasParaActa = [];

  if (novedad.personas && novedad.personas.length > 0) {
    novedad.personas.forEach((personaId: any) => {
      const id = typeof personaId === 'object' ? personaId.id : personaId;

      this.personaService.getPersona(id).subscribe(
        (persona: Persona) => {
          this.estadoService.getEstadoByNovedadAndPersona(novedad.id, persona.id).subscribe(
            (estado: Estado) => {
              persona.estado = estado.estado;
              this.personasParaActa.push(persona);
            },
            error => console.error('Error al obtener estado:', error)
          );
        },
        error => console.error('Error al obtener persona:', error)
      );
    });
  }
}


   // Función para generar el PDF del acta
  // Función para generar el PDF del acta
  generatePDF(): void {
    if (this.actaForm.invalid) {
      this.actaForm.markAllAsTouched();
      Swal.fire('Error', 'Por favor, completá todos los campos obligatorios.', 'error');
      return;
    }
  
    const formData = this.actaForm.value;
    const pdf = new jsPDF();
  
    const pageWidth = pdf.internal.pageSize.getWidth();
    const marginHorizontal = 20;
    const usablePageWidth = pageWidth - marginHorizontal * 2;
    const lineHeight = 6;
  
    // Título
    const titulo = 'ACTA DE PROCEDIMIENTO';
    pdf.setFontSize(12);
    const textWidth = pdf.getTextWidth(titulo);
    const x = (pageWidth - textWidth) / 2;
    const y = 20;
    pdf.text(titulo, x, y);
    pdf.setLineWidth(0.5);
    pdf.line(marginHorizontal, y + 2, pageWidth - marginHorizontal, y + 2);
  
    // Fechas
    const fechaActa = new Date(formData.fechaActa + 'T00:00:00');
    const diaActa = fechaActa.getDate();
    const añoActa = fechaActa.getFullYear();
  
    const fechaIntervencion = new Date(formData.fechaIntervencion + 'T00:00:00');
    const diaIntervencion = fechaIntervencion.getDate();
    const añoIntervencion = fechaIntervencion.getFullYear();
  
    const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const mesTextoActa = meses[fechaActa.getMonth()];
    const mesTextoIntervencion = meses[fechaIntervencion.getMonth()];
    const fechaI = formData.fechaActa === formData.fechaIntervencion
      ? "antes indicada"
      : `${diaIntervencion} del mes de ${mesTextoIntervencion} del ${añoIntervencion}`;
  
    // Texto principal
    const textoIntroduccion =
      `EN LA CIUDAD DE ${formData.localidad.toUpperCase()}, DEPARTAMENTO DE ${formData.departamento.toUpperCase()}, PROVINCIA DE JUJUY, REPÚBLICA ARGENTINA, a los ${diaActa} días del mes de ${mesTextoActa} del ${añoActa}, siendo las ${formData.horaActa} horas, el funcionario policial que suscribe, a los efectos legales, hace CONSTAR: Que en la fecha ${fechaI}, siendo las ${formData.horaIntervencion} horas, se realiza la siguiente intervención policial con dirección en ${formData.direccion}: ${formData.relato}`;
  
    // Texto justificado
    const marginTop = y + 10;
    pdf.setFont("helvetica", "normal");
    const textoDividido = pdf.splitTextToSize(textoIntroduccion, usablePageWidth);
    pdf.text(textoDividido, marginHorizontal, marginTop, { align: 'justify', maxWidth: usablePageWidth });
  
    const finalTextoY = marginTop + textoDividido.length * lineHeight;
  
    // Tabla
    const personas = this.personasParaActa || [];

    if (personas.length > 0) {
      const tablaTituloY = finalTextoY + lineHeight; // un renglón debajo del texto
      pdf.setFontSize(11);
      pdf.setFont("helvetica", "bold");
      pdf.text("Involucrados en la incidencia:", marginHorizontal, tablaTituloY);
    
      autoTable(pdf, {
        startY: tablaTituloY + lineHeight, // otro renglón más para comenzar la tabla
        margin: { left: marginHorizontal, right: marginHorizontal },
        head: [['Nombre y Apellido', 'DNI', 'Sexo', 'Domicilio', 'Edad', 'Estado']],
        body: personas.map(p => [
          `${p.nombre} ${p.apellido}`,
          p.dni,
          p.sexo,
          p.domicilio,
          p.edad,
          p.estado || ''
        ]),
        theme: 'grid',
        headStyles: { fillColor: [22, 160, 133] },
        styles: { fontSize: 9 },
      });
    }
    const finalY = (pdf as any).lastAutoTable?.finalY || finalTextoY;
    const cierreTexto = 'No siendo para más el acto se da por terminado el mismo, firmando al pie de la presente los intervinientes de conformidad y para constancia, ante mí que CERTIFICO.';

    pdf.setFont("helvetica", "normal");
    const cierreDividido = pdf.splitTextToSize(cierreTexto, usablePageWidth);
    pdf.text(cierreDividido, marginHorizontal, finalY + lineHeight, { align: 'justify', maxWidth: usablePageWidth });
    
    // Mostrar PDF
    pdf.output('dataurlnewwindow');
    // Cerrar modal
    const modalElement = document.getElementById('actaModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal?.hide();
    }
  }
  

generateSecPDF(): void {
  const formData = this.actaForm.value;
  const pdf = new jsPDF();

  const imgUrl = 'assets/LOGOMINPUBACUS.png';

  fetch(imgUrl)
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgBase64 = reader.result as string;

        // Configurar imagen en el PDF
        const imgWidth = 70;
        const imgHeight = 17;
        const imgX = 20;
        const imgY = 10;

        pdf.addImage(imgBase64, 'PNG', imgX, imgY, imgWidth, imgHeight);
        const separadorX = imgX + imgWidth + 6; // Ajusta la posición
        const separadorYInicio = imgY; // Inicio de la línea (arriba)
        const separadorYFin = imgY + imgHeight; // Fin de la línea (abajo)
        
        pdf.setLineWidth(0.5); // Controla el grosor de la línea (0.5 es delgado)
        pdf.line(separadorX, separadorYInicio, separadorX, separadorYFin);
        

        // Configurar título y subtítulo
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(15);
        const titleText = "ACTA DE SECUESTRO";
        const subTitleText = "(Ley 6259)";
        const titleX = imgX + imgWidth + 10;
        const titleY = 17;
        pdf.text(titleText, titleX, titleY);

        pdf.setFontSize(14);
        const subTitleX = titleX + (pdf.getTextWidth(titleText) / 4); // Centrado bajo el título
        const subTitleY = titleY + 7; // Un poco más abajo
        pdf.text(subTitleText, subTitleX, subTitleY);

        // Datos para la tabla
  // Posición de la tabla
  const startY = imgY + imgHeight + 10; // Ajuste de espacio después de la imagen
// Define la variable tableData antes de usarla
const tableData = [
  // TÍTULO (2 Columnas)
  [{ content: "AUTORIDADES", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' as FontStyleType } }],
  [
    { content: "Fuerza de Seguridad:\n"+"Policía de la Provincia de Jujuy", colSpan: 2 },
     { content:"Nro. Legajo:\n"+" P-1688/25"},
  ],
  [
    { content: "NOMBRE Y APELLIDO (Funcionarios intervinientes):\nMario lopez\nMario lopez", colSpan: 2 },
    { content:"Solicitada por agente/ayudante fiscal:\nMario lopez"},
  ],

  // Fila con 3 columnas
  [
    { content: "Juez:" },
    { content: "Fecha de la Orden:\n"},
    { content: "Orden Judicial dispuesta por el fiscal:"},
  ],
  [{ content: "TIEMPO Y LUGAR", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' } }],
  [
  { content: "Fecha de secuestro:\n"+" 24/02/2025", colSpan: 2 },
  { content:"Hora de inicio:\n"+"03:15"},
  ],
  [{ content: "Lugar Procedimiento:\n"+"Ciudad:,"+"Calle:,"+"Nro:,"+"Latitud:,"+"Longitud:,", colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' } }],
  [
    { content:"Descripción del soporte:", colSpan: 2 },
    { content: "Filmación:\n"+"Si"}
  ],
  [{ content: "JUSTIFICACION DEL SECUESTRO IMPOSTERGABLE", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' as FontStyleType } }],
];

// Función para dibujar la tabla
autoTable(pdf, {
  startY: 40,
  body: tableData as RowInput[],
  theme: 'grid',
  styles: {
    fontSize: 10,
    cellPadding: 2,
    valign: 'middle',  // Alineación central
    overflow: 'linebreak',
    lineWidth: 0.5,
    lineColor: [0, 0, 0],
  },
  columnStyles: {
    0: { cellWidth: 62, minCellHeight: 10 }, // Primera columna
    1: { cellWidth: 50, minCellHeight: 10 }, // Segunda columna
    2: { cellWidth: 70, minCellHeight: 10 }, // Tercera columna
  },
  // Función para personalizar el padding y el contenido
  didDrawCell: (data: any) => {
    const { rowIndex, cell } = data;

    // Ajustar el padding dependiendo del tipo de fila (título vs contenido)
    if (rowIndex === 0) {
      data.cell.styles.cellPadding = 5; // Padding mayor para la fila de título
    } else {
      data.cell.styles.cellPadding = 2;  // Padding regular para las filas normales
    }

    // Ajuste de posiciones y contenido
    if (cell.raw && typeof cell.raw === 'object' && 'content' in cell.raw) {
      const text = cell.raw.content;

      if (typeof text === 'string' && text.includes(":")) {
        const [boldText, ...normalTextParts] = text.split(":");
        const normalText = normalTextParts.join(":").trim();
        const { x, y, width, height } = cell;

        // Limpiar la celda original
        pdf.setFillColor(255, 255, 255);
        pdf.rect(x, y, width, height, 'F');

        // Ajuste de posiciones
        let textOffsetX = x + 2;
        let textOffsetY = y + 5;
        let lineHeight = 5;

        // Procesar líneas separadas por salto de línea
        const boldLines = boldText.split("\n");
        const normalLines = normalText.split("\n");

        // Procesar solo la primera línea del texto en negrita con el ":"
        pdf.setFont("helvetica", "bold");
        pdf.text(boldText + ":", textOffsetX, textOffsetY);

        // Aumentar el offset Y para el texto normal
        textOffsetY += lineHeight;

        // Procesar las líneas de texto normal
        pdf.setFont("helvetica", "normal");
        let normalOffsetY = textOffsetY;
        normalLines.forEach((normalLine: string, i: number) => {
          pdf.text(normalLine, textOffsetX, normalOffsetY); // Alinear el texto normal
          normalOffsetY += lineHeight;
        });

        // Ajustar la posición final para que no haya espacio extra en la parte inferior
        textOffsetY = normalOffsetY;
      }
    }
  },
});
const pageHeight = pdf.internal.pageSize.height;  // Altura total de la página
const footerHeight = 30;  // Ajusta esta altura si es necesario

// Calcular la posición Y para las firmas al final de la página
const finalY = pageHeight - footerHeight;

  // Configuración de firmas
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "bold");

  // Primera fila de firmas
  pdf.text("Firma de quien recibió la orden", 20, finalY);
  pdf.text("Firma del funcionario a cargo", 80, finalY);
  pdf.text("Firma de testigo", 140, finalY);

  // Segunda fila de firmas
  pdf.text("Firma de testigo", 20, finalY + 20);
  pdf.text("Firma de otro interveniente", 80, finalY + 20);
  pdf.text("Firma de otro interveniente", 140, finalY + 20);
  // Añadir una nueva página para la segunda tabla
  pdf.addPage();

  // Segunda tabla en la segunda página
  // Modificar las entradas para asegurarte de que fontStyle sea de tipo 'FontStyle'
  const secondTableData = [
    [{ content: "OBJETOS SECUESTRADOS", colSpan: 3, styles: { halign: 'center' as HAlignType, fontStyle: 'bold' as FontStyleType } }],
    [{ content: "blabal", colSpan: 3 }],

  ];
  
  autoTable(pdf, {
    startY: 10,
    body: secondTableData,
    theme: 'grid',
    styles: {
      fontSize: 10,
      cellPadding: 2,
      valign: 'middle',
      overflow: 'linebreak',
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
    },
    columnStyles: {
      0: { cellWidth: 60, minCellHeight: 10 },
      1: { cellWidth: 60, minCellHeight: 10 },
      2: { cellWidth: 60, minCellHeight: 10 },
    },
  });
  // Calcular la posición Y para las firmas al final de la página


// Configuración de firmas
pdf.setFontSize(10);
pdf.setFont("helvetica", "bold");

// Primera fila de firmas
pdf.text("Firma de quien recibió la orden", 20, finalY);
pdf.text("Firma del funcionario a cargo", 80, finalY);
pdf.text("Firma de testigo", 140, finalY);

// Segunda fila de firmas
pdf.text("Firma de testigo", 20, finalY + 20);
pdf.text("Firma de otro interveniente", 80, finalY + 20);
pdf.text("Firma de otro interveniente", 140, finalY + 20);
  // Mostrar el PDF
  pdf.addPage();

const tableData2 = [
  // TÍTULO (2 Columnas)
  [{ content: "AUTORIDADES", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' as FontStyleType } }],
  [
    { content: "Fuerza de Seguridad:\n"+"Policía de la Provincia de Jujuy", colSpan: 2 },
     { content:"Nro. Legajo:\n"+" P-1688/25"},
  ],
  [
    { content: "NOMBRE Y APELLIDO (Funcionarios intervinientes):\nMario lopez\nMario lopez", colSpan: 2 },
    { content:"Solicitada por agente/ayudante fiscal:\nMario lopez"},
  ],

  // Fila con 3 columnas
  [
    { content: "Juez:" },
    { content: "Fecha de la Orden:\n"},
    { content: "Orden Judicial dispuesta por el fiscal:"},
  ],
  [{ content: "TIEMPO Y LUGAR", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' } }],
  [
  { content: "Fecha de secuestro:\n"+" 24/02/2025", colSpan: 2 },
  { content:"Hora de inicio:\n"+"03:15"},
  ],
  [{ content: "Lugar Procedimiento:\n"+"Ciudad:,"+"Calle:,"+"Nro:,"+"Latitud:,"+"Longitud:,", colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' } }],
  [
    { content:"Descripción del soporte:", colSpan: 2 },
    { content: "Filmación:\n"+"Si"}
  ],
  [{ content: "JUSTIFICACION DEL SECUESTRO IMPOSTERGABLE", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' as FontStyleType } }],

  


];

// Función para dibujar la tabla
autoTable(pdf, {
  startY: 40,
  body: tableData2 as RowInput[],
  theme: 'grid',
  styles: {
    fontSize: 10,
    cellPadding: 2,
    valign: 'middle',  // Alineación central
    overflow: 'linebreak',
    lineWidth: 0.5,
    lineColor: [0, 0, 0],
  },
  columnStyles: {
    0: { cellWidth: 62, minCellHeight: 10 }, // Primera columna
    1: { cellWidth: 50, minCellHeight: 10 }, // Segunda columna
    2: { cellWidth: 70, minCellHeight: 10 }, // Tercera columna
  },
  // Función para personalizar el padding y el contenido
  didDrawCell: (data: any) => {
    const { rowIndex, cell } = data;

    // Ajustar el padding dependiendo del tipo de fila (título vs contenido)
    if (rowIndex === 0) {
      data.cell.styles.cellPadding = 5; // Padding mayor para la fila de título
    } else {
      data.cell.styles.cellPadding = 2;  // Padding regular para las filas normales
    }

    // Ajuste de posiciones y contenido
    if (cell.raw && typeof cell.raw === 'object' && 'content' in cell.raw) {
      const text = cell.raw.content;

      if (typeof text === 'string' && text.includes(":")) {
        const [boldText, ...normalTextParts] = text.split(":");
        const normalText = normalTextParts.join(":").trim();
        const { x, y, width, height } = cell;

        // Limpiar la celda original
        pdf.setFillColor(255, 255, 255);
        pdf.rect(x, y, width, height, 'F');

        // Ajuste de posiciones
        let textOffsetX = x + 2;
        let textOffsetY = y + 5;
        let lineHeight = 5;

        // Procesar líneas separadas por salto de línea
        const boldLines = boldText.split("\n");
        const normalLines = normalText.split("\n");

        // Procesar solo la primera línea del texto en negrita con el ":"
        pdf.setFont("helvetica", "bold");
        pdf.text(boldText + ":", textOffsetX, textOffsetY);

        // Aumentar el offset Y para el texto normal
        textOffsetY += lineHeight;

        // Procesar las líneas de texto normal
        pdf.setFont("helvetica", "normal");
        let normalOffsetY = textOffsetY;
        normalLines.forEach((normalLine: string, i: number) => {
          pdf.text(normalLine, textOffsetX, normalOffsetY); // Alinear el texto normal
          normalOffsetY += lineHeight;
        });

        // Ajustar la posición final para que no haya espacio extra en la parte inferior
        textOffsetY = normalOffsetY;
      }
    }
  },
});
// Configuración de firmas
pdf.setFontSize(10);
pdf.setFont("helvetica", "bold");

// Primera fila de firmas
pdf.text("Firma de quien recibió la orden", 20, finalY);
pdf.text("Firma del funcionario a cargo", 80, finalY);
pdf.text("Firma de testigo", 140, finalY);

// Segunda fila de firmas
pdf.text("Firma de testigo", 20, finalY + 20);
pdf.text("Firma de otro interveniente", 80, finalY + 20);
pdf.text("Firma de otro interveniente", 140, finalY + 20);
  pdf.output('dataurlnewwindow');
};
reader.readAsDataURL(blob);
})    
}

  // EN LA CIUDAD DE S. S. DE JUJUY, PROVINCIA DE JUJUY, REPUBLICA ARGENTINA,
  
  ngAfterViewInit(): void {
    // Inicializar el mapa cuando se muestra el modal
    const modalElement = document.getElementById('modalMapa');
    if (modalElement) {
      modalElement.addEventListener('shown.bs.modal', () => {
        this.initMap();
      });
    }
  }
  abrirModalMapa(): void {
    const modalElement = document.getElementById('modalMapa');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  initMap(): void {
    if (this.map) {
      this.map.remove();
    }
  
    try {
      this.map = L.map('mapaOperativo').setView([-24.18769889437684, -65.29709953331486], 8);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
  
      // Usamos `filteredNovedades` en lugar de `novedades`
      if (this.filteredNovedades && this.filteredNovedades.length > 0) {
        this.filteredNovedades.forEach(novedad => {
          if (novedad.latitud && novedad.longitud) {
            const lat = Number(novedad.latitud);
            const lng = Number(novedad.longitud);
  
            if (!isNaN(lat) && !isNaN(lng)) {  
              const codigo = novedad.codigo as CodigoNovedad;
              const icono = this.getDefaultIcon(codigo); // Usa los puntos de color
  
              L.marker([lat, lng], { icon: icono }).addTo(this.map)
                .bindPopup(`<b>${novedad.descripcion_hecho}</b><br>Fecha: ${novedad.fecha}`);
            } else {
              console.warn("Latitud o longitud inválida:", novedad);
            }
          }
        });
      } else {
        console.warn("No hay novedades disponibles para mostrar en el mapa.");
      }
  
    } catch (error) {
      console.error("Error al inicializar el mapa:", error);
    }
  }
  

  
  // Función para obtener un icono predeterminado de Leaflet en caso de fallo
  getDefaultIcon(codigo: CodigoNovedad): L.DivIcon {
    let color;
    switch (codigo) {
      case 'R': color = 'red'; break;
      case 'A': color = 'gold'; break;
      case 'V': color = 'green'; break;
   
    }
  
    return L.divIcon({
      className: "custom-marker",
      html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid black;"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -10]
    });
  }

  cargarMapa(lat: number, lng: number): void {
    if (this.map) {
      this.map.setView([lat, lng], 13);
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker([lat, lng]).addTo(this.map);
    }
  }


descargarImagen() {
  const mapa = document.getElementById('mapaOperativo');

  if (mapa && this.map) {
    const zoomActual = this.map.getZoom();

    // Mostrar loader
    Swal.fire({
      title: 'Cargando mapa...',
      text: 'Por favor espera mientras se genera la imagen.',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Redibujar el mapa antes de capturar
    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.TileLayer) {
        layer.redraw();
      }
    });

    setTimeout(() => {
      html2canvas(mapa, { useCORS: true, scale: 4 }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'mapa-alta-resolucion.png';
        link.click();

        // Restaurar el zoom original
        this.map.setZoom(zoomActual);
        Swal.close();
      }).catch(error => {
        console.error("Error al capturar el mapa:", error);
        Swal.fire('Error', 'No se pudo capturar el mapa.', 'error');
      });
    }, 800); // Puedes aumentar el tiempo si los tiles tardan en cargar
  }
}
  filtrarPorFecha(): void {
    const fechaDesdeInput = (document.getElementById('fechaDesde') as HTMLInputElement).value;
    const fechaHastaInput = (document.getElementById('fechaHasta') as HTMLInputElement).value;
  
    if (fechaDesdeInput || fechaHastaInput) {
      const fechaDesde = fechaDesdeInput ? new Date(fechaDesdeInput) : null;
      const fechaHasta = fechaHastaInput ? new Date(fechaHastaInput) : null;
  
      this.novedadesFiltradas = this.novedades.filter(novedad => {
        const novedadFecha = new Date(novedad.fecha);
        
        return (
          (!fechaDesde || novedadFecha >= fechaDesde) &&
          (!fechaHasta || novedadFecha <= fechaHasta)
        );
      });
    } else {
      // Si no se selecciona ninguna fecha, mostrar todas las novedades
      this.novedadesFiltradas = [...this.novedades];
    }
  
    // Actualizar el mapa con las novedades filtradas
    this.actualizarMapa();
  }
  

actualizarMapa(): void {
  if (this.map) {
    // Limpiar los marcadores existentes
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });

    // Agregar los nuevos marcadores filtrados
    this.novedadesFiltradas.forEach(novedad => {
      if (novedad.latitud && novedad.longitud) {
        L.marker([+novedad.latitud, +novedad.longitud]).addTo(this.map)
          .bindPopup(`<b>${novedad.descripcion_hecho}</b><br>Fecha: ${novedad.fecha}`);
      }
    });
  }
}

  cerrarModal(modalId: string): void {
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      }
    }
  filtrarporLegajo(){

  }
   cargarDatosPersonalPorId(novedad: Novedades): void {
    this.personalService.getPersonal(novedad.personal_autor_id.toString()).subscribe(
      (personal: Personal) => {
        novedad.personalAutor = personal; // Almacenar los datos del personal autor en la novedad al final ni se quie es lo que tien esta wea supuestamente ahay intenerte y esta wea noi surve
        console.log('Personal autor encontrado:', personal);
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener los datos del personal:', error.message);
      }
    );
  }

  getColorClass(codigo: string): string {
    switch (codigo) {
      case 'R':
        return 'rojo';
      case 'A':
        return 'amarillo';
      case 'V':
        return 'verde';
      default:
        return '';
    }
  }
  
  navigateToUpdateForm(id: string): void {
    this.router.navigate(['/tableros/novedades', id]);
  }
  
  deleteNovedad(id: string): void {
      this.eliminarArchivosDeNovedad(id);
      this.borrarElementosPorNovedad(Number(id)); // <-- Aquí llamas al método

    this.novedadesService.deleteNovedad(id).subscribe(
      res => {
        console.log('Novedad eliminada', res);
this.getNovedadesByLegajoByToday();
        Swal.fire('Éxito', 'Novedad eliminada con éxito', 'success');
      },
      error => {
        console.error('Error al eliminar novedad', error);
        Swal.fire('Error', 'Error al eliminar la novedad', 'error');
      }
    );
  }

    borrarElementosPorNovedad(novedadId: number): void {
    this.novedadElementoService.borrarElementosByNovedad(novedadId).subscribe(
      res => {
        console.log('Elementos de la novedad eliminados', novedadId);
      },
      error => {
        console.error('Error al eliminar elementos de la novedad', error);
      }
    );
  }
    // Elimina todos los archivos asociados a la novedad
  eliminarArchivosDeNovedad(novedadId: string): void {
    this.archivoNovedadService.eliminarArchivosByNovedad(Number(novedadId)).subscribe(
      res => {
        console.log('Archivos eliminados para la novedad', novedadId);
      },
      error => {
        console.error('Error al eliminar archivos de la novedad', error);
      }
    );
  }
 
  isEditable(novedad: Novedades): boolean {
    if (this.userInfo.perfil !== 'usuario') {
      return true;
    }
    const novedadFecha = new Date(novedad.fecha + 'T' + novedad.horario);
    const now = new Date();
    const diff = now.getTime() - novedadFecha.getTime();
    const hours = diff / (1000 * 60 * 60);
    return hours <= 24;
  }
 
    
    setColorFilter(event: Event): void {
      const target = event.target as HTMLSelectElement;
      this.colorFilter = target.value;
      this.filtrarNovedadesC(); 
    }
    
    filtrarNovedadesC(): void {

    
      if (this.novedades && this.novedades.length > 0) { // Asegurar que hay datos
        if (this.colorFilter) {
          this.filteredNovedades = this.novedades.filter(novedad => {
            console.log(`Comparando ${novedad.codigo} con ${this.colorFilter}`);
            return String(novedad.codigo) === String(this.colorFilter);
          });
        } else {
          this.filteredNovedades = [...this.novedades]; // Si no hay filtro, mostrar todo
        }
      }
    }

    exportToExcel(): void {
      console.log('exportToExcel');
      const exportData: ExportRow[] = [];
  
      const processNovedad = (novedad: Novedades) => {
        console.log('Processing novedad:', novedad.id);
const elementoSecuestrado = (novedad.elemento_secuestrado ?? []).map((elem, index) => ({
  [`elemento_secuestrado_${index + 1}_elemento`]: elem?.elemento ?? '',
  [`elemento_secuestrado_${index + 1}_descripcion`]: elem?.descripcion ?? ''
})).reduce((acc, curr) => ({ ...acc, ...curr }), {});

const bienRecuperadoNo = (novedad.bien_recuperado_no ?? []).map((elem, index) => ({
  [`bien_recuperado_no_${index + 1}_elemento`]: elem?.elemento ?? '',
  [`bien_recuperado_no_${index + 1}_descripcion`]: elem?.descripcion ?? ''
})).reduce((acc, curr) => ({ ...acc, ...curr }), {});

const bienRecuperado = (novedad.bien_recuperado ?? []).map((elem, index) => ({
  [`bien_recuperado_${index + 1}_elemento`]: elem?.elemento ?? '',
  [`bien_recuperado_${index + 1}_descripcion`]: elem?.descripcion ?? ''
})).reduce((acc, curr) => ({ ...acc, ...curr }), {});

  
        return this.novedadesPersonaService.getPersonasByNovedadId(novedad.id).pipe(
          switchMap(personas => {
            console.log('Personas:', personas);
            if (personas.length === 0) {
              return of([]);
            }
            const personasObservables = personas.map(persona => 
              this.estadoService.getEstadoByNovedadAndPersona(novedad.id, persona.id).pipe(
                map((estado: Estado) => {
                  persona.estado = estado.estado;
                  return persona;
                })
              )
            );
  
            return forkJoin(personasObservables);
          }),
          map(personasConEstado => {
            const victimas: string[] = [];
            const victimarios: string[] = [];
            const protagonistas: string[] = [];
  
            personasConEstado.forEach(persona => {
              if (persona.estado === 'victima') {
                victimas.push(`${persona.nombre} ${persona.apellido}`);
              } else if (persona.estado === 'victimario') {
                victimarios.push(`${persona.nombre} ${persona.apellido}`);
              } else if (persona.estado === 'protagonista') {
                protagonistas.push(`${persona.nombre} ${persona.apellido}`);
              }
            });
  
            const exportRow: ExportRow = {
              id: novedad.id,
              fecha: novedad.fecha,
              horario: novedad.horario,
              unidad_regional_nombre: novedad.unidad_regional_nombre,
              cuadrante_nombre: novedad.cuadrante_nombre,
              lugar_hecho: novedad.lugar_hecho,
              latitud: novedad.latitud,
              longitud: novedad.longitud,
              origen_novedad: novedad.origen_novedad,
              horaIncidencia: novedad.horaIncidencia,
              N_incidencia: novedad.n_incidencia,
              unidad_interviniente: novedad.unidad_interviniente,
              tipo_hecho: novedad.tipo_hecho,
              subtipohecho: novedad.subtipo_hecho,
              descripcionhecho: novedad.descripcion_hecho,
              modus_operandi: novedad.modus_operandi_nombre,
              descripcion: novedad.descripcion,
              tipo_lugar: novedad.tipo_lugar,
              personal_autor_nombre: novedad.personal_autor_nombre,
              observaciones: novedad.observaciones,
              unidad_actuante: novedad.unidad_actuante,
              oficial_cargo_nombre: "novedad.oficial_cargo_id",
              victimas: JSON.stringify(victimas),
              victimarios: JSON.stringify(victimarios),
              protagonistas: JSON.stringify(protagonistas),
              ...elementoSecuestrado,
              ...bienRecuperadoNo,
              ...bienRecuperado
            };
  
            exportData.push(exportRow);
            return exportRow;
          })
        );
      };
  
      const observables = this.novedades.map(novedad => processNovedad(novedad));
  
      forkJoin(observables).subscribe(() => {
        console.log('Exporting data:', exportData);
        this.excelExportService.exportAsExcelFile(exportData, 'Novedades');
      }, error => {
        console.error('Error during export:', error);
      });
    }

    
  }
  