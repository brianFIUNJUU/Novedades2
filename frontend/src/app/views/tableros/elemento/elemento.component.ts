import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Agrega esto
import { NovedadElemento } from '../../../models/novedad_elemento';
import { NovedadElementoService } from '../../../services/novedad_elemento.service';
import { environment } from '../../../environments/environment'; 
import { ExcelExportService } from '../../../services/excel-export.service';
import { AuthenticateService } from '../../../services/authenticate.service'; // Importar el servicio de autenticación
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-elemento',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Agrega CommonModule aquí
  templateUrl: './elemento.component.html',
  styleUrl: './elemento.component.scss'
})
export class ElementoComponent implements OnInit {
  elementosCargados: NovedadElemento[] = [];
  fechaFiltroUsuarioInicio: string = '';
  fechaFiltroUsuarioFin: string = '';
  opcionFiltro: string = '';
  mostrarFiltroFecha: boolean = false;

  constructor(private novedadElementoService: NovedadElementoService,
              private excelExportService: ExcelExportService,
              private authenticateService: AuthenticateService // Inyectar el servicio de autenticación
  ) {}


  ngOnInit(): void {
    this.getTodosElementos();
  }

        onFiltroChange(event: any): void {
      this.mostrarFiltroFecha = this.opcionFiltro === 'fecha';
    
      // Filtros por tipo
      if (this.opcionFiltro === 'Procedencia dudosa' || this.opcionFiltro === 'Sustraido a la victima') {
        this.novedadElementoService.getElementosByTipo(this.opcionFiltro).subscribe({
          next: (data) => this.elementosCargados = data,
          error: (err) => console.error('Error al filtrar por tipo', err)
        });
      }
      // Filtros por estado
      else if (
        this.opcionFiltro === 'recuperado' ||
        this.opcionFiltro === 'no recuperado' ||
        this.opcionFiltro === 'secuestrado'
      ) {
        this.novedadElementoService.getElementosByEstado(this.opcionFiltro).subscribe({
          next: (data) => this.elementosCargados = data,
          error: (err) => console.error('Error al filtrar por estado', err)
        });
      }
      // Filtro por últimos 3 meses
      else if (this.opcionFiltro === 'ultimos 3 meses') {
        this.getTodosElementos();
      }
    }
  
  filtrarElementosPorFecha(): void {
    if (this.fechaFiltroUsuarioInicio && this.fechaFiltroUsuarioFin) {
      this.novedadElementoService.getElementosByFecha(this.fechaFiltroUsuarioInicio, this.fechaFiltroUsuarioFin)
        .subscribe({
          next: (data) => this.elementosCargados = data,
          error: (err) => console.error('Error al filtrar por fecha', err)
        });
    }
  }
  getTodosElementos(): void {
    this.novedadElementoService.getTodosElementos().subscribe({
      next: (data) => {
        this.elementosCargados = data; // Al inicio, todos los elementos están cargados
      },
      error: (err) => console.error('Error al cargar elementos', err)
    });
  }

  // exportaion de excel de elementos cargados en la novedades
 exportarElementosAExcel(): void {
    this.excelExportService.exportAsExcelFile(this.elementosCargados, 'elementos_cargados');
  }

}