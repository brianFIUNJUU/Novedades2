import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule si es necesario
import { FormsModule } from '@angular/forms'; // Importar FormsModule si se usan formularios
import { PartesDiarios } from '../../../models/partesDiarios'; // Asegúrate de que la ruta sea correcta|
import { PartesDiariosService } from '../../../services/partesDiarios_services'; // Asegúrate de que la ruta sea correcta
import Swal from 'sweetalert2'; // Importar SweetAlert2 para mostrar alertas
import { AuthenticateService } from '../../../services/authenticate.service'; // Importar el servicio de autenticación
import { UnidadRegional } from '../../../models/unidad_regional';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { DependenciaService } from '../../../services/dependencia.service';
import { Dependencia } from '../../../models/dependencia';
import { PersonalService } from '../../../services/personal.service';
import { Personal } from '../../../models/personal'; // Asegúrate de que la ruta sea correcta
import { OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; // Importar Router si necesitas redireccionar
import { PartesDiariosPersonal } from '../../../models/partesDiarios_personal';
import { PartesDiariosPersonalService } from '../../../services/partesDiarios_personal.services';
import * as $ from 'jquery';
import { AfterViewInit } from '@angular/core';
import { Items } from '../../../models/items';
import { ItemsService } from '../../../services/items.service';
import { Novedades } from '../../../models/novedades'; // Asegúrate de que la ruta sea correcta
import { NovedadesService } from '../../../services/novedades.service'; // Asegúrate de que la ruta sea correcta
import { of, Observable } from 'rxjs';
import { PartesDiariosNovedad } from '../../../models/partesDiarios_Novedad';
import { PartesDiariosNovedadService } from '../../../services/partesDiarios_Novedad.services'; // Asegúrate de que la ruta sea correcta
import { ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-partes-diarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partes-diarios.component.html',
  styleUrl: './partes-diarios.component.scss'
})
export class PartesDiariosComponent implements OnInit {
 parteDiario: PartesDiarios = new PartesDiarios();
  editando: boolean = false;
  unidadRegionales: UnidadRegional[] = [];
  dependencias: Dependencia[] = [];
    // En el modelo
  lapso_valor?: number;
  lapso_unidad?: string;
   // ...otras variables
  jefePersonal?: Personal;
  jefeOpPersonal?: Personal;
  mensajeErrorJefe: string = '';
  mensajeErrorJefeOp: string = '';
  formIntentado: boolean = false;
    modalPersonalInstance: any;
personalAsociado: any[] = [];
    personalTemporales: any[] = []; // Array temporal para personal a agregar
  nuevaPersonal: any = {}; // Objeto para el modal
  @ViewChild('modalPersonal') modalPersonal!: ElementRef;
  
    @ViewChild('modalNovedad') modalNovedad!: ElementRef;
    modalNovedadInstance: any;
  itemsTemporales: Items[] = [];
  itemsAsociados: Items[] = [];
  nuevaNovedad: Items = new Items();
  editandoNovedad: boolean = false;
  novedadesEnRango: Novedades[] = [];
  indiceEditandoNovedad?: number;
public mayoresDemorados: number = 0;
public menoresDemorados: number = 0;


  constructor(
    private partesDiariosService: PartesDiariosService,
    private authService: AuthenticateService,
    private unidadRegionalService: UnidadRegionalService,
    private dependenciaService: DependenciaService,
    private personalService: PersonalService,
    private route: ActivatedRoute // Inyectar ActivatedRoute para obtener parámetros de la URL
    , private router: Router // Inyectar Router si necesitas redireccionar
  , private partesDiariosPersonalService: PartesDiariosPersonalService // Inyectar el servicio de partes diarios personal
  , private itemsService: ItemsService // Inyectar el servicio de items
  , private novedadesService: NovedadesService // Inyectar el servicio de novedades
  , private partesDiariosNovedadService: PartesDiariosNovedadService, // Inyectar el servicio de partes diarios novedades
   private cdr: ChangeDetectorRef,
     private zone: NgZone,

  ) {
    this.cargarUnidadesRegionales();
    this.cargarDependencias();
  }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          // Modo edición
          this.editando = true;
          this.partesDiariosService.getParteDiarioById(id).subscribe({
            next: (parte) => {
              this.parteDiario = parte;
              // Cargar personal asociado al parte diario
              this.cargarPersonalAsociado(Number(id));
              this.cargarItemsAsociados(Number(id));
              this.actualizarNovedadesEnRango();
           
            },
            error: () => {
              // Maneja el error si no se encuentra el parte
            }
          });
        } else {
          // Modo creación
          this.editando = false;
          this.parteDiario = new PartesDiarios();
          this.parteDiario.fecha_hasta = this.getFechaHoy();
          this.personalAsociado = [];
             // Asignar datos del usuario logueado si existen
      this.authService.getUserInfo().subscribe(userInfo => {
        if (userInfo.unidad_regional_id) {
          this.parteDiario.unidad_regional_id = userInfo.unidad_regional_id;
          this.parteDiario.unidad_regional_nombre = userInfo.unidad_regional_nombre;
        }
        if (userInfo.dependencia_id) {
          this.parteDiario.dependencia_id = userInfo.dependencia_id;
          this.parteDiario.dependencia_nombre = userInfo.dependencia_nombre;
        }
      });
        }
      });
    }
           actualizarNovedadesEnRango() {
        if (
          this.parteDiario.fecha_desde &&
          this.parteDiario.hora_desde &&
          this.parteDiario.fecha_hasta &&
          this.parteDiario.hora_hasta
        ) {
          this.novedadesService.getNovedadesByFechaYHoraRango(
            this.parteDiario.fecha_desde,
            this.parteDiario.hora_desde,
            this.parteDiario.fecha_hasta,
            this.parteDiario.hora_hasta,
            this.parteDiario.dependencia_id // <-- Agrega este parámetro
          ).subscribe(novedades => {
            this.novedadesEnRango = novedades;
            this.cargarResumenDemoradosPorNovedades();
            this.cargarResumenElementosSecuestradosPorNovedades();
          });
        } else {
          this.novedadesEnRango = [];
          this.cargarResumenDemoradosPorNovedades();
          this.cargarResumenElementosSecuestradosPorNovedades();
        }
      }
    
    onFechaChange() {
      this.actualizarNovedadesEnRango();
    }
      onFechaHastaChange() {
      this.actualizarNovedadesEnRango();
    }
    onHoraDesdeChange() {
      this.actualizarNovedadesEnRango();
    }
    onHoraHastaChange() {
      this.actualizarNovedadesEnRango();
    }
    onDependencia2Change(){
      this.actualizarNovedadesEnRango();
    }

               getNovedadesCombinadas() {
          const items = (this.editando ? this.itemsAsociados : this.itemsTemporales).map(item => ({
            ...item,
            tipo: 'manual',
            fecha: item.fecha,
            hora: item.hora,
            titulo: item.titulo,
            descripcion: item.descripcion
          }));
        
          const novedades = this.novedadesEnRango.map(nov => ({
            ...nov,
            tipo: 'automatica',
            fecha: nov.fecha,
            hora: nov.horario,
            titulo: 'ACTUACION SUMARIA: ' + nov.descripcion_hecho,
            descripcion: nov.descripcion
          }));
        
          // Ordenar por fecha y hora usando objetos Date
          return [...items, ...novedades].sort((a, b) => {
            const dateA = new Date(`${a.fecha}T${a.hora || '00:00'}`);
            const dateB = new Date(`${b.fecha}T${b.hora || '00:00'}`);
            return dateA.getTime() - dateB.getTime();
          });
        }
 // Cargar unidades regionales
  cargarUnidadesRegionales(): void {
    this.unidadRegionalService.getUnidadesRegionales().subscribe({
      next: (data) => {
        this.unidadRegionales = data;
      },
      error: (error) => {
        console.error('Error al cargar unidades regionales', error);
      }
    });
  }

  // Cargar dependencias
  cargarDependencias(): void {
    this.dependenciaService.getDependencias().subscribe({
      next: (data) => {
        this.dependencias = data;
      },
      error: (error) => {
        console.error('Error al cargar dependencias', error);
      }
    });
  }



  // Cuando cambia la unidad regional seleccionada
  onUnidadRegionalChange(): void {
    const unidad = this.unidadRegionales.find(u => String(u.id) === String(this.parteDiario.unidad_regional_id));
    this.parteDiario.unidad_regional_nombre = unidad ? unidad.unidad_regional : '';
  }

  // Cuando cambia la dependencia seleccionada
  onDependenciaChange(): void {
    const dep = this.dependencias.find(d => String(d.id) === String(this.parteDiario.dependencia_id));
    this.parteDiario.dependencia_nombre = dep ? dep.juridiccion : '';
  }
getFechaHoy(): string {
  const hoy = new Date();
  return hoy.toISOString().substring(0, 10);
}
    buscarJefePorLegajo(legajo: string): void {
    if (!legajo) {
      this.jefePersonal = undefined;
      this.mensajeErrorJefe = 'Debe ingresar un legajo';
      return;
    }
    this.personalService.getPersonalByLegajo(legajo).subscribe({
      next: (personal) => {
        if (personal) {
          this.jefePersonal = personal;
          this.parteDiario.jefe =`${personal.nombre} (${personal.jerarquia}) - Legajo: ${personal.legajo}`;
          this.mensajeErrorJefe = '';
        } else {
          this.jefePersonal = undefined;
          this.parteDiario.jefe = '';
          this.mensajeErrorJefe = 'No se encontró personal con ese legajo';
        }
      },
      error: (err) => {
        console.error('Error al buscar personal por legajo', err);
        this.jefePersonal = undefined;
        this.parteDiario.jefe = '';
        this.mensajeErrorJefe = 'Error al buscar personal';
      }
    });
  }

  buscarJefeOpPorLegajo(legajo: string): void {
    if (!legajo) {
      this.jefeOpPersonal = undefined;
      this.mensajeErrorJefeOp = 'Debe ingresar un legajo';
      return;
    }
    this.personalService.getPersonalByLegajo(legajo).subscribe({
      next: (personal) => {
        if (personal) {
          this.jefeOpPersonal = personal;
            this.parteDiario.jefe_op = `${personal.nombre} (${personal.jerarquia}) - Legajo: ${personal.legajo}`;
          this.mensajeErrorJefeOp = '';
        } else {
          this.jefeOpPersonal = undefined;
          this.parteDiario.jefe_op = '';
          this.mensajeErrorJefeOp = 'No se encontró personal con ese legajo';
        }
      },
      error: (err) => {
        console.error('Error al buscar personal por legajo', err);
        this.jefeOpPersonal = undefined;
        this.parteDiario.jefe_op = '';
        this.mensajeErrorJefeOp = 'Error al buscar personal';
      }
    });
  }


   crearParteDiario(): void {
    this.formIntentado = true;
  
    if (
      !this.parteDiario.fecha_hasta ||
      !this.parteDiario.fecha_desde ||
      !this.parteDiario.tipoHora ||
      !this.parteDiario.unidad_regional_id ||
      !this.parteDiario.dependencia_id ||
      !this.parteDiario.destinario
    ) {
      return;
    }
  
    this.partesDiariosService.createParteDiario(this.parteDiario).subscribe({
      next: (data) => {
        const accionesDespuesDeGuardar = () => {
          Swal.fire('Éxito', 'Parte diario guardado correctamente', 'success');
          this.limpiarFormulario();
          this.formIntentado = false;
          this.personalTemporales = [];
          this.itemsTemporales = [];
              this.router.navigate(['/tableros/partes-diarios-list']); // Redirige al listado

        };
  
      
        // ...
        
          const guardarPersonales = (): Observable<any> => {
          if (this.personalTemporales.length > 0) {
            const personales = this.personalTemporales.map(pt => ({
              parte_diario_id: data.id,
              personal_id: pt.personal.id,
              personal_datos: `${pt.personal.nombre} ${pt.personal.apellido} (${pt.personal.jerarquia})`,
              rol: pt.rol,
              situacion: pt.situacion,
              tipo_personal: pt.tipo_personal
            }));
            return this.partesDiariosPersonalService.addMultiplePersonalToParteDiario(personales);
          }
          return of(null);
        };
        
        const guardarItems = (): Observable<any> => {
          if (this.itemsTemporales.length > 0) {
            const items = this.itemsTemporales.map(it => ({
              parte_diario_id: data.id,
              fecha: it.fecha,
              hora: it.hora,
              titulo: it.titulo,
              descripcion: it.descripcion
            }));
            return this.itemsService.addMultipleItems(items);
          }
          return of(null);
        };
  
        // Primero personales, luego items, luego limpiar
                                 // Secuencia: personales -> items -> novedades -> limpiar
      guardarPersonales().subscribe(() => {
      guardarItems().subscribe(() => {
        this.guardarNovedades(data).subscribe(() => {
          accionesDespuesDeGuardar();
        });
      });
    });
      },
      error: (err) => {
        Swal.fire('Error', 'No se pudo crear el parte diario', 'error');
      }
    });
  }

  // Cargar parte diario para editar (puedes llamarlo desde el listado)
  cargarParteDiario(parte: PartesDiarios): void {
    this.parteDiario = { ...parte };
    this.editando = true;
  }

  // Modificar parte diario
 modificarParteDiario(): void {
  if (!this.parteDiario.id) return;
  this.partesDiariosService.updateParteDiario(this.parteDiario.id.toString(), this.parteDiario).subscribe({
    next: (data) => {
      const novedadesIds = this.novedadesEnRango.map(nov => nov.id);
if (this.parteDiario.id) {
  this.partesDiariosNovedadService.updateMultiple(this.parteDiario.id, novedadesIds).subscribe(() => {
    // ...acciones después de guardar
  });
}
      Swal.fire('Éxito', 'Parte diario modificado correctamente', 'success').then(() => {
        this.limpiarFormulario();
        this.editando = false;
        this.router.navigate(['/tableros/partes-diarios-list']); // Redirige al listado
      });
    },
    error: (err) => {
      Swal.fire('Error', 'No se pudo modificar el parte diario', 'error');
    }
  });
}

  // Eliminar parte diario
  eliminarParteDiario(id: number): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.partesDiariosService.deleteParteDiario(id.toString()).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'Parte diario eliminado correctamente', 'success');
            this.limpiarFormulario();
          },
          error: () => {
            Swal.fire('Error', 'No se pudo eliminar el parte diario', 'error');
          }
        });
      }
    });
  }

  limpiarFormulario(): void {
    this.parteDiario = new PartesDiarios();
    this.parteDiario.fecha_hasta = this.getFechaHoy(); // Solo al crear
    this.editando = false;
  }
  // logica para personal asociado /////////////////////////////////////////////////////////////////////////////////////////////////////
   ngAfterViewInit() {
    this.modalPersonalInstance = new (window as any).bootstrap.Modal(this.modalPersonal.nativeElement);
    this.modalNovedadInstance = new (window as any).bootstrap.Modal(this.modalNovedad.nativeElement);
  }

  openModalPersonal() {
    this.modalPersonalInstance.show();
  }

  closeModalPersonal() {
    this.modalPersonalInstance.hide();
  }
  resetFormularioPersonal() {
    this.nuevaPersonal = {};
  }
// editar personal deberia de recibir el id
                                                                                            editarPersonal(pt: any) {
                                                                if (!this.editando) {
                                                                  // Modo creación
                                                                  this.nuevaPersonal = {
                                                                    ...(pt.personal || pt),
                                                                    rol: pt.rol,
                                                                    situacion: pt.situacion,
                                                                    tipo_personal: pt.tipo_personal
                                                                    
                                                                  };
                                                                  this.personalTemporales = this.personalTemporales.filter(p => p !== pt);
                                                                  this.openModalPersonal();
                                                                } else {
                                                                  
                                                                  if (!pt.id) {
                                                                    console.error('No se encontró el id del registro intermedio en pt:', pt);
                                                                    return;
                                                                  }
                                                                  this.partesDiariosPersonalService.getPersonalParteDiarioById(pt.id).subscribe({
                                                                    next: (registro) => {
                                                                          console.log('Registro recibido:', registro);

                                                                      // Si tienes registro.personal usa esto:
                                                                      this.nuevaPersonal = {
                                                                        id: registro.personal_id,
                                                                        legajo: registro.personal?.legajo || '',
                                                                        dni: registro.personal?.dni || '',
                                                                         nombre: registro.personal?.nombre || '',
                                                                        apellido: registro.personal?.apellido || '',
                                                                        jerarquia: registro.personal?.jerarquia || '',
                                                                        rol: registro.rol,
                                                                        situacion: registro.situacion,
                                                                        tipo_personal: registro.tipo_personal,
                                                                        _registroId: registro.id
                                                                      };
                                                                      this.openModalPersonal();
                                                                    },
                                                                    error: (err) => {
                                                                      console.error('Error al obtener el registro del backend:', err);
                                                                    }
                                                                  });
                                                                }
                                                              }
        
        // Modifica agregarPersonalAsociado para actualizar si es edición
        agregarPersonalAsociado() {
          if (
    !this.nuevaPersonal.id ||
    !this.nuevaPersonal.rol ||
    !this.nuevaPersonal.situacion ||
    !this.nuevaPersonal.tipo_personal
  ) {
    Swal.fire({
      icon: 'warning',
      title: 'Faltan campos obligatorios',
      text: 'Por favor, completa todos los campos del personal antes de guardar.'
    });
    return;
  }
        
          if (!this.editando) {
            // Modo creación: agrega al array temporal
            this.personalTemporales.push({
              personal: { ...this.nuevaPersonal },
              rol: this.nuevaPersonal.rol,
              situacion: this.nuevaPersonal.situacion,
              tipo_personal: this.nuevaPersonal.tipo_personal
            });
            this.nuevaPersonal = {};
            this.closeModalPersonal();
          } else {
            // Modo edición: si tiene _registroId, es edición, si no, es alta
            if (!this.parteDiario.id) return;
            const nuevo = {
              parte_diario_id: this.parteDiario.id,
              personal_id: this.nuevaPersonal.id,
              personal_datos: `${this.nuevaPersonal.nombre} ${this.nuevaPersonal.apellido} (${this.nuevaPersonal.jerarquia})`,
              rol: this.nuevaPersonal.rol,
              situacion: this.nuevaPersonal.situacion,
              tipo_personal: this.nuevaPersonal.tipo_personal
            };
            if (this.nuevaPersonal._registroId) {
              // Es edición
              this.partesDiariosPersonalService.updatePersonalParteDiario(this.nuevaPersonal._registroId, nuevo).subscribe({
                next: () => {
                  this.cargarPersonalAsociado(this.parteDiario.id!);
                  this.nuevaPersonal = {};
                  this.closeModalPersonal();
                }
              });
            } else {
              // Es alta
              this.partesDiariosPersonalService.addPersonalToParteDiario(nuevo).subscribe({
                next: () => {
                  this.cargarPersonalAsociado(this.parteDiario.id!);
                  this.nuevaPersonal = {};
                  this.closeModalPersonal();
                }
              });
            }
          }
        }
  // Buscar personal por legajo
  buscarPersonalPorLegajo(legajo: string) {
    if (!legajo) return;
    this.personalService.getPersonalByLegajo(legajo).subscribe({
      next: (personal) => {
        if (personal) {
          this.nuevaPersonal = { ...personal, rol: '', situacion: '', tipo_personal: '' };
        }
      }
    });
  }
cargarPersonalAsociado(parteDiarioId: number) {
  this.partesDiariosPersonalService.getPersonalByParteDiarioId(parteDiarioId).subscribe({
    next: (personales) => {
      this.personalAsociado = personales;
    }
  });
}
borrarPersonalAsociado(personalId: number) {
  if (!this.parteDiario.id) return;
  this.partesDiariosPersonalService.removePersonalFromParteDiario(this.parteDiario.id, personalId).subscribe({
    next: () => {
      this.cargarPersonalAsociado(this.parteDiario.id!);
    }
  });
}

  // Borrar de array temporal
  borrarPersonalTemporal(id: number) {
    this.personalTemporales = this.personalTemporales.filter(pt => pt.personal.id !== id);
  }
  // logica para novedades asociadas /////////////////////////////////////////////////////////////////////////////////////////////////////
openModalNovedad() {
  this.editandoNovedad = false;
  this.nuevaNovedad = new Items();
  this.nuevaNovedad.fecha = this.getFechaHoy();
  this.nuevaNovedad.hora = this.getHoraActual();
  this.modalNovedadInstance.show();
}
editarNovedad(item: Items) {
  this.editandoNovedad = true;
  this.nuevaNovedad = { ...item };
  if (!this.editando) {
    this.indiceEditandoNovedad = this.itemsTemporales.findIndex(i => i.tempId === item.tempId);
  }
  this.modalNovedadInstance.show();
}

agregarNovedad() {
  if (!this.editando) {
  if (this.editandoNovedad && this.indiceEditandoNovedad !== undefined && this.indiceEditandoNovedad > -1) {
    this.itemsTemporales[this.indiceEditandoNovedad] = { ...this.nuevaNovedad, tempId: this.itemsTemporales[this.indiceEditandoNovedad].tempId };
    this.indiceEditandoNovedad = undefined;
  } else {
    this.itemsTemporales.push({ ...this.nuevaNovedad, tempId: Date.now() });
  }
  this.nuevaNovedad = new Items();
  this.editandoNovedad = false;
  this.modalNovedadInstance.hide();
} else {
    // Modo edición: agregar o actualizar en backend
    if (this.nuevaNovedad.id) {
      this.itemsService.updateItem(this.nuevaNovedad.id, this.nuevaNovedad).subscribe(() => {
        this.cargarItemsAsociados(this.parteDiario.id!);
        this.nuevaNovedad = new Items();
        this.modalNovedadInstance.hide();
      });
    } else {
      const data = { ...this.nuevaNovedad, parte_diario_id: this.parteDiario.id };
      this.itemsService.addItem(data).subscribe(() => {
        this.cargarItemsAsociados(this.parteDiario.id!);
        this.nuevaNovedad = new Items();
        this.modalNovedadInstance.hide();
      });
    }
  }
}

cargarItemsAsociados(parteDiarioId: number) {
  this.itemsService.getItemsByParteDiarioId(parteDiarioId).subscribe(items => {
    this.itemsAsociados = items;
  });
}

borrarNovedad(item: Items) {
  if (!this.editando) {
    this.itemsTemporales = this.itemsTemporales.filter(i => i.tempId !== item.tempId);
  } else {
    if (item.id) {
      this.itemsService.deleteItem(item.id).subscribe(() => {
        this.cargarItemsAsociados(this.parteDiario.id!);
      });
    }
  }
}
  


getHoraActual(): string {
  const hoy = new Date();
  return hoy.toTimeString().slice(0, 5); // hh:mm
}
// desde aqui hago la relacion de novedade con el parte diario// bien ahora tengo una cuestion en parte diarios quiero hacer un apartado de resumen ejecutivo, personas demoradas mayores de edad y menores de edad, para ello bueno ya mi logica guarda la novedades realcionadas a parte diarios por lado novedades tiene una relacion de personas, pero parte diario no tiene ninguna relacion con persona, entonces como podria hacer ? lo unico que necesito es que cuente la personas

guardarNovedades(data: any): Observable<any> {
  if (this.novedadesEnRango.length > 0) {
    const relaciones = this.novedadesEnRango.map(nov => ({
      parte_diario_id: data.id,
      novedad_id: nov.id
    }));
    return this.partesDiariosNovedadService.addMultiple(relaciones);
  }
  return of(null);
}
//  CNATIDAD DE CONTADOR DE PERSONA DEMORADOS DE MAYORESY MENORES DE EDAD




cargarResumenDemoradosPorNovedades() {
  const novedadesIds = this.novedadesEnRango.map(n => n.id);
  console.log('IDs enviados:', novedadesIds);
  this.partesDiariosNovedadService.getPersonasDemoradasPorNovedades(novedadesIds)
    .subscribe({
      next: res => {
        console.log('Respuesta demorados:', res);
        this.parteDiario.mayores_detenidos = res.mayores;
        this.parteDiario.menores_detenidos = res.menores;
      },
      error: err => {
        console.log('Sin demorados:', err);
      }
    });
}
cargarResumenElementosSecuestradosPorNovedades() {
  const novedadesIds = this.novedadesEnRango.map(n => n.id);

  // Vehículos secuestrados
  this.partesDiariosNovedadService.contarVehiculosSecuestradosPorNovedades(novedadesIds)
    .subscribe({
      next: res => {
                console.log('Respuesta demorados:', res);

        this.parteDiario.vehiculos_secuestrados = res.totalVehiculos ?? 0;
      },
      error: err => {
        console.log('sin vehículos secuestrados:', err);
        this.parteDiario.vehiculos_secuestrados = 0;
      }
    });

  // Motos secuestradas
  this.partesDiariosNovedadService.contarMotosSecuestradasPorNovedades(novedadesIds)
    .subscribe({
      next: res => {
                console.log('Respuesta demorados:', res);

        this.parteDiario.motos_secuestradas = res.totalMotos ?? 0;
      },
      error: err => {
        console.log('sin motos secuestradas:', err);
        this.parteDiario.motos_secuestradas = 0;
      }
    });
}
}
