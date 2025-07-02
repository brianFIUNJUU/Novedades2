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
import { NovedadesPersonaService } from '../../../services/novedades_persona.service'; // importa el service
import { PAISES } from '../../../models/paises'; // Importa la lista de países
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Novedades } from '../../../models/novedades'; // Importa el modelo de Novedades
import { ArchivoPersona } from '../../../models/archivo_persona'; // Importa el modelo de ArchivoPersona
import { ArchivoPersonaService } from '../../../services/archivo_persona.service'; // Importa el servicio de ArchivoPersona
import { environment } from '../../../environments/environment'; 

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
  userType: string = ''; // Variable para almacenar el tipo de usuario
  userInfo: any; // Variable para almacenar la información del usuario
  victimarios: any[] = [];
  persona_edad_valor: number = 0;
persona_edad_unidad: string = 'años'; // por defecto
  paises = PAISES; // Lista de países
filteredNovedades: any[] = []; // Agrega esta propiedad arriba
   archivosPersonas: {
    file: File | null,
    mimeType: string,
    fileName: string,
    url?: string,
    previewUrl?: string
  }[] = [
    { file: null, mimeType: '', fileName: '' }
  ];
  mostrarCamara: boolean = false;

streamNovedad!: MediaStream;
stream!: MediaStream;
videoElementRef!: HTMLVideoElement;
  // Variable para almacenar los dispositivos de cámara disponibles
availableCameras: MediaDeviceInfo[] = [];
currentCameraIndex: number = 0;
private scrollPosition: number = 0; // Almacena la posición del scroll
  constructor(
    private personaService: PersonaService,
    private departamentoService: DepartamentoService,
    private localidadService: LocalidadService,
    public domSanitizer: DomSanitizer,
    private authService: AuthenticateService,
    private novedadesPersonaService: NovedadesPersonaService,
    private cdr: ChangeDetectorRef,
          private router: Router,
    private archivoPersonaService: ArchivoPersonaService,
      private excelExportService: ExcelExportService,
      
  ) { }

  ngOnInit(): void {
    this.getVictimarios();
    this.cargarDepartamentos();
    this.persona.departamento_id = null;
    this.persona.localidad_id = null;
    this.authService.getUserType().subscribe(userType => {
      console.log('Tipo de usuario:', userType); // Mostrar el tipo de usuario en la consola
      this.userType = userType ? userType.trim() : ''; // Asigna el tipo de usuario desde el servicio de autenticación y elimina espacios adicionales
    });
    this.authService.getUserInfo().subscribe(userInfo => {
    this.userInfo = userInfo;
  });
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
  verNovedad(id: string): void {
    const modalElement = document.getElementById('modalPresentacionPersona');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
    this.router.navigate(['/tableros/novedades', id], { queryParams: { view: 'readonly' } });
  }
    verVictimario(victimario: any): void {
      this.persona = { ...victimario.persona };
      this.cargarArchivosPersona(this.persona); // Si quieres mostrar fotos
    
      // Llama al service para obtener las novedades asociadas a la persona
      this.novedadesPersonaService.getNovedadesByPersona(this.persona.id).subscribe(
        (novedades) => {
          this.filteredNovedades = novedades;
        },
        (error) => {
          this.filteredNovedades = [];
          console.error('Error al obtener novedades de la persona:', error);
        }
      );
    
      const modalElement = document.getElementById('modalPresentacionPersona');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }

  getVictimarios(): void {
    this.novedadesPersonaService.getVictimarios().subscribe(
      (data) => {
        this.victimarios = data;
      },
      (error) => {
        console.error('Error al obtener victimarios:', error);
      }
    );
  }
  getPersonas(): void {
    this.personaService.getPersonas().subscribe(
      (data: Persona[]) => {
        this.personas = data.map(persona => {
          // Convertir todo a string para evitar conflictos de tipos
          const departamentoId = persona.departamento_id ? persona.departamento_id.toString() : '';
          const localidadId = persona.localidad_id ? persona.localidad_id.toString() : '';
  
          const departamento = this.departamentos.find(dep => dep.id.toString() === departamentoId);
          const localidad = this.localidades.find(loc => loc.id.toString() === localidadId);
  
          // Asignar los nombres de departamento y localidad
          persona.departamento_nombre = departamento ? departamento.nombre : 'Sin departamento';
          persona.localidad_nombre = localidad ? localidad.nombre : 'Sin localidad';
  
          return persona;
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener personas:', error.message);
        Swal.fire('Error', 'Error al obtener personas: ' + error.message, 'error');
      }
    );
  }
      getPersonasResidentes(): void {
      this.novedadesPersonaService.getResidenteVictimario().subscribe(
        (data: any[]) => {
          this.victimarios = data;
        },
        (error) => {
          console.error('Error al obtener victimarios residentes:', error);
        }
      );
    }
    
    getPersonasExtranjeras(): void {
      this.novedadesPersonaService.getExtranjeroVictimario().subscribe(
        (data: any[]) => {
          this.victimarios = data;
        },
        (error) => {
          console.error('Error al obtener victimarios extranjeros:', error);
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
  
       onDepartamentoChange() {
      const dep = this.departamentos.find(d => Number(d.id) === Number(this.persona.departamento_id));
      this.persona.departamento_nombre = dep ? dep.nombre : '';
      if (this.persona.departamento_id) {
        this.cargarLocalidades(this.persona.departamento_id);
      }
    }
    
    onLocalidadChange() {
      const loc = this.localidades.find(l => String(l.id) === String(this.persona.localidad_id));
      this.persona.localidad_nombre = loc ? loc.nombre : '';
    }
        private asignarEdadAuxiliarPersona(persona: Persona): void {
      let edad_valor = 0;
      let edad_unidad = 'años';
      if (persona && persona.edad) {
        const partes = persona.edad.split(' ');
        edad_valor = Number(partes[0]) || 0;
        edad_unidad = partes[1] || 'años';
      }
      this.persona_edad_valor = edad_valor;
      this.persona_edad_unidad = edad_unidad;
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
                this.cargarArchivosPersona(data); // <--- ¡AQUÍ!

          this.asignarEdadAuxiliarPersona(data);
          if (data.localidad_id !== null && data.localidad_id !== undefined) {
            this.cargarLocalidadPorId(+data.localidad_id); // Cargar la localidad por ID
          }

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
  // Nuevo método para subir archivos

    guardarPersona(verificado: boolean = false): void {
      if (!verificado) {
this.verificarDuplicidadDNI(this.persona.dni || '');
        return;
      }
      this.asignarEdad(); // <--- AGREGA ESTA LÍNEA
      if (this.persona.nombre ) {  
        if (this.persona.id) {
                this.asignarEdad(); // <-- También aquí, por claridad

          console.log('Datos enviados para actualizar persona:', JSON.stringify(this.persona, null, 2)); // Agregar un log para ver los datos enviados
        this.personaService.updatePersona(this.persona).subscribe(
            (response) => {
              Swal.fire({
                icon: 'success',
                title: 'Persona actualizada',
                text: 'Los datos de la persona han sido actualizados exitosamente.',
              });
             this.subirArchivosPersona(this.persona.id);
              this.getVictimarios(); // <--- Cambia aquí
              this.resetFormulario();
              this.cerrarModalPersona();
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
                this.asignarEdad(); // <-- También aquí, por claridad

          console.log('Datos enviados para crear persona:', JSON.stringify(this.persona, null, 2)); // Agregar un log para ver los datos enviados
          this.personaService.createPersona(this.persona).subscribe(
            (response) => {
          const personaId = response.id || response.persona?.id; // Ajusta según tu backend
          this.subirArchivosPersona(personaId);
          Swal.fire({ icon: 'success', title: 'Persona guardada', text: 'La persona ha sido guardada exitosamente.' });
          this.getVictimarios();
          this.resetFormulario();
          this.cerrarModalPersona();
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
  
          text: 'El campo Nombre es obligatorio para guardar.'
        });
      }
    }
  cerrarModalPersona(): void {
    const modalElement = document.getElementById('modalPersona');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) modal.hide();
    }
  }
  asignarEdad() {
    this.persona.edad = `${this.persona_edad_valor} ${this.persona_edad_unidad}`;
  }
     verificarDuplicidadDNI(dni: string): void {
      this.personaService.getPersonaByDni(dni).subscribe(
        (data: Persona) => {
          if (data) {
            // Si estoy editando y el id es el mismo, no es error
            if (this.persona.id && data.id === this.persona.id) {
              this.guardarPersona(true); // Permite actualizar
            } else {
              // Si el id es diferente, sí es duplicado
              Swal.fire({
                icon: 'warning',
                title: 'Persona ya existe',
                text: 'Ya existe una persona cargada con este DNI.',
              });
            }
          } else {
            this.guardarPersona(true); // No existe, permite crear
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
      if (this.persona.nombre ) {
 
        console.log('Datos enviados para actualizar persona:', JSON.stringify(this.persona, null, 2)); // Agregar un log para ver los datos enviados
         this.personaService.updatePersona(this.persona).subscribe(
              (response) => {
                Swal.fire({
                  icon: 'success',
                  title: 'Persona actualizada',
                  text: 'Los datos de la persona han sido actualizados exitosamente.',
                });
                this.getVictimarios(); // <-- Cambia aquí
                this.resetFormulario();
                this.cerrarModalPersona();
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
          text: 'El campo Nombre es obligatorio para actualizar.',
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
  this.asignarEdadAuxiliarPersona(persona);
  this.cargarArchivosPersona(persona); // <--- ¡AQUÍ!
  this.isUpdating = true;
  this.showModal();
  if (persona.localidad_id !== null && persona.localidad_id !== undefined) {
    this.cargarLocalidadPorId(+persona.localidad_id);
  }
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
    this.asignarEdadAuxiliarPersona(persona);
    this.cargarArchivosPersona(persona); // <-- AGREGA ESTA LÍNEA
    this.isUpdating = false;
    this.showModal();
  }
    resetFormulario(): void {
    this.isUpdating = false;
    this.persona = new Persona();
    this.persona_edad_valor = 0;
    this.persona_edad_unidad = 'años';
    this.resetArchivosPersona();
  }
   showModal(): void {
    const modalElement = document.getElementById('modalPersona');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
   onExtranjeroChange(valor: boolean) {
  if (!valor) {
    this.persona.nacionalidad = '';
    this.persona.provincia = '';
  }
}
  limpiarDni(event: any) {
    this.persona.dni = event.target.value.replace(/[^0-9]/g, '');
  }
    exportarVictimariosAExcel(): void {
    const data = this.victimarios.map((item: any) => ({
      'ID Persona': item.persona_id,
      'Nombre': item.persona?.nombre || '',
      'Apellido': item.persona?.apellido || '',
      'DNI': item.persona?.dni || '',
      'Sexo': item.persona?.sexo || '',
      'Genero': item.persona?.genero || '',
      'Edad': item.persona?.edad ||'',
      'Departamento': item.persona?.departamento_nombre || '',
      'Localidad': item.persona?.localidad_nombre || '',
      'Domicilio': item.persona?.domicilio || '',
      'Teléfono': item.persona?.telefono || '',
      'EXTRANJERO': item.persona?.extranjero ? 'Sí' : 'No',
      'Provincia': item.persona?.provincia || '',
      'Nacionalidad': item.persona?.nacionalidad || '',
      'Comparendo': item.persona?.comparendo ? 'Sí tiene' : 'No se sabe',
      'Demorado': item.persona?.demorado ? 'Sí' : 'No',
      'Cantidad de Novedades': item.cantidad || '',
      'IDs de Novedades': item.novedades_ids || ''
    }));
  
    this.excelExportService.exportAsExcelFile(data, 'victimarios');
  }
  ///////////////////////////////////////////////////////
  subirArchivosPersona(personaId: number): void {
  this.archivosPersonas.forEach((archivo) => {
    if (archivo.file) {
      const formData = new FormData();
      formData.append('archivo', archivo.file, archivo.fileName);
      this.archivoPersonaService.subirArchivo(personaId, formData).subscribe({
        next: (res) => console.log('Archivo subido:', res),
        error: (err) => console.error('Error al subir archivo:', err)
      });
    }
    // Ya no necesitas manejar base64 ni blobs aquí
  });
}
cargarArchivosPersona(persona: Persona): void {
  // Limpia el array antes de cargar nuevos archivos
  this.archivosPersonas = [];
  this.archivoPersonaService.listarArchivosPorPersona(persona.id).subscribe(
    (archivos: ArchivoPersona[]) => { 
      this.archivosPersonas = archivos.map(a => ({
        file: null,
        mimeType: a.tipo,
        fileName: a.nombre,
        url: `${environment.apiUrl.replace('/api', '')}/${a.ruta.replace(/\\/g, '/')}`
      }));
    }
  );
}
   onFileSelectedPersona(event: any, index: number): void {
    const file: File = event.target.files[0];
    if (file) {
      // Libera el blob anterior si existe
          if (typeof this.archivosPersonas[index].previewUrl === 'string') {
        URL.revokeObjectURL(this.archivosPersonas[index].previewUrl!);
      }
      this.archivosPersonas[index] = {
        file: file,
        mimeType: file.type,
        fileName: file.name,
        previewUrl: URL.createObjectURL(file) // <-- Guarda la URL aquí
      };
      this.cdr.detectChanges();
    }
  }
  agregarArchivoPersona(): void {
    if (this.archivosPersonas.length < 3) {
      this.archivosPersonas.push({ file: null, mimeType: '', fileName: '' });
    } else {
      Swal.fire('Límite alcanzado', 'No puedes agregar más de 3 archivos.', 'warning');
    }
  }
eliminarArchivoCargadoP(index: number): void {
  const archivo = this.archivosPersonas[index];

  // Libera el blob local si existe
  if (archivo.previewUrl) {
    URL.revokeObjectURL(archivo.previewUrl);
  }

  if (archivo.url && archivo.fileName) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'El archivo será eliminado permanentemente.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.archivoPersonaService.listarArchivosPorPersona(this.persona.id).subscribe(archivos => {
          const archivoBD = archivos.find(a => a.nombre === archivo.fileName);
          if (archivoBD) {
            this.archivoPersonaService.borrarArchivo(archivoBD.id).subscribe(() => {
              this.cargarArchivosPersona(this.persona); // Refresca la lista
              Swal.fire('Eliminado', 'El archivo ha sido eliminado.', 'success');
            });
          }
        });
      }
    });
  } else {
    // Si es un archivo nuevo (no subido aún), solo límpialo del array
    this.archivosPersonas[index] = { file: null, mimeType: '', fileName: '' };
  }
}
  resetArchivosPersona(): void {
    this.archivosPersonas = [
      { file: null, mimeType: '', fileName: '' },
      { file: null, mimeType: '', fileName: '' },
      { file: null, mimeType: '', fileName: '' }
    ];
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
      Swal.fire('Límite alcanzado', 'No puedes agregar más de 3 archivos ar.', 'warning');
    }
  }
   
  obtenerIndiceDisponible(): number {
    // Permite hasta 3 archivos
    if (this.archivosPersonas.length < 3) {
      this.archivosPersonas.push({ file: null, mimeType: '', fileName: '' });
      return this.archivosPersonas.length - 1;
    }
    // Busca un slot vacío
    for (let i = 0; i < this.archivosPersonas.length; i++) {
      if (!this.archivosPersonas[i].file && !this.archivosPersonas[i].url) {
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
  
      canvas.toBlob((blob) => {
        if (blob) {
          const index = this.obtenerIndiceDisponible();
          if (index !== -1) {
            const file = new File([blob], `foto_${index + 1}.png`, { type: 'image/png' });
            this.archivosPersonas[index] = {
              file: file,
              mimeType: 'image/png',
              fileName: `foto_${index + 1}.png`,
              previewUrl: URL.createObjectURL(file) // <-- AGREGA ESTA LÍNEA
            };
            this.cerrarCamara();
          } else {
            Swal.fire('Límite alcanzado', 'No puedes agregar más de 3 archivos.', 'warning');
          }
        }
      }, 'image/png');
    }
  }
  @ViewChild('videoElement', { static: false }) set videoElement(element: ElementRef<HTMLVideoElement>) {
    if (element) {
      this.videoElementRef = element.nativeElement;
    }
  }
getFilePreviewUrl(file: File | null): string | null {
  return file ? URL.createObjectURL(file) : null;
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
}