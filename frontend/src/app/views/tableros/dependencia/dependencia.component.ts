import { Component, OnInit } from '@angular/core';
import { DependenciaService } from '../../../services/dependencia.service';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { LocalidadService } from '../../../services/localidad.service';
import { DepartamentoService } from '../../../services/departamento.service';
import { Dependencia } from '../../../models/dependencia';
import { UnidadRegional } from '../../../models/unidad_regional';
import { Localidad } from '../../../models/localidad';
import { Departamento } from '../../../models/departamento';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { AuthenticateService } from '../../../services/authenticate.service'; // Ruta corregida



@Component({
  selector: 'app-dependencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dependencia.component.html',
  styleUrls: ['./dependencia.component.scss']
})
export class DependenciaComponent implements OnInit {
  dependencias: Dependencia[] = [];
  unidadesRegionales: UnidadRegional[] = [];
  localidades: Localidad[] = [];
  departamentos: Departamento[] = [];
  selectedDependencia: Dependencia = new Dependencia();
  mensajeError: string = '';
  userType: string = ''; // Variable para almacenar el tipo de usuario

  constructor(
    private dependenciaService: DependenciaService,
    private unidadRegionalService: UnidadRegionalService,
    private localidadService: LocalidadService,
    private departamentoService: DepartamentoService,
    private authService: AuthenticateService // Inyecta el servicio de autenticación

  ) { }

  ngOnInit(): void {
    this.getDependencias();
    this.getUnidadesRegionales();
    this.authService.getUserType().subscribe(userType => {
      console.log('Tipo de usuario:', userType); // Mostrar el tipo de usuario en la consola
      this.userType = userType ? userType.trim() : ''; // Asigna el tipo de usuario desde el servicio de autenticación y elimina espacios adicionales
    });
  }
  editarDependencia(dependencia: Dependencia): void {
    this.selectedDependencia = { ...dependencia };
    this.showModal(); // Llamar a showModal para abrir el modal
  }
  
  showModal(): void {
    const modalElement = document.getElementById('modalDependencia');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
      
  getDependencias(): void {
    this.dependenciaService.getDependencias().subscribe(
      data => {
        this.dependencias = data;
        // Para cada dependencia, actualizamos los nombres basados en los IDs
        this.dependencias.forEach(dependencia => {
          if (dependencia.unidad_regional_id) {
            this.updateUnidadRegionalNombre(dependencia);
          } else {
            dependencia.unidad_regional_nombre = 'Desconocido';
          }
        });
       
      },
      error => {
        console.error('Error al obtener las dependencias:', error);
      
      }
    );
  }

  getUnidadesRegionales(): void {
    this.unidadRegionalService.getUnidadesRegionales().subscribe(
      data => {
        this.unidadesRegionales = data;
   
      },
      error => {
        console.error('Error al obtener las unidades regionales:', error);

      }
    );
  }

  updateUnidadRegionalNombre(dependencia: Dependencia): void {
    this.unidadRegionalService.getUnidadRegional(Number(dependencia.unidad_regional_id)).subscribe(
      unidadRegional => {
        dependencia.unidad_regional_nombre = unidadRegional.unidad_regional;
      },
      error => {
        console.error('Error al obtener la unidad regional:', error);
        dependencia.unidad_regional_nombre = 'Desconocido';
      }
    );
  }

  guardarDependencia(): void {
    if (this.selectedDependencia.id) {
      this.dependenciaService.updateDependencia(this.selectedDependencia).subscribe(
        () => {
          this.getDependencias();
          this.resetForm();
          this.cerrarModal(); // Cerrar el modal después de actualizar
          Swal.fire('Éxito', 'Dependencia actualizada correctamente', 'success');
        },
        error => {
          console.error('Error al actualizar la dependencia:', error);
          Swal.fire('Error', 'Error al actualizar la dependencia', 'error');
        }
      );
    } else {
      this.dependenciaService.createDependencia(this.selectedDependencia).subscribe(
        () => {
          this.getDependencias();
          this.resetForm();
          this.cerrarModal(); // Cerrar el modal después de crear
          Swal.fire('Éxito', 'Dependencia creada correctamente', 'success');
        },
        error => {
          console.error('Error al crear la dependencia:', error);
          Swal.fire('Error', 'Error al crear la dependencia', 'error');
        }
      );
    }
  }
  
  cerrarModal(): void {
    const modalElement = document.getElementById('modalDependencia');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
      modal.hide();
    }
  }



  eliminarDependencia(id: string): void {
    this.dependenciaService.deleteDependencia(id).subscribe(
      () => {
        this.getDependencias();
        Swal.fire('Éxito', 'Dependencia eliminada correctamente', 'success');
      },
      error => {
        console.error('Error al eliminar la dependencia:', error);
        Swal.fire('Error', 'Error al eliminar la dependencia', 'error');
      }
    );
  }

  resetForm(): void {
    this.selectedDependencia = new Dependencia();
    this.mensajeError = '';
  }
}