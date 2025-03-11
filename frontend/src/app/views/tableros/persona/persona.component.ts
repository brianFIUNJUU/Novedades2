import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { DepartamentoService } from '../../../services/departamento.service';
import { LocalidadService } from '../../../services/localidad.service';
import { Persona } from '../../../models/persona';
import { Departamento } from '../../../models/departamento';
import { Localidad } from '../../../models/localidad';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import * as bootstrap from 'bootstrap';
import { ExcelExportService } from '../../../services/excel-export.service';
import { AuthenticateService } from '../../../services/authenticate.service'; // Importar el servicio de autenticación
import Swal from 'sweetalert2';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-persona',
   standalone: true,
 imports: [CommonModule, FormsModule],
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  personas: Persona[] = [];
  persona: Persona = new Persona();
  departamentos: Departamento[] = [];
  localidades: Localidad[] = [];
  isUpdating: boolean = false;
  mensajeError: string = '';

  archivosPersonas: { file: File | null, base64: string, mimeType: string, fileName: string }[] = [
    { file: null, base64: '', mimeType: '', fileName: '' }
  ];

  constructor(
    private personaService: PersonaService,
    private departamentoService: DepartamentoService,
    private localidadService: LocalidadService,
    public domSanitizer: DomSanitizer,
    private authService: AuthenticateService,
      
  ) { }

  ngOnInit(): void {
    this.getPersonas();
    this.cargarDepartamentos();
  }

  getPersonas(): void {
    this.personaService.getPersonas().subscribe(
      (data: Persona[]) => {
        this.personas = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener personas:', error.message);
        Swal.fire('Error', 'Error al obtener personas: ' + error.message, 'error');
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
  
    cargarLocalidades(departamentoId:number): void {
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
  
    buscarPersonaPorDNI(dni: string): void {
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
          this.persona = data;
          this.cargarArchivosPersona(data); // Cargar los archivos de la persona
          this.cargarLocalidadPorId(+data.localidad_id); // Cargar la localidad por ID

        },
        (error) => {
          if (error.status === 404) {
            Swal.fire({
              icon: 'info',
              title: 'Persona no encontrada',
              text: `No se encontró ninguna persona con DNI ${dni}.`,
            });
            this.resetFormulario(); // Vaciar el formulario si no se encuentra la persona
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Ocurrió un error al buscar la persona.',
            });
            this.resetFormulario(); // Vaciar el formulario si no se encuentra la persona
          }
        }
      );
    }
  
    guardarPersona(verificado: boolean = false): void {
      if (!verificado) {
        this.verificarDuplicidadDNI(this.persona.dni);
        return;
      }
  
      if (this.persona.nombre && this.persona.apellido && this.persona.dni) {
        this.persona.foto = this.archivosPersonas[0]?.base64 || '';
        this.persona.foto1 = this.archivosPersonas[1]?.base64 || '';
        this.persona.foto2 = this.archivosPersonas[2]?.base64 || '';
        this.persona.foto_tipo = this.archivosPersonas[0]?.mimeType || '';
        this.persona.foto_tipo1 = this.archivosPersonas[1]?.mimeType || '';
        this.persona.foto_tipo2 = this.archivosPersonas[2]?.mimeType || '';
        this.persona.foto_nombre = this.archivosPersonas[0]?.fileName || '';
        this.persona.foto_nombre1 = this.archivosPersonas[1]?.fileName || '';
        this.persona.foto_nombre2 = this.archivosPersonas[2]?.fileName || '';
  
        if (this.persona.id) {
          console.log('Datos enviados para actualizar persona:', JSON.stringify(this.persona, null, 2)); // Agregar un log para ver los datos enviados
          this.personaService.updatePersona(this.persona).subscribe(
            (response) => {
              Swal.fire({
                icon: 'success',
                title: 'Persona actualizada',
                text: 'Los datos de la persona han sido actualizados exitosamente.',
              });
              this.getPersonas();
              this.resetFormulario();
            },
            (error) => {
              console.error('Error al actualizar persona:', error);
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error, datos incompletos o la persona ya ha sido cargada, busquela.',
              });
            }
          );
        } else {
          console.log('Datos enviados para crear persona:', JSON.stringify(this.persona, null, 2)); // Agregar un log para ver los datos enviados
          this.personaService.createPersona(this.persona).subscribe(
            (response) => {
              Swal.fire({
                icon: 'success',
                title: 'Persona guardada',
                text: 'La persona ha sido guardada exitosamente.',
              });
              this.getPersonas();
              this.resetFormulario();
            },
            (error) => {
              console.error('Error al crear persona:', error);
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al crear persona. ' + error.error.msg,
              });
            }
          );
        }
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Datos incompletos',
          text: 'Por favor, complete todos los campos requeridos.',
        });
      }
    }
  
    verificarDuplicidadDNI(dni: string): void {
      this.personaService.getPersonaByDni(dni).subscribe(
        (data: Persona) => {
          if (data) {
            Swal.fire({
              icon: 'warning',
              title: 'Persona ya existe',
              text: 'Ya existe una persona cargada con este DNI. ¿Deseas actualizar sus datos?',
              showCancelButton: true,
              confirmButtonText: 'Sí, actualizar',
              cancelButtonText: 'No, buscar',
            }).then((result) => {
              if (result.isConfirmed) {
                this.persona = data;
                this.isUpdating = true;
                this.showModal();
              }
            });
          } else {
            this.guardarPersona(true); // Llama a guardarPersona con un flag para indicar que la verificación ya se hizo
          }
        },
        (error) => {
          console.error('Error al verificar duplicidad de DNI:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al verificar el DNI.',
          });
        }
      );
    }
  
    actualizarPersona(): void {
      if (this.persona.nombre && this.persona.apellido && this.persona.dni) {
        // Asignar los archivos a la persona
        this.persona.foto = this.archivosPersonas[0]?.base64 || '';
        this.persona.foto1 = this.archivosPersonas[1]?.base64 || '';
        this.persona.foto2 = this.archivosPersonas[2]?.base64 || '';
        this.persona.foto_tipo = this.archivosPersonas[0]?.mimeType || '';
        this.persona.foto_tipo1 = this.archivosPersonas[1]?.mimeType || '';
        this.persona.foto_tipo2 = this.archivosPersonas[2]?.mimeType || '';
        this.persona.foto_nombre = this.archivosPersonas[0]?.fileName || '';
        this.persona.foto_nombre1 = this.archivosPersonas[1]?.fileName || '';
        this.persona.foto_nombre2 = this.archivosPersonas[2]?.fileName || '';
  
        console.log('Datos enviados para actualizar persona:', JSON.stringify(this.persona, null, 2)); // Agregar un log para ver los datos enviados
        this.personaService.updatePersona(this.persona).subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: 'Persona actualizada',
              text: 'Los datos de la persona han sido actualizados exitosamente.',
            });
            this.getPersonas();
            this.resetFormulario();
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
          title: 'Datos incompletos',
          text: 'Por favor, complete todos los campos requeridos.',
        });
      }
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
  
   // Métodos para los botones de eliminar, editar y ver persona
// Métodos para los botones de eliminar, editar y ver persona
editarPersona(persona: Persona): void {
  this.persona = { ...persona };
  this.cargarArchivosPersona(persona); // Cargar los archivos de la persona
  this.isUpdating = true;
  this.showModal();
  this.cargarLocalidadPorId(+persona.localidad_id); // Cargar la localidad por ID

}
  eliminarPersona(id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.personaService.deletePersona(id).subscribe(
          (response) => {
            Swal.fire('Eliminado', 'La persona ha sido eliminada.', 'success');
            this.getPersonas();
          },
          (error) => {
            console.error('Error al eliminar persona:', error);
            Swal.fire('Error', 'Error al eliminar persona.', 'error');
          }
        );
      }
    });
  }

  verPersona(persona: Persona): void {
    this.persona = { ...persona };
    this.isUpdating = false;
    this.showModal();
  }
  
   resetFormulario(): void {
    this.isUpdating = false;
    this.persona = new Persona();
     this.resetArchivosPersona(); // Restablecer los archivos de la persona
 
   }
   showModal(): void {
    const modalElement = document.getElementById('modalPersona');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
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
}