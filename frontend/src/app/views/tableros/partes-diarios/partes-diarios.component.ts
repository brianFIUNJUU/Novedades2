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

@Component({
  selector: 'app-partes-diarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partes-diarios.component.html',
  styleUrl: './partes-diarios.component.scss'
})
export class PartesDiariosComponent {
 parteDiario: PartesDiarios = new PartesDiarios();
  editando: boolean = false;
  unidadRegionales: UnidadRegional[] = [];
  dependencias: Dependencia[] = [];
  constructor(
    private partesDiariosService: PartesDiariosService,
    private authService: AuthenticateService,
    private unidadRegionalService: UnidadRegionalService,
    private dependenciaService: DependenciaService
  ) {
    this.cargarUnidadesRegionales();
    this.cargarDependencias();
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
  // Crear parte diario
  crearParteDiario(): void {
    this.partesDiariosService.createParteDiario(this.parteDiario).subscribe({
      next: (data) => {
        Swal.fire('Éxito', 'Parte diario creado correctamente', 'success');
        this.limpiarFormulario();
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
        Swal.fire('Éxito', 'Parte diario modificado correctamente', 'success');
        this.limpiarFormulario();
        this.editando = false;
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
    this.editando = false;
  }
}
