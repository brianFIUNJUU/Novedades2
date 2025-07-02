
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import * as L from 'leaflet';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'bootstrap';
import { forkJoin } from 'rxjs';
import { Cuadrante } from '../../../models/cuadrante';
import { CuadranteService } from '../../../services/cuadrante.service';
import { UnidadRegional } from '../../../models/unidad_regional';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { OperativoService } from '../../../services/operativo.services';
import { Operativos } from '../../../models/operativos';
import { OperativoCuadranteService } from '../../../services/operativo_cuadrante.services';
import { OperativoPersonalService } from '../../../services/operativo_personal.services';
import { PersonalService } from '../../../services/personal.service';
import { Personal } from '../../../models/personal';
import { OperativoPersonalTemp } from '../../../models/OperativoPersonalTemp';
L.Icon.Default.imagePath = 'assets/leaflet/';

@Component({
  selector: 'app-distribucionform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './distribucionform.component.html',
  styleUrl: './distribucionform.component.scss'
})
export class DistribucionformComponent implements AfterViewInit {
    personalExistenteModal: any[] = [];
  operativos: Operativos[] = [];
  operativo: Operativos = new Operativos();
  cuadrantesTemporales: any[] = []
  cuadrantes: Cuadrante[] = [];
  selectedLat: number | null = null;
selectedLng: number | null = null;
asistenciaPersonalModal: string = '';
observacionesPersonalModal: string = '';
  unidadRegionales: UnidadRegional[] = [];
    cuadrantesPorIndice: { [index: number]: Cuadrante[] } = {};
    cuadrantesForm: any[] = [
    {
      unidad_regional_id: '',
      unidad_regional_nombre: '',      // <-- agrega esto
      cuadrante_id: '',
      cuadrante_nombre: '',            // <-- agrega esto
      legajoJefe: '',
      legajoCuadrante: '',
      oficialCargo: null,
      jefeCuadrante: null,
      jefeCuadranteId: null,
      jefe_cuadrante_nombre: '',       // <-- agrega esto
      oficialCargoId: null,
      jefe_supervisor_nombre: '',      // <-- agrega esto
      cant_total_personal: 0,
      cant_manos_libres: 0,
      cant_upcar: 0,
      cant_contravencional: 0,
      cant_dinamicos: 0,
      cant_moviles: 0,
      mensajeError: ''
    }
  ];
  personalDisponible: Personal[] = [];
  personalSeleccionado: Personal[] = [];
  // Variables auxiliares
  mensajeError: string = '';
  mensajeError2: string = '';
  map!: L.Map;
  marker: L.Marker | undefined;
  grupoActual: string = '';
  cuadranteActualIndex: number = -1;
  legajoPersonalModal: string = '';
  personalEncontradoModal: Personal | null = null;
  mensajeErrorPersonalModal: string = '';
personalPendiente: OperativoPersonalTemp[] = [];
    personalExistente: any[] = [];
        editandoPersonalExistenteId: number | null = null;
  editandoPersonalPendienteIdx: number | null = null;

  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  constructor(
    private operativoService: OperativoService,
    private cuadranteService: CuadranteService,
    private operativoCuadranteService: OperativoCuadranteService,
    private operativoPersonalService: OperativoPersonalService,
    private personalService: PersonalService,
    private unidadRegionalService: UnidadRegionalService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const id = params['id'];
    if (id) {
      // Cambiar getOperativo por getOperativoCompleto
      this.operativoService.getOperativoCompleto(+id).subscribe({
        next: (data) => {
          this.operativo = data;
          this.cuadrantesForm = [];

          if (data.OperativoCuadrantes && data.OperativoCuadrantes.length) {
            data.OperativoCuadrantes.forEach((ocu: any, i: number) => {
              this.cuadrantesForm.push({
                id: ocu.id,
                unidad_regional_id: ocu.unidad_regional_id?.toString() || '',
                unidad_regional_nombre: ocu.unidadRegional ? ocu.unidadRegional.unidad_regional : '',
                cuadrante_id: ocu.cuadrante_id?.toString() || '',
                cuadrante_nombre: ocu.cuadrante ? ocu.cuadrante.nombre : '',
                legajoJefe: ocu.jefeCuadrante ? ocu.jefeCuadrante.legajo : '',
                legajoCuadrante: ocu.jefeSupervisor ? ocu.jefeSupervisor.legajo : '',
                oficialCargo: ocu.jefeSupervisor || null,
                jefeCuadrante: ocu.jefeCuadrante || null,
                jefeCuadranteId: ocu.jefe_cuadrante_id || null,
                oficialCargoId: ocu.jefe_supervisor_id || null,
                cant_total_personal: ocu.cant_total_personal || 0,
                cant_manos_libres: ocu.cant_manos_libres || 0,
                cant_upcar: ocu.cant_upcar || 0,
                cant_contravencional: ocu.cant_contravencional || 0,
                cant_dinamicos: ocu.cant_dinamicos || 0,
                cant_moviles: ocu.cant_moviles || 0,
                mensajeError: ''
                
              });
               // ...dentro del forEach de OperativoCuadrantes...
              if (ocu.unidad_regional_id) {
                this.cuadranteService.getCuadrantesByUnidadRegional(Number(ocu.unidad_regional_id)).subscribe({
                  next: (cuadrantes) => {
                    this.cuadrantesPorIndice[i] = cuadrantes;
                  }
                });
              }

             // Dentro del forEach de OperativoCuadrantes
                     const grupos = ['manos_libres', 'upcar', 'contravencional', 'grupo_dinamico', 'unidad_movil'];
            grupos.forEach(grupo => {
              this.operativoPersonalService.getByGrupoByCuadranteByOperativo(data.id, ocu.id, grupo).subscribe({
                next: (personalGrupo) => {
                  personalGrupo.forEach((p: any) => {
                    if (!this.personalExistente.some(pe => pe.id === p.id)) {
                      this.personalExistente.push({
                        id: p.id,
                        cuadranteIndex: i,
                        grupo: grupo, // aquí el grupo viene del forEach
                        personal_id: p.personal_id,
                        asistencia: p.asistencia,
                        observaciones: p.observaciones,
                        latitud: p.latitud,
                        longitud: p.longitud,
                        personal_legajo: p.personal_legajo,
                        personal_nombre: p.personal_nombre,
                        personal_jerarquia: p.personal_jerarquia
                      });
                    }
                    if (p.Personal && !this.personalDisponible.find(per => per.id === p.Personal.id)) {
                      this.personalDisponible.push(p.Personal);
                    }
                  });
                }
              });
            });
            });
          } else {
            // Si no hay cuadrantes, agregar uno vacío para iniciar el formulario
            this.agregarCuadrante();
          }
        },
        error: (err) => {
          console.error('Error al obtener el operativo:', err);
          Swal.fire('Error', 'No se pudo cargar el operativo.', 'error');
        }
      });
    } else {
      // Código para nuevo operativo (sin id)
      const ahora = new Date();
      const fechaActual = ahora.toISOString().split('T')[0];
      this.operativo.fecha_desde = fechaActual;
      this.operativo.fecha_hasta = fechaActual;

      const horas = ahora.getHours().toString().padStart(2, '0');
      const minutos = ahora.getMinutes().toString().padStart(2, '0');
      this.operativo.horario_desde = `${horas}:${minutos}`;

      const mas8 = new Date(ahora.getTime() + 8 * 60 * 60 * 1000);
      const horasHasta = mas8.getHours().toString().padStart(2, '0');
      const minutosHasta = mas8.getMinutes().toString().padStart(2, '0');
      this.operativo.horario_hasta = `${horasHasta}:${minutosHasta}`;

      this.cuadrantesForm = [];
      this.agregarCuadrante();
    }
  });

  // Cargar unidades regionales para cada cuadrante (opcional, si lo necesitas)
  this.cuadrantesForm.forEach(cuadrante => {
    this.cargarUnidadesRegionales(cuadrante);
  });
}
  ngAfterViewInit(): void {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      modalElement.addEventListener('shown.bs.modal', () => {
        this.onModalShown();
      });
    }
  }   
   eliminarCuadrante(index: number): void {
    if (this.cuadrantesForm.length <= 1) return;
  
    const cuadrante = this.cuadrantesForm[index];
  
    // Si tiene id, es existente y hay que eliminarlo en backend
    if (cuadrante.id) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará el cuadrante y su personal asociado.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.operativoCuadranteService.delete(cuadrante.id).subscribe({
            next: () => {
              this.cuadrantesForm.splice(index, 1);
              delete this.cuadrantesPorIndice[index];
              Swal.fire('Eliminado', 'El cuadrante fue eliminado correctamente.', 'success');
            },
            error: () => {
              Swal.fire('Error', 'No se pudo eliminar el cuadrante.', 'error');
            }
          });
        }
      });
    } else {
      // Si no tiene id, solo lo quitas del array local
      this.cuadrantesForm.splice(index, 1);
      delete this.cuadrantesPorIndice[index];
    }
  }
    onUnidadRegionalChange(cuadrante: any, index: number): void {
    const unidad = this.unidadRegionales.find(u => String(u.id) === cuadrante.unidad_regional_id);
    cuadrante.unidad_regional_nombre = unidad ? unidad.unidad_regional : '';
    // Recarga cuadrantes disponibles y limpia selección de cuadrante
    this.cargarCuadrantes(cuadrante.unidad_regional_id, cuadrante, index);
    cuadrante.cuadrante_id = '';
    cuadrante.cuadrante_nombre = '';
  }
  
  onCuadranteChange(cuadrante: any, index: number): void {
    const cuadranteObj = this.cuadrantesPorIndice[index]?.find(c => Number(c.id) === Number(cuadrante.cuadrante_id));
    cuadrante.cuadrante_nombre = cuadranteObj ? cuadranteObj.nombre : '';
  }
  cargarUnidadesRegionales(cuadrante: any): void {
    this.unidadRegionalService.getUnidadesRegionales().subscribe({
      next: (data) => {
        this.unidadRegionales = data;
        const unidad = this.unidadRegionales.find(u => String(u.id) === cuadrante.unidad_regional_id);
        cuadrante.unidad_regional_nombre = unidad ? unidad.unidad_regional : '';
      },
      error: (error) => {
        console.error('Error al cargar unidades regionales', error);
      }
    });
  }
  
    cargarCuadrantes(unidadRegionalId: string, cuadrante: any, index: number): void {
    if (!unidadRegionalId) {
      this.cuadrantesPorIndice[index] = [];
      return;
    }
    this.cuadranteService.getCuadrantesByUnidadRegional(Number(unidadRegionalId)).subscribe({
      next: (data) => {
        this.cuadrantesPorIndice[index] = data;
        const cuadranteObj = data.find(c => Number(c.id) === Number(cuadrante.cuadrante_id));
        cuadrante.cuadrante_nombre = cuadranteObj ? cuadranteObj.nombre : '';
      },
      error: (error) => {
        console.error('Error al cargar cuadrantes', error);
      }
    });
  }

  agregarCuadrante(): void {
    this.cuadrantesForm.push({
      unidad_regional_id: '',
      unidad_regional_nombre: '', // <-- agrega esto
      cuadrante_id: '',
      cuadrante_nombre: '', // <-- agrega esto
      legajoJefe: '',
      legajoCuadrante: '',
      oficialCargo: null,
      jefeCuadrante: null,
      cant_total_personal: 0,
      cant_manos_libres: 0,
      cant_upcar: 0,
      cant_contravencional: 0,
      cant_dinamicos: 0,
      cant_moviles: 0,
      mensajeError: ''
    });
  }

  // Buscar jefe supervisor por legajo, recibe el legajo y el índice del cuadrante
  buscarOficialCargoPorLegajo(legajo: string, index: number): void {
    if (!legajo) {
      this.cuadrantesForm[index].oficialCargo = null;
      this.cuadrantesForm[index].mensajeError = 'Debe ingresar un legajo';
      return;
    }
    this.personalService.getPersonalByLegajo(legajo).subscribe({
      next: (personal) => {
        if (personal) {
          // Asignar objeto completo para mostrar
          this.cuadrantesForm[index].oficialCargo = personal;
          // Asignar explícitamente solo el id (puedes usar personal._id o personal.id según tu modelo)
          this.cuadrantesForm[index].oficialCargoId = personal.id; 

          this.cuadrantesForm[index].mensajeError = '';
        } else {
          this.cuadrantesForm[index].oficialCargo = null;
          this.cuadrantesForm[index].oficialCargoId = null;
          this.cuadrantesForm[index].mensajeError = 'No se encontró personal con ese legajo';
        }
      },
      error: (err) => {
        console.error('Error al buscar personal por legajo', err);
        this.cuadrantesForm[index].oficialCargo = null;
        this.cuadrantesForm[index].oficialCargoId = null;
        this.cuadrantesForm[index].mensajeError = 'Error al buscar personal';
      }
    });

  }

  // Buscar jefe de cuadrante por legajo
  buscarJefeCuadrantePorLegajo(legajo: string, index: number): void {
    if (!legajo) {
      this.cuadrantesForm[index].jefeCuadrante = null;
      this.cuadrantesForm[index].mensajeError2 = 'Debe ingresar un legajo';
      return;
    }

        this.personalService.getPersonalByLegajo(legajo).subscribe({
      next: (personal) => {
        if (personal) {
          this.cuadrantesForm[index].jefeCuadrante = personal;
          this.cuadrantesForm[index].jefeCuadranteId = personal.id;  // <-- acá asignas el id explícitamente
          this.cuadrantesForm[index].mensajeError2 = '';
        } else {
          this.cuadrantesForm[index].jefeCuadrante = null;
          this.cuadrantesForm[index].jefeCuadranteId = null;
          this.cuadrantesForm[index].mensajeError2 = 'No se encontró personal con ese legajo';
        }
      },
      error: (err) => {
        console.error('Error al buscar personal por legajo', err);
        this.cuadrantesForm[index].jefeCuadrante = null;
        this.cuadrantesForm[index].jefeCuadranteId = null;
        this.cuadrantesForm[index].mensajeError2 = 'Error al buscar personal';
      }
    });

  }



guardarOperativo(): void {
  console.log('Ejecutando guardarOperativo...');
  console.log('Operativo actual:', this.operativo);

  // Validación básica
  if (!this.operativo.nombre_operativo || this.operativo.nombre_operativo.trim() === '') {
    Swal.fire('Error', 'Por favor complete el nombre del operativo.', 'error');
    console.log('Error: nombre_operativo vacío');
    return;
  }

  // Validar cuadrantes válidos
  const cuadrantesValidos = this.cuadrantesForm.filter(cf =>
    cf.unidad_regional_id && cf.cuadrante_id
  );

  console.log('Cuadrantes válidos:', cuadrantesValidos);

  if (cuadrantesValidos.length === 0) {
    Swal.fire('Advertencia', 'Debe agregar al menos un cuadrante al operativo.', 'warning');
    console.log('Error: no hay cuadrantes válidos');
    return;
  }

  // *** ACTUALIZA LOS TOTALES ANTES DE ARMAR EL ARRAY TEMPORAL ***
  this.actualizarTotalesPersonalPorCuadrante();
    // Sumar la cantidad total de personal de todos los cuadrantes
  this.operativo.cant_total_personal = this.cuadrantesForm.reduce(
    (acc, cf) => acc + (cf.cant_total_personal || 0), 0
  );

  this.cuadrantesTemporales = cuadrantesValidos.map(cf => ({
    id: cf.id, // puede ser undefined si es nuevo
    operativo_id: this.operativo.id ?? null,
    unidad_regional_id: Number(cf.unidad_regional_id),
    unidad_regional_nombre: cf.unidad_regional_nombre || '', // nombre de la unidad regional
    cuadrante_id: Number(cf.cuadrante_id),
    cuadrante_nombre: cf.cuadrante_nombre || '', // nombre del cuadrante
    jefe_cuadrante_id: cf.jefeCuadranteId ?? null,
    jefe_supervisor_id: cf.oficialCargoId ?? null,
    cant_total_personal: cf.cant_total_personal || 0,
    cant_manos_libres: cf.cant_manos_libres || 0,
    cant_upcar: cf.cant_upcar || 0,
    cant_contravencional: cf.cant_contravencional || 0,
    cant_dinamicos: cf.cant_dinamicos || 0,
    cant_moviles: cf.cant_moviles || 0

  }));

  console.log('Cuadrantes temporales preparados:', this.cuadrantesTemporales);

  // Función para crear cuadrantes (solo creación)
  const guardarCuadrantes = (operativoId: number) => {
    const relacionesCrear = this.cuadrantesTemporales
      .filter(cf => !cf.id) // solo los que NO tienen id (nuevos)
      .map(cf => ({
        operativo_id: operativoId,
        unidad_regional_id: cf.unidad_regional_id,
        unidad_regional_nombre: cf.unidad_regional_nombre,
        cuadrante_id: cf.cuadrante_id,
        cuadrante_nombre: cf.cuadrante_nombre,
        jefe_cuadrante_id: cf.jefe_cuadrante_id,
        jefe_supervisor_id: cf.jefe_supervisor_id,
        cant_total_personal: cf.cant_total_personal,
        cant_manos_libres: cf.cant_manos_libres,
        cant_upcar: cf.cant_upcar,
        cant_contravencional: cf.cant_contravencional,
        cant_dinamicos: cf.cant_dinamicos,
        cant_moviles: cf.cant_moviles

      }));

    console.log('Cuadrantes a crear:', relacionesCrear);

    if (relacionesCrear.length === 0) {
      Swal.fire('Éxito', 'Operativo guardado correctamente.', 'success').then(() => {
        this.router.navigate(['/tableros/distribucionlist']);
      });
      return;
    }
this.operativoCuadranteService.createMultiple(relacionesCrear).subscribe({
  next: (cuadrantesCreados) => {
    // Si la respuesta es un objeto con un array dentro:
    const cuadrantesArray = Array.isArray(cuadrantesCreados)
      ? cuadrantesCreados
      : cuadrantesCreados.data || [];
    this.guardarPersonal(operativoId, cuadrantesArray);

        Swal.fire('Éxito', 'Operativo y cuadrantes guardados correctamente.', 'success').then(() => {
          this.router.navigate(['/tableros/distribucionlist']);
        });
      },
      error: (err) => {
        console.error('Error al guardar cuadrantes:', err);
        Swal.fire('Error', 'No se pudieron guardar los cuadrantes.', 'error');
      }
    });
  };

  // Función para actualizar cuadrantes existentes
  const actualizarCuadrantesExistentes = (operativoId: number) => {
    const relacionesActualizar = this.cuadrantesTemporales
      .filter(cf => cf.id) // solo los que ya tienen id (existentes)
      .map(cf => ({
        id: cf.id!,
        operativo_id: operativoId,
        unidad_regional_id: cf.unidad_regional_id,
        unidad_regional_nombre: cf.unidad_regional_nombre,
        cuadrante_id: cf.cuadrante_id,
        cuadrante_nombre: cf.cuadrante_nombre,
        jefe_cuadrante_id: cf.jefe_cuadrante_id,
        jefe_supervisor_id: cf.jefe_supervisor_id,
        cant_total_personal: cf.cant_total_personal,
        cant_manos_libres: cf.cant_manos_libres,
        cant_upcar: cf.cant_upcar,
        cant_contravencional: cf.cant_contravencional,
        cant_dinamicos: cf.cant_dinamicos,
        cant_moviles: cf.cant_moviles
      }));

    console.log('Cuadrantes a actualizar:', relacionesActualizar);

    if (relacionesActualizar.length === 0) {
      Swal.fire('Éxito', 'Operativo actualizado correctamente.', 'success').then(() => {
        this.router.navigate(['/tableros/distribucionlist']);
      });
      return;
    }

    this.operativoCuadranteService.updateMultiple(relacionesActualizar).subscribe({
      next: () => {
        // Después de actualizar los existentes, también creamos los nuevos si hay
        guardarCuadrantes(operativoId);
 // Trae todos los cuadrantes del operativo actualizado
 
    this.operativoCuadranteService.getCuadrantesByOperativo(operativoId).subscribe({
      next: (cuadrantesReales) => {
        this.guardarPersonal(operativoId, cuadrantesReales);
        Swal.fire('Éxito', 'Operativo y cuadrantes guardados correctamente.', 'success').then(() => {
          this.router.navigate(['/tableros/distribucionlist']);
        });
      },
      error: (err) => {
        console.error('Error al obtener cuadrantes reales:', err);
        Swal.fire('Error', 'No se pudieron obtener los cuadrantes reales.', 'error');
      }
    });
  },
      error: (err) => {
        console.error('Error al actualizar cuadrantes:', err);
        Swal.fire('Error', 'No se pudieron actualizar los cuadrantes.', 'error');
      }
    });
  };

  if (this.operativo.id) {
    console.log('Modo edición: Actualizando operativo id', this.operativo.id);
    
  // 1. Recalcula los totales ANTES de actualizar cuadrantes
  this.actualizarTotalesPersonalPorCuadrante();
    this.operativoService.updateOperativo(this.operativo).subscribe({
      next: () => {
        actualizarCuadrantesExistentes(this.operativo.id!);
      },
      error: (err) => {
        console.error('Error al actualizar operativo:', err);
        Swal.fire('Error', 'No se pudo actualizar el operativo.', 'error');
      }
    });
  } else {
    // Antes de guardar el operativo
const ids = this.cuadrantesForm
  .map(c => Number(c.unidad_regional_id))
  .filter(id => !!id); // filtra vacíos o nulos

this.operativo.unidades_regionales = Array.from(new Set(ids));
    console.log('Modo creación: Creando nuevo operativo');
    this.operativoService.createOperativo(this.operativo).subscribe({
      next: (data) => {
        console.log('Operativo creado, id recibido:', data.id);
        this.operativo.id = data.id;
        guardarCuadrantes(data.id);
      },
      error: (err) => {
        console.error('Error al guardar operativo:', err);
        Swal.fire('Error', 'No se pudo guardar el operativo.', 'error');
      }
    });
  }
}
agregarPersonalSeleccionado(personal: Personal): void {
   if (this.editandoPersonalExistenteId) {
    // Actualizar en backend
    this.operativoPersonalService.update(this.editandoPersonalExistenteId, {
      asistencia: this.asistenciaPersonalModal,
      observaciones: this.observacionesPersonalModal,
      latitud: this.selectedLat ?? 0,
      longitud: this.selectedLng ?? 0
    }).subscribe(() => {
      // Actualiza en el array local también
      const idx = this.personalExistenteModal.findIndex(p => p.id === this.editandoPersonalExistenteId);
      if (idx > -1) {
        this.personalExistenteModal[idx].asistencia = this.asistenciaPersonalModal;
        this.personalExistenteModal[idx].observaciones = this.observacionesPersonalModal;
        this.personalExistenteModal[idx].latitud = this.selectedLat ?? 0;
        this.personalExistenteModal[idx].longitud = this.selectedLng ?? 0;
      }
      this.editandoPersonalExistenteId = null;
      this.limpiarCamposModal();
    });
    return;
  }
    if (this.editandoPersonalPendienteIdx !== null) {
    const lista = this.getPersonalPendienteActual();
    const p = lista[this.editandoPersonalPendienteIdx];
    p.asistencia = this.asistenciaPersonalModal;
    p.observaciones = this.observacionesPersonalModal;
    p.latitud = this.selectedLat ?? 0;
    p.longitud = this.selectedLng ?? 0;
    this.editandoPersonalPendienteIdx = null;
    this.limpiarCamposModal();
    return;
  }
  if (this.cuadranteActualIndex === -1 || !this.grupoActual) return;

  // Si el personal no está en personalDisponible, lo agrego
  if (!this.personalDisponible.find(p => p.id === personal.id)) {
    this.personalDisponible.push(personal);
  }

  this.personalPendiente.push({
    cuadranteIndex: this.cuadranteActualIndex,
    grupo: this.grupoActual,
    personal_id: personal.id!,
    personal_legajo: personal.legajo,           // Nuevo campo
    personal_nombre: personal.nombre,           // Nuevo campo
    personal_jerarquia: personal.jerarquia,     // Nuevo campo
    asistencia: this.asistenciaPersonalModal,
    observaciones: this.observacionesPersonalModal,
    latitud: this.selectedLat ?? 0,
    longitud: this.selectedLng ?? 0
  });

  // Limpiar campos auxiliares
  this.selectedLat = null;
  this.selectedLng = null;
  this.asistenciaPersonalModal = '';
  this.observacionesPersonalModal = '';
  this.actualizarTotalesPersonalPorCuadrante();

  Swal.fire('Éxito', 'Personal agregado a la lista temporal.', 'success');

  

}
eliminarPersonalPendiente(idx: number): void {
  // Filtra solo los del cuadrante y grupo actual
  const lista = this.personalPendiente.filter(p => p.cuadranteIndex === this.cuadranteActualIndex && p.grupo === this.grupoActual);
  const globalIdx = this.personalPendiente.indexOf(lista[idx]);
  if (globalIdx > -1) {
    this.personalPendiente.splice(globalIdx, 1);
  }
    this.actualizarTotalesPersonalPorCuadrante();

}
eliminarPersonalExistente(id: number): void {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará el registro de personal del operativo.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.operativoPersonalService.delete(id).subscribe({
        next: () => {
          // Quita el personal de la lista visual
          this.personalExistente = this.personalExistente.filter(p => p.id !== id);
            this.actualizarTotalesPersonalPorCuadrante();

          Swal.fire('Eliminado', 'El personal fue eliminado correctamente.', 'success');
        },
        error: () => {
          Swal.fire('Error', 'No se pudo eliminar el personal.', 'error');
        }
      });
    }
  });
}
getTotalPersonalPorGrupo(cuadranteIndex: number, grupo: string): number {
  // Cuenta los existentes en el backend para este cuadrante y grupo
  const existentes = this.personalExistente.filter(
    p => p.cuadranteIndex === cuadranteIndex && p.grupo === grupo
  ).length;

  // Cuenta los pendientes (aún no guardados) para este cuadrante y grupo
  const pendientes = this.personalPendiente.filter(
    p => p.cuadranteIndex === cuadranteIndex && p.grupo === grupo
  ).length;

  return existentes + pendientes;
}
actualizarTotalesPersonalPorCuadrante(): void {
  this.cuadrantesForm.forEach((cuadrante, i) => {
    cuadrante.cant_manos_libres = this.getTotalPersonalPorGrupo(i, 'manos_libres');
    cuadrante.cant_upcar = this.getTotalPersonalPorGrupo(i, 'upcar');
    cuadrante.cant_contravencional = this.getTotalPersonalPorGrupo(i, 'contravencional');
    cuadrante.cant_dinamicos = this.getTotalPersonalPorGrupo(i, 'grupo_dinamico');
    cuadrante.cant_moviles = this.getTotalPersonalPorGrupo(i, 'unidad_movil');
    cuadrante.cant_total_personal =
      cuadrante.cant_manos_libres +
      cuadrante.cant_upcar +
      cuadrante.cant_contravencional +
      cuadrante.cant_dinamicos +
      cuadrante.cant_moviles;
  });
}




getDatosPersonal(id: number): Personal | undefined {
  return this.personalDisponible.find(p => p.id === id);
}

guardarPersonal(operativoId: number, cuadrantesCreados: any[]): void {
  if (!this.personalPendiente.length) {
    // Si no hay personal pendiente, solo navega o muestra éxito
    Swal.fire('Éxito', 'Operativo y cuadrantes guardados correctamente.', 'success')
      .then(() => this.router.navigate(['/tableros/distribucionlist']));
    return;
  }

  const requests = this.personalPendiente.map(p => {
    const cuadrante = cuadrantesCreados.find(
      (c: any) =>
        c.cuadrante_id === Number(this.cuadrantesForm[p.cuadranteIndex]?.cuadrante_id)
    );
    if (!cuadrante) {
      console.error('No se encontró el cuadrante para el personal pendiente:', p);
      return null;
    }
               // ...existing code...
        return this.operativoPersonalService.add({
          operativo_id: operativoId,
          operativo_cuadrante_id: cuadrante.id,
          personal_id: p.personal_id,
          personal_legajo: p.personal_legajo,         // Nuevo campo
          personal_nombre: p.personal_nombre,         // Nuevo campo
          personal_jerarquia: p.personal_jerarquia,   // Nuevo campo
          asistencia: p.asistencia,
          observaciones: p.observaciones,
          grupo: p.grupo,
          latitud: String(p.latitud),
          longitud: String(p.longitud)
        });
        // ...existing code...
  }).filter(r => r !== null);

  forkJoin(requests).subscribe({
    next: () => {
      Swal.fire('Éxito', 'Operativo, cuadrantes y personal guardados correctamente.', 'success')
        .then(() => this.router.navigate(['/tableros/distribucionlist']));
    },
    error: () => {
      Swal.fire('Error', 'No se pudo guardar el personal.', 'error');
    }
  });
}
openModal(grupo: string, cuadranteIndex: number): void {
  this.grupoActual = grupo;
  this.cuadranteActualIndex = cuadranteIndex;
  this.legajoPersonalModal = '';
  this.personalEncontradoModal = null;
  this.mensajeErrorPersonalModal = '';

  const operativoId = this.operativo.id;
  const cuadranteId = this.cuadrantesForm[cuadranteIndex]?.id;

  if (operativoId && cuadranteId) {
    this.operativoPersonalService.getByGrupoByCuadranteByOperativo(operativoId, cuadranteId, grupo).subscribe({
      next: (data) => {
        // Solo guarda los existentes de este grupo/cuadrante en la variable temporal
        this.personalExistenteModal = data.map((p: any) => ({
          id: p.id,
          personal_id: p.personal_id,
            personal_legajo: p.personal_legajo,
  personal_nombre: p.personal_nombre,
  personal_jerarquia: p.personal_jerarquia,
          asistencia: p.asistencia,
          observaciones: p.observaciones,
          latitud: p.latitud,
          longitud: p.longitud
        }));

      
      }
    });
  }

  const modalElement = document.getElementById('exampleModal');
  if (modalElement) {
    const modal = new Modal(modalElement);
    modal.show();
  }
}

buscarPersonalPorLegajoModal(): void {
  if (!this.legajoPersonalModal) {
    this.mensajeErrorPersonalModal = 'Debe ingresar un legajo';
    this.personalEncontradoModal = null;
    return;
  }
  this.personalService.getPersonalByLegajo(this.legajoPersonalModal).subscribe({
    next: (personal) => {
      if (personal) {
        this.personalEncontradoModal = personal;
        this.mensajeErrorPersonalModal = '';
      } else {
        this.personalEncontradoModal = null;
        this.mensajeErrorPersonalModal = 'No se encontró personal con ese legajo';
      }
    },
    error: () => {
      this.personalEncontradoModal = null;
      this.mensajeErrorPersonalModal = 'Error al buscar personal';
    }
  });
}

getPersonalPendienteActual(): any[] {
  return this.personalPendiente.filter(
    p => p.cuadranteIndex === this.cuadranteActualIndex && p.grupo === this.grupoActual
  );
}

editarPersonalExistente(personal: any): void {
  // Carga los datos en los campos del modal
  this.legajoPersonalModal = personal.personal_legajo || '';
  this.personalEncontradoModal = {
    legajo: personal.personal_legajo,
    nombre: personal.personal_nombre,
    jerarquia: personal.personal_jerarquia,
    id: personal.personal_id
  } as Personal;
    this.asistenciaPersonalModal = personal.asistencia;
  this.observacionesPersonalModal = personal.observaciones;
  this.selectedLat = personal.latitud;
  this.selectedLng = personal.longitud;

  // Guarda el id para saber que es edición
  this.editandoPersonalExistenteId = personal.id;
}

editarPersonalPendiente(idx: number): void {
  const p = this.getPersonalPendienteActual()[idx];
  this.legajoPersonalModal = p.personal_legajo || '';
  this.personalEncontradoModal = {
    legajo: p.personal_legajo,
    nombre: p.personal_nombre,
    jerarquia: p.personal_jerarquia,
    id: p.personal_id
  } as Personal;
  this.asistenciaPersonalModal = p.asistencia;
  this.observacionesPersonalModal = p.observaciones;
  this.selectedLat = p.latitud;
  this.selectedLng = p.longitud;
  this.editandoPersonalPendienteIdx = idx;
}
limpiarCamposModal(): void {
  this.selectedLat = null;
  this.selectedLng = null;
  this.asistenciaPersonalModal = '';
  this.observacionesPersonalModal = '';
  this.legajoPersonalModal = '';
  this.personalEncontradoModal = null;
}



  initMap(): void {
    // Inicializa el mapa centrado en una ubicación predeterminada
    this.map = L.map(this.mapContainer.nativeElement).setView([-24.18769889437684, -65.29709953331486], 10);
    // Agregar la capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    // Manejar el evento de clic para obtener latitud y longitud
this.map.on('click', (e: L.LeafletMouseEvent) => {
  if (this.map && this.marker) {
    this.map.removeLayer(this.marker);
  }
  this.marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);

  // Guardar lat/lng temporalmente
  this.selectedLat = e.latlng.lat;
  this.selectedLng = e.latlng.lng;
});

  }


  // Método para inicializar el mapa cuando el modal se muestra
  onModalShown(): void {
    if (!this.map) {
      this.initMap();
    } else {
      this.map.invalidateSize();
    }
  }

  // // Método para abrir el modal y establecer el cuadrante actual



openModalUnidadMovil(cuadrante: string): void {
  const modalElement = document.getElementById('unidadMovilModal');
  if (modalElement) {
    const modal = new Modal(modalElement);
    modal.show();
  }
}

   agregarUnidadMovil(): void {
   

    this.cerrarModal('unidadMovilModal');
  }
  
  cerrarModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
resetForm(): void {
  // Limpiar la información del operativo
  this.operativo = new Operativos();

  // Limpiar los cuadrantes del formulario
  this.cuadrantesForm = [];

  // Limpiar el array temporal si lo estás usando
  this.cuadrantesTemporales = [];

  // También podrías resetear otros datos relacionados si aplica
  this.personalSeleccionado = [];
  this.mensajeError = '';

  // Redirigir al listado de distribuciones
  this.router.navigate(['/tableros/distribucionlist']);
}

}
