import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExcelExportService } from '../../../services/excel-export.service';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import * as bootstrap from 'bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Cuadrante } from '../../../models/cuadrante';
import {CuadranteService} from '../../../services/cuadrante.service';
import {OperativoService} from '../../../services/operativo.services';
import {Operativos} from '../../../models/operativos';
import {OperativoCuadranteService} from '../../../services/operativo_cuadrante.services';
import {OperativoCuadrante} from '../../../models/operativo_cuadrante';
import {NovedadesService} from '../../../services/novedades.service';
import {Novedades} from '../../../models/novedades';
import {OperativoPersonalService} from '../../../services/operativo_personal.services';
import {OperativoPersonal} from '../../../models/operativo_personal';
import {PersonalService} from '../../../services/personal.service';
import {Personal} from '../../../models/personal';
import Swal from 'sweetalert2';
import { AuthenticateService } from '../../../services/authenticate.service';
import html2canvas from 'html2canvas';
import 'leaflet-easyprint';




@Component({
  selector: 'app-distribucionlist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './distribucionlist.component.html',
  styleUrl: './distribucionlist.component.scss'
})
export class DistribucionlistComponent implements OnInit {
  fechaFiltro: string = '';
  idFiltro: string = '';
  map!: L.Map;
  marker!: L.Marker;
  novedades: Novedades[] = [];
  operativos: Operativos[] = [];
  operativosFiltrados: any[] = [...this.operativos];
    userType: string = 'administrador'; // Ajusta esto según tu lógica de autenticación 
   userInfo: any = {};
  usuarioNombre: string = '';
  operativoIdActual: string | null = null;

  usuarioLegajo: string = '';
  iconosGrupos: { [grupo: string]: L.Icon } = {
    'manos_libres': L.icon({ iconUrl: 'assets/policia.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    'upcar': L.icon({ iconUrl: 'assets/upcar.jpg', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    'contravencional': L.icon({ iconUrl: 'assets/contravencional.jpg', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
    'grupo_dinamico': L.icon({ iconUrl: 'assets/grupo_dinamico.jpg', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] })
  };
  unidadesRegionales: number[] = [1,2,3,4,5,6,7,8];
  unidadFiltro: number | '' = '';
  fechaInicioFiltro: string = '';
  fechaFinFiltro: string = '';
  // distribucionlist.component.ts
  tipoFiltro: string = 'ultimos7'; // valor por defecto
  // distribucionlist.component.ts
    mostrarFiltrosAvanzados: boolean = false;
        marcadores: L.Marker[] = [];
  constructor(
    private excelExportService: ExcelExportService,
    private router:Router,
    private operativoService: OperativoService,
    private cuadranteService: CuadranteService,
    private operativoCuadranteService: OperativoCuadranteService,
    private operativoPersonalService: OperativoPersonalService,
    private personalService: PersonalService,
    private route: ActivatedRoute,
    private authService: AuthenticateService,
    private novedadesService: NovedadesService

    ) { }
    
    
    ngOnInit(): void {
      this.authService.getUserInfo().subscribe(userInfo => {
        this.usuarioNombre = userInfo.nombre;
        this.userInfo = userInfo;
        this.usuarioLegajo = userInfo.legajo;
    
        // Mostrar filtros solo para administrador o usuarioDOP
        this.mostrarFiltrosAvanzados = 
          userInfo.perfil === 'administrador' || userInfo.perfil === 'usuarioDOP';
    
        if (!this.mostrarFiltrosAvanzados) {
          this.getOperativosPorLegajo(this.usuarioLegajo);
        } else {
          this.ultimos7Dias();
        }
      });
    }
  ngAfterViewInit(): void {
    // Inicializar el mapa cuando se muestra el modal
    const modalElement = document.getElementById('modalMapa');
    if (modalElement) {
      modalElement.addEventListener('shown.bs.modal', () => {
        this.initMap();
      });
    }
  }
onTipoFiltroChange() {
  if (this.tipoFiltro === 'todos') {
    this.cargarOperativos();
    this.unidadFiltro = '';
    this.fechaInicioFiltro = '';
    this.fechaFinFiltro = '';
  } else if (this.tipoFiltro === 'ultimos7') {
    this.ultimos7Dias();
    this.unidadFiltro = '';
    this.fechaInicioFiltro = '';
    this.fechaFinFiltro = '';
  }
  // Si agregas más filtros, puedes manejarlos aquí
}
getOperativosPorLegajo(legajo: string): void {
    this.operativoService.getOperativosPorLegajo(legajo).subscribe({
      next: (data: Operativos[]) => {
        this.operativosFiltrados = data;
      },
      error: (err) => {
        console.error('Error al cargar los operativos por legajo:', err);
      }
    });
  }
  ultimos7Dias(): void {
    this.operativoService.getOperativoByUltimos7Dias().subscribe({
      next: (data: Operativos[]) => {
        this.operativosFiltrados = data;
      },
      error: (err) => {
        console.error('Error al cargar los operativos de los últimos 7 días:', err);
      }
    });
  }
  cargarOperativos(): void {
    this.operativoService.getOperativos().subscribe({
      next: (data: Operativos[]) => {
        this.operativos = data;
        this.operativosFiltrados = [...this.operativos]; // para mostrar en tabla
      },
      error: (err) => {
        console.error('Error al cargar los operativos:', err);
      }
    });
  }
  eliminarOperativo(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.operativoService.deleteOperativo(id).subscribe({
          next: () => {
            this.operativos = this.operativos.filter(op => op.id !== id);
            this.operativosFiltrados = [...this.operativos];
            Swal.fire('Eliminado', 'El operativo ha sido eliminado.', 'success');
          },
          error: (err) => {
            console.error('Error al eliminar el operativo:', err);
            Swal.fire('Error', 'Hubo un error al intentar eliminar el operativo.', 'error');
          }
        });
      }
    });
  }
  eliminarOperativoCompleto(id: number): void {
  Swal.fire({
    title: '¿Eliminar operativo completamente?',
    text: 'Se eliminará el operativo y todos los datos relacionados (cuadrantes y personal). ¿Deseas continuar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar todo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.operativoService.eliminarOperativoCompleto(id).subscribe({
        next: () => {
          this.operativos = this.operativos.filter(op => op.id !== id);
          this.operativosFiltrados = [...this.operativos];
          Swal.fire('Eliminado', 'El operativo completo ha sido eliminado.', 'success');
        },
        error: (err) => {
          console.error('Error al eliminar el operativo completo:', err);
          Swal.fire('Error', 'Hubo un error al intentar eliminar el operativo completo.', 'error');
        }
      });
    }
  });
}

  editarOperativo(id: number): void {
  this.router.navigate(['/tableros/distribucionform'], { queryParams: { id } });
}

  
  // abrirModalMapa(operativo: any): void {
  //   const modalElement = document.getElementById('modalMapa');
  //   if (modalElement) {
  //     const modal = new bootstrap.Modal(modalElement);
  //     modal.show();
  //     this.cargarMapa(operativo.latitud, operativo.longitud);
  //   }
  // }
initMap(): void {
  if (!this.map) {
    this.map = L.map('mapaOperativo').setView([-24.18769889437684, -65.29709953331486], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors'
    }).addTo(this.map);
  }
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
  cerrarModal(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
        setTimeout(() => {
          (document.body as HTMLElement).focus();
        }, 300);
      }
    }
  }
  exportarExcel(): void {
    // Exporta los operativos filtrados
    this.excelExportService.exportAsExcelFile(this.operativosFiltrados, 'operativos_filtrados');
  }
  

  filtrarId(): void {
    if (this.idFiltro) {
      // this.operativosFiltrados = this.operativos.filter(operativo => operativo.id.toString().includes(this.idFiltro));
    } else {
      this.operativosFiltrados = [...this.operativos];
    }
  }

  filtrarPorUnidadYFecha(): void {
  if (!this.unidadFiltro) {
    Swal.fire('Atención', 'Seleccione una Unidad Regional.', 'warning');
    return;
  }
  this.operativoService.getOperativosByUnidad(this.unidadFiltro, this.fechaInicioFiltro, this.fechaFinFiltro).subscribe({
    next: (data: Operativos[]) => {
      this.operativosFiltrados = data;
    },
    error: (err) => {
      Swal.fire('Error', 'No se pudieron filtrar los operativos.', 'error');
    }
  });
}
onUnidadFiltroChange(): void {
  // Limpia fechas al cambiar unidad
  this.fechaInicioFiltro = '';
  this.fechaFinFiltro = '';
}
  navegarAFormularioNovedades(): void {
    this.router.navigate(['/tableros/novedades']);
  }
  navegarAFormularioNovedadList(): void {
    this.router.navigate(['/tableros/novedades-list']);
  }
  openModalNovedades(operativo: any) {
    this.novedadesService.getNovedadesByOperativo(operativo.id).subscribe({
      next: (data) => {
        this.novedades = data;
        setTimeout(() => {
          const modalElement = document.getElementById('novedadesModal');
          if (modalElement && (window as any).bootstrap) {
            const modal = new (window as any).bootstrap.Modal(modalElement);
            modal.show();
          }
        }, 100);
      },
      error: () => {
        this.novedades = [];
        alert('No se pudieron cargar las novedades del operativo.');
      }
    });
  }
   abrirModalMapa(operativo: any): void {
    // Si es admin o usuarioDOP, muestra todos los marcadores
    if (this.mostrarFiltrosAvanzados) {
      this.operativoPersonalService.getByOperativo(operativo.id).subscribe({
        next: (personalList) => {
          const modalElement = document.getElementById('modalMapa');
          if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
          }
          setTimeout(() => {
            this.mostrarPersonalEnMapa(personalList);
          }, 300);
        },
        error: () => {
          Swal.fire('Error', 'No se pudo cargar el personal del operativo.', 'error');
        }
      });
    } else {
      // Si es otro usuario, solo muestra su propio marcador
      this.operativoService.getPersonalDeOperativoPorLegajo(operativo.id, this.usuarioLegajo).subscribe({
        next: (personal) => {
          const modalElement = document.getElementById('modalMapa');
          if (modalElement) {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
          }
          setTimeout(() => {
            // Mostramos solo su marcador, pero la función espera un array
            this.mostrarPersonalEnMapa(personal ? [personal] : []);
          }, 300);
        },
        error: () => {
          Swal.fire('Error', 'No se pudo cargar tu ubicación en el operativo.', 'error');
        }
      });
    }
  }

    policiaIcon = L.icon({
    iconUrl: 'assets/policia.png',
    iconSize: [32, 32], // ajusta el tamaño si lo deseas
    iconAnchor: [16, 32], // el punto del icono que corresponde a la ubicación
    popupAnchor: [0, -32] // dónde se abre el popup respecto al icono
  });

  mostrarPersonalEnMapa(personalList: any[]): void {
    // Si el mapa ya existe, solo elimina los marcadores anteriores
    if (this.map) {
      this.marcadores.forEach(marker => this.map.removeLayer(marker));
      this.marcadores = [];
      this.map.setView([-24.1877, -65.2971], 12);
    } else {
      this.map = L.map('mapaOperativo').setView([-24.1877, -65.2971], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
    }
  
    personalList.forEach(personal => {
      if (personal.latitud && personal.longitud) {
        const lat = Number(personal.latitud);
        const lng = Number(personal.longitud);
        if (!isNaN(lat) && !isNaN(lng)) {
          const icono = this.iconosGrupos[personal.grupo?.toLowerCase()?.replace(' ', '_')] || this.iconosGrupos['manos_libres'];
          const marker = L.marker([lat, lng], { icon: icono }).addTo(this.map)
            .bindPopup(
              `<b>${personal.Personal?.apellido ?? ''} ${personal.Personal?.nombre ?? ''}</b><br>
              Legajo: ${personal.Personal?.legajo ?? ''}<br>
              Cuadrante: ${personal.OperativoCuadrante?.cuadrante_id ?? ''}<br>
              Grupo: ${personal.grupo ?? ''}`
            );
          this.marcadores.push(marker);
        }
      }
    });
  }
  descargarImagen(): void {
    const mapaDiv = document.getElementById('mapaOperativo');
    if (!mapaDiv) {
      Swal.fire('Error', 'No se encontró el mapa para descargar.', 'error');
      return;
    }
  
    Swal.fire({
      title: 'Cargando mapa...',
      text: 'Por favor espera mientras se genera la imagen.',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  
    if (this.map) {
      this.map.eachLayer((layer: any) => {
        if (layer instanceof L.TileLayer) {
          layer.redraw();
        }
      });
    }
    setTimeout(() => {
      html2canvas(mapaDiv, { useCORS: true, scale: 4 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'mapa-operativo-alta-resolucion.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        Swal.close();
      }).catch(error => {
        console.error("Error al capturar el mapa:", error);
        Swal.fire('Error', 'No se pudo capturar el mapa.', 'error');
      });
    }, 500);
  }
  navigateToUpdateForm(id: string): void {
    // Cierra el modal si está abierto
    const modalElement = document.getElementById('novedadesModal');
    if (modalElement && (window as any).bootstrap) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
    this.router.navigate(['/tableros/novedades', id]);
  }
deleteNovedad(id: string): void {
  this.novedadesService.deleteNovedad(id).subscribe(
    res => {
      console.log('Novedad eliminada', res);
      if (this.operativoIdActual) {
        this.novedadesService.getNovedadesByOperativo(this.operativoIdActual).subscribe(data => {
          this.novedades = data;
        });
      }
      Swal.fire('Éxito', 'Novedad eliminada con éxito', 'success');
    },
    error => {
      console.error('Error al eliminar novedad', error);
      Swal.fire('Error', 'Error al eliminar la novedad', 'error');
    }
  );
}
  
  /**
   * Permite editar/eliminar solo si:
   * - El usuario NO es perfil 'usuario' (es admin, supervisor, etc.)
   * - O si la novedad fue cargada hace menos de 24hs
   */
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
 
}
