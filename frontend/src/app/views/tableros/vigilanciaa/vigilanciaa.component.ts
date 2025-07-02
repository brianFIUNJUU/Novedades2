import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as L from 'leaflet';
import Swal from 'sweetalert2';
import { VigilanciaService } from '../../../services/vigilancia.service';
import { DependenciaService } from '../../../services/dependencia.service';
import { DepartamentoService } from '../../../services/departamento.service';
import { LocalidadService } from '../../../services/localidad.service';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { Vigilancia } from '../../../models/vigilancia';
import { Dependencia } from '../../../models/dependencia';
import { Departamento } from '../../../models/departamento';
import { Localidad } from '../../../models/localidad';
import { UnidadRegional } from '../../../models/unidad_regional';

@Component({
  selector: 'app-vigilancia',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './vigilanciaa.component.html',
  styleUrls: ['./vigilanciaa.component.scss']
})

export class VigilanciaaComponent implements OnInit {
  vigilanciaForm: FormGroup;
  selectedOficioFile: File | string | null = null;
  selectedFotoPersonaFile: File | string | null = null;
  archivoOficioActual: string | null = null; // Agrega esta propiedad
  archivoFotoPersonaActual: string | null = null; // Agrega esta propiedad
  vigilancias: Vigilancia[] = [];
  dependencias: Dependencia[] = [];
  departamentos: Departamento[] = [];
  localidades: Localidad[] = [];
  unidadRegionales: UnidadRegional[] = [];
  mensajeError: string = '';
  map!: L.Map;
  marker: L.Marker | undefined;
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private vigilanciaService: VigilanciaService,
    private dependenciaService: DependenciaService,
    private departamentoService: DepartamentoService,
    private localidadService: LocalidadService,
    private unidadRegionalService: UnidadRegionalService,
    private router: Router,
    public domSanitizer: DomSanitizer
  ) {
    this.vigilanciaForm = this.fb.group({
      id: [null],
      unidad_solicitante: ['', Validators.required],
      detalle_unidad_solicitante: [''],
      cargo_solicitante: ['', Validators.required],
      nro_oficio: [''],
      expediente: [''],
      caratula: [''],
      unidad_regional_id: ['', Validators.required],
      juridiccion_id: [''],
      motivo_custodia: [''],
      modalidad_custodia: [''],
      observaciones: [''],
      fecha_inicio: ['', Validators.required],
      vigencia: [''],
      fecha_limite: [''],
      direccion_vigilancia: [''],
      departamento_id: [''],
      localidad_id: [''],
      latitud_vigilancia: [''],
      longitud_vigilancia: [''],
      activo: [false],
      situacion_objetivo: [''],
      recorrido_inicio: [''],
      recorrido_final: [''],
      unidad_operativa_manana: [''],
      unidad_operativa_tarde: [''],
      unidad_operativa_noche: [''],
      oficioUrl: [''],
      foto_personaUrl: ['']
    });
  }

  ngOnInit(): void {
    this.cargarDepartamentos();
    this.cargarUnidadRegionales();
    this.cargarVigilancias();
    this.initMap();
  }

  cargarDependencias(unidadRegionalId: number): void {
    this.dependenciaService.getDependenciasByUnidadRegional(unidadRegionalId).subscribe(
      data => {
        this.dependencias = data;
      },
      error => {
        console.error('Error al obtener las dependencias', error);
      }
    );
  }//input pensa

  cargarDepartamentos(): void {
    this.departamentoService.getDepartamentos().subscribe(
      (data: Departamento[]) => {
        this.departamentos = data;
      },
      (error) => {
        this.mensajeError = 'Error al cargar departamentos';
      }
    );
  }

  cargarLocalidades(departamentoId: number): void {
    this.localidadService.getLocalidadesByDepartamento(departamentoId.toString()).subscribe(
      (data: Localidad[]) => {
        this.localidades = data;
      },
      (error) => {
        this.mensajeError = 'Error al cargar localidades';
      }
    );
  }

  cargarUnidadRegionales(): void {
    this.unidadRegionalService.getUnidadesRegionales().subscribe(
      (data: UnidadRegional[]) => {
        this.unidadRegionales = data;
      },
      (error) => {
        this.mensajeError = 'Error al cargar unidades regionales';
      }
    );
  }

  cargarVigilancias(): void {
    this.vigilanciaService.getVigilancias().subscribe(
      (data: Vigilancia[]) => {
        console.log('Datos recibidos:', data); // Agrega esto para depurar
        this.vigilancias = data;

        // Asignar las URLs de los archivos directamente
        this.vigilancias.forEach(vigilancia => {
          if (vigilancia.oficio) {
            vigilancia.oficioUrl = `http://localhost:3000/uploads/${vigilancia.oficio}`;
          }
          if (vigilancia.foto_persona) {
            vigilancia.foto_personaUrl = `http://localhost:3000/uploads/${vigilancia.foto_persona}`;
          }
        });
      },
      (error) => {
        this.mensajeError = 'Error al cargar vigilancias';
        console.error('Error al cargar vigilancias:', error);
      }
    );
  }

  initMap(): void {
    // Inicializa el mapa centrado en una ubicación predeterminada
    this.map = L.map('map').setView([-24.18769889437684, -65.29709953331486], 10);

    // Agregar la capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Manejar el evento de clic para obtener latitud y longitud
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.vigilanciaForm.patchValue({
        latitud_vigilancia: e.latlng.lat.toString(),
        longitud_vigilancia: e.latlng.lng.toString()
      });

      // Verifica si map y marker están inicializados
      if (this.map && this.marker) {
        this.map.removeLayer(this.marker);
      }

      // Agregar el marcador en la posición seleccionada
      this.marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    });
  }

  mostrarUbicacion(): void {
    const lat = parseFloat(this.vigilanciaForm.get('latitud_vigilancia')?.value);
    const lng = parseFloat(this.vigilanciaForm.get('longitud_vigilancia')?.value);

    if (!isNaN(lat) && !isNaN(lng)) {
      // Verifica si map y marker están inicializados
      if (this.map && this.marker) {
        this.map.removeLayer(this.marker);
      }

      // Centra el mapa en la ubicación introducida
      this.map.setView([lat, lng], 13);
      this.marker = L.marker([lat, lng]).addTo(this.map);
    }
  }

  actualizarMapaDesdeFormulario(): void {
    const lat = parseFloat(this.vigilanciaForm.get('latitud_vigilancia')?.value);
    const lng = parseFloat(this.vigilanciaForm.get('longitud_vigilancia')?.value);

    if (!isNaN(lat) && !isNaN(lng)) {
      this.map.setView([lat, lng], 13);

      if (this.marker) {
        this.map.removeLayer(this.marker);
      }

      this.marker = L.marker([lat, lng]).addTo(this.map);
    }
  }

  onFileSelectedOficio(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedOficioFile = file;
      this.archivoOficioActual = file.name; // Actualizar la propiedad
    }
  }

  onFileSelectedFotoPersona(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFotoPersonaFile = file;
      this.archivoFotoPersonaActual = file.name; // Actualizar la propiedad
    } else if (this.archivoFotoPersonaActual) {
      this.selectedFotoPersonaFile = 'http://localhost:3000/uploads/' + this.archivoFotoPersonaActual; // Mantener el archivo actual si no se selecciona uno nuevo
    }
  }

  eliminarArchivoOficio(): void {
    this.selectedOficioFile = null;
    this.vigilanciaForm.patchValue({ oficio: '' });
    this.archivoOficioActual = null; // Limpiar la propiedad
  }

  
  eliminarArchivoFotoPersona(): void {
    this.selectedFotoPersonaFile = null;
    this.vigilanciaForm.patchValue({ foto_persona: '' });
    this.archivoFotoPersonaActual = null; // Limpiar la propiedad
  }

  guardarVigilancia(): void {
    if (this.vigilanciaForm.invalid) {
      this.mensajeError = 'Por favor, complete todos los campos obligatorios. ';
      return;
    }

    const formData = new FormData();
    Object.keys(this.vigilanciaForm.controls).forEach(key => {
      formData.append(key, this.vigilanciaForm.get(key)?.value);
    });

    if (this.selectedOficioFile) {
      formData.append('oficio', this.selectedOficioFile);
    } else if (this.archivoOficioActual) {
      formData.append('oficio', this.archivoOficioActual);
    }

    if (this.selectedFotoPersonaFile) {
      formData.append('foto_persona', this.selectedFotoPersonaFile);
    } else if (this.archivoFotoPersonaActual) {
      formData.append('foto_persona', this.archivoFotoPersonaActual);
    }

    if (this.editMode) {
      // Actualizar vigilancia existente 
      this.vigilanciaService.editVigilancia(this.vigilanciaForm.get('id')?.value, formData).subscribe(
        () => {
          Swal.fire('Éxito', 'Vigilancia actualizada con éxito', 'success');
          this.resetForm();
          this.cargarVigilancias(); // Recargar la lista después de guardar
        },
        (error) => {
          this.mensajeError = 'Error al actualizar la vigilancia.';
          console.error('Error al actualizar la vigilancia:', error);
        }
      );
    } else {
      // Crear nueva vigilancia
      this.vigilanciaService.createVigilancia(formData).subscribe(
        () => {
          Swal.fire('Éxito', 'Vigilancia creada con éxito', 'success');
          this.resetForm();
          this.cargarVigilancias(); // Recargar la lista después de guardar
        },
        (error) => {
          this.mensajeError = 'Error al crear la vigilancia.';
          console.error('Error al crear la vigilancia:', error);
        }
      );
    }
  }

  editarVigilancia(vigilancia: Vigilancia): void {
    this.editMode = true;
    this.vigilanciaService.getVigilancia(vigilancia.id.toString()).subscribe(
      (data: Vigilancia) => {
        this.vigilanciaForm.patchValue(data);
        this.mostrarUbicacion();
        this.cargarLocalidades(data.departamento_id);

        // Asignar los archivos actuales
        // 
        if (data.oficio) {
          this.archivoOficioActual = data.oficio; // Actualizar la propiedad
          this.selectedOficioFile = data.oficio; // Asignar el valor a selectedOficioFile
        }
        if (data.foto_persona) {
          this.archivoFotoPersonaActual = data.foto_persona; // Actualizar la propiedad
          this.selectedFotoPersonaFile = data.foto_persona; // Asignar el valor a selectedFotoPersonaFile
        }
      },
      (error) => {
        this.mensajeError = 'Error al cargar la vigilancia.';
        console.error('Error al cargar la vigilancia:', error);
      }
    );
  }
////de seguro vos crees que no n
  eliminarVigilancia(id: number): void {
    Swal.fire({

      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.vigilanciaService.deleteVigilancia(id.toString()).subscribe(
          () => {
            Swal.fire('Eliminado', 'La vigilancia ha sido eliminada', 'success');
            this.cargarVigilancias(); // Recargar la lista después de eliminar
          },
          (error) => {
            this.mensajeError = 'Error al eliminar la vigilancia.';
            console.error('Error al eliminar la vigilancia:', error);
          }
        );
      }
    });
  }

  resetForm(): void {
    this.vigilanciaForm.reset();
    this.selectedOficioFile = null;
    this.selectedFotoPersonaFile = null;
    this.archivoOficioActual = null; // Limpiar la propiedad
    this.archivoFotoPersonaActual = null; // Limpiar la propiedad
    this.mensajeError = '';
    this.editMode = false;
    if (this.marker) {
      this.map.removeLayer(this.marker);
      this.marker = undefined;
    }
  }

  cancelarActualizacion(): void {
    this.resetForm();
  }
}