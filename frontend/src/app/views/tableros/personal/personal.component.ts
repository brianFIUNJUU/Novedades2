import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../../services/personal.service';
import { DependenciaService } from '../../../services/dependencia.service';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { Personal } from '../../../models/personal';
import { Dependencia } from '../../../models/dependencia';
import { UnidadRegional } from '../../../models/unidad_regional';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import * as bootstrap from 'bootstrap';
import { ExcelExportService } from '../../../services/excel-export.service';
import { AuthenticateService } from '../../../services/authenticate.service'; // Importar el servicio de autenticación

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  personales: Personal[] = [];
  dependencias: Dependencia[] = [];
  unidadRegionales: UnidadRegional[] = [];
  personal: Personal = new Personal();
  legajo: string = '';
  mensajeError: string = '';
  isUpdating: boolean = false; // Variable para determinar si estamos en modo de edición
  userInfo: any = {}; // Variable para almacenar la información del usuario

  constructor(
    private personalService: PersonalService,
    private dependenciaService: DependenciaService,
    private unidadRegionalService: UnidadRegionalService,
    private excelExportService: ExcelExportService,
    private authService: AuthenticateService // Inyectar el servicio de autenticación
  ) { }

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
      if (this.userInfo.perfil === 'usuario') {
        this.legajo = this.userInfo.legajo;
        this.buscarPersonalPorLegajo();
      } else {
        this.getPersonales();
      }
    });
    this.loadUnidadRegionales();
  }

  exportToExcel(): void {
    this.excelExportService.exportAsExcelFile(this.personales, 'Personal');
  }

  getPersonales(): void {
    this.personalService.getPersonales().subscribe(
      data => {
        if (this.userInfo.perfil === 'usuario') {
          this.personales = data.filter(personal => personal.legajo === this.userInfo.legajo);
        } else {
          this.personales = data.filter(personal => personal.legajo === this.userInfo.legajo);;
        }
        this.personales.forEach(personal => {
          this.cargarUnidadRegionalNombre(personal);
          this.cargarJuridiccionNombre(personal);
        });
      },
      error => console.error('Error al obtener los personales:', error)
    );
  }

    showModal(): void {
    if (this.userInfo.perfil === 'usuario') {
      this.personal.legajo = this.userInfo.legajo;
    }
    const modal = new bootstrap.Modal(document.getElementById('modalPersonal')!);
    modal.show();
  }
  loadUnidadRegionales(): void {
    this.unidadRegionalService.getUnidadesRegionales().subscribe(
      data => this.unidadRegionales = data,
      error => console.error('Error al obtener las unidades regionales:', error)
    );
  }

  cargarUnidadRegionalNombre(personal: Personal): void {
    this.unidadRegionalService.getUnidadRegional(personal.unidad_regional_id).subscribe(
      (unidadRegional: UnidadRegional) => {
        personal.unidad_regional_nombre = unidadRegional.unidad_regional;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener unidad regional:', error.message);
      }
    );
  }

  cargarJuridiccionNombre(personal: Personal): void {
    this.dependenciaService.getDependencia(personal.DependenciaId.toString()).subscribe(
      (dependencia: Dependencia) => {
        personal.dependencia_nombre = dependencia.juridiccion;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener jurisdicción:', error.message);
      }
    );
  }

  
  cargarDependencias(unidad_regional_id: number): void {
    this.dependenciaService.getDependenciasByUnidadRegional(unidad_regional_id).subscribe(
      data => this.dependencias = data,
      error => console.error('Error al obtener las dependencias:', error)
    );
  }
  cargarDependenciaPorId(dependenciaId: number): void {
    this.dependenciaService.getDependencia(dependenciaId.toString()).subscribe(
      data => {
        this.dependencias = [data];
      },
      error => {
        this.mensajeError = 'Error al cargar la dependencia';
        Swal.fire('Error', 'Error al cargar la dependencia: ' + error.message, 'error');
      }
    );
  }

  buscarPersonalPorLegajo(): void {
    this.personalService.getPersonalByLegajo(this.legajo).subscribe(
      (data: Personal) => {
        this.personales = [data]; // Solo muestra el personal encontrado
        this.cargarUnidadRegionalNombre(data);
        this.cargarJuridiccionNombre(data);
        this.mensajeError = '';
      },
      (error: any) => {
        this.mensajeError = 'No se encontró al personal con el legajo proporcionado.';
        console.log('Error al buscar personal por legajo:');
        this.personales = []; // Limpia la lista si no se encuentra el personal
      }
    );
  }

  editarPersonal(personal: Personal): void {
    this.personal = { ...personal };
    this.isUpdating = true; // Establecer el estado de actualización
    this.openModalPersonal(); // Abrir el modal
    this.cargarDependenciaPorId(personal.DependenciaId); // Cargar la dependencia por ID
  }

  openModalPersonal(): void {
    const modalElement = document.getElementById('modalPersonal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  eliminarPersonal(id: string): void {
    this.personalService.deletePersonal(id).subscribe(
      () => {
        Swal.fire('Éxito', 'Personal eliminado con éxito', 'success');
        this.getPersonales();
      },
      error => console.error('Error al eliminar el personal:', error)
    );
  }

  resetForm(): void {
    this.personal = new Personal();
    this.legajo = '';
    this.mensajeError = '';
    this.isUpdating = false; // Restablecer el estado de actualización
  }

  verificarDuplicidadLegajo(legajo: string): void {
    this.personalService.getPersonalByLegajo(legajo).subscribe(
      (data: Personal) => {
        if (data && data.id !== this.personal.id) { // Verificar que el legajo pertenece a otro registro
          Swal.fire({
            icon: 'warning',
            title: 'Legajo ya existe',
            text: 'Ya existe un personal cargado con este legajo.',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.resetForm(); // Restablecer el formulario
            this.closeModalPersonal(); // Cerrar el modal
          });
        } else {
          this.guardarPersonal(true); // Permitir la creación si no existe duplicado
        }
      },
      (error) => {
        this.guardarPersonal(true); // Permitir la creación si no existe duplicado
      }
    );
  }

  closeModalPersonal(): void {
    const modalElement = document.getElementById('modalPersonal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }

  guardarPersonal(verificado: boolean = false): void {
    if (!verificado) {
      this.verificarDuplicidadLegajo(this.personal.legajo);
      return;
    }

    if (this.isUpdating) {
      this.personalService.updatePersonal(this.personal).subscribe(
        () => {
          Swal.fire('Éxito', 'Personal actualizado con éxito', 'success');
          this.getPersonales();
          this.resetForm();
          this.closeModalPersonal(); // Cerrar el modal después de actualizar
        },
        error => {
          console.error('Error al actualizar el personal:', error);
          Swal.fire('Error', 'Error al actualizar el personal, complete todos los campos', 'error');
        }
      );
    } else {
      this.personalService.createPersonal(this.personal).subscribe(
        () => {
          Swal.fire('Éxito', 'Personal creado con éxito', 'success');
          this.getPersonales();
          this.resetForm();
          this.closeModalPersonal(); // Cerrar el modal después de crear
        },
        error => {
          console.error('Error al crear el personal:', error);
          Swal.fire('Error', 'Error al crear el personal', 'error');
        }
      );
    }
  }
}