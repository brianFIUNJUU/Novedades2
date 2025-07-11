import { Component, OnInit } from '@angular/core';
import { PartesDiariosService } from '../../../services/partesDiarios_services';
import { PartesDiarios } from '../../../models/partesDiarios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ExportRow } from '../../../models/export-row';
import * as L from 'leaflet';
import * as bootstrap from 'bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReactiveFormsModule } from '@angular/forms';
import { CellHookData, HAlignType, RowInput } from 'jspdf-autotable';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartesDiariosPersonalService } from '../../../services/partesDiarios_personal.services'; // importa el servicio
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
  selector: 'app-partes-diarios-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partes-diarios-list.component.html',
  styleUrl: './partes-diarios-list.component.scss'
})
export class PartesDiariosListComponent implements OnInit {
 parteDiario: PartesDiarios = new PartesDiarios();
  partesFiltrados: PartesDiarios[] = [];
  unidadesRegionales: string[] = [];
  unidadFiltro: string = '';
  fechaInicioFiltro: string = '';
  fechaFinFiltro: string = '';
  actaParteForm!: FormGroup; // <--- AGREGA ESTA LÍNEA
  personalParaActa: any[] = []; // <--- AGREGA ESTA LÍNEA
  modalNovedadInstance: any;
  itemsTemporales: Items[] = [];
  itemsAsociados: Items[] = [];
  nuevaNovedad: Items = new Items();
  editandoNovedad: boolean = false;
  novedadesEnRango: Novedades[] = [];
  indiceEditandoNovedad?: number;
    editando: boolean = false;

  constructor(private partesDiariosService: PartesDiariosService,
      private partesDiariosPersonalService: PartesDiariosPersonalService, // agrega esto
      private novedadesService: NovedadesService,
                private partesDiariosNovedadService: PartesDiariosNovedadService,
                private changeDetectorRef: ChangeDetectorRef,
                private zone: NgZone,
                private itemsService: ItemsService,
              private router: Router,
                private fb: FormBuilder // <--- AGREGA ESTO

  ) {}

  ngOnInit(): void {
    this.cargarPartes();
  }

  cargarPartes(): void {
    this.partesDiariosService.getAllPartesDiarios().subscribe({
      next: (data) => {
       
        this.partesFiltrados = data; // <-- Agrega esto
      }
    });
  }

editarParte(id: number): void {
  this.router.navigate(['/tableros/partes-diarios', id]);
}

eliminarParte(id: number): void {
  if (confirm('¿Está seguro de eliminar este parte diario?')) {
    this.partesDiariosService.deleteParteDiario(id.toString()).subscribe({
      next: () => {
        // Recarga la lista después de eliminar
        this.cargarPartes();
      },
      error: () => {
        alert('Error al eliminar el parte diario');
      }
    });
  }
}
  exportarExcel(): void {
    // Lógica para exportar a Excel
  }
// Método para cargar el personal de un parte
cargarPersonalParte(parteId: number): Promise<any[]> {
  return new Promise((resolve, reject) => {
    this.partesDiariosPersonalService.getPersonalByParteDiarioId(parteId).subscribe({
      next: (data) => {
        this.personalParaActa = data;
        resolve(data);
      },
      error: (err) => {
        this.personalParaActa = [];
        resolve([]);
      }
    });
  });
}
initParteDiarioForm(): void {
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
  const currentTime = today.toTimeString().slice(0, 5); // HH:mm

  this.actaParteForm = this.fb.group({
    fechaActa: [currentDate, Validators.required],

    tipoHora: [''],
    dependencia: [''],
    unidad_regional: [''],
    localidad: [''],
    departamento: [''],
    jefe: [''],
    jefe_op: [''],
    jefe_legajo: [''],
    jefe_op_legajo: [''],
    relato: [''],
    fecha_desde: [''],
    fecha_hasta: [''],
    hora_desde: [''],
    hora_hasta: [''],
    lapso_valor: [''],
    lapso_unidad: [''],
    mayores_detenidos: [0],
    menores_detenidos: [0],
    vehiculos_secuestrados: [0],
    motos_secuestradas: [0],
    destinario: [''],
  
    // Agrega aquí otros campos que necesites para el parte diario
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
            this.parteDiario.hora_hasta
          ).subscribe(novedades => {
            this.novedadesEnRango = novedades;
     
          });
        } else {
          this.novedadesEnRango = [];
      
        }
      }

            cargarItemsAsociados(parteId: number): Promise<any[]> {
        return new Promise((resolve, reject) => {
          this.itemsService.getItemsByParteDiarioId(parteId).subscribe({
            next: (items) => {
              this.itemsAsociados = items;
              resolve(items);
            },
            error: (err) => {
              this.itemsAsociados = [];
              resolve([]);
            }
          });
        });
      }
      
      cargarNovedadesEnRango(parte: any): Promise<any[]> {
        return new Promise((resolve, reject) => {
          if (parte.fecha_desde && parte.hora_desde && parte.fecha_hasta && parte.hora_hasta) {
            this.novedadesService.getNovedadesByFechaYHoraRango(
              parte.fecha_desde,
              parte.hora_desde,
              parte.fecha_hasta,
              parte.hora_hasta
            ).subscribe({
              next: (novedades) => {
                this.novedadesEnRango = novedades;
                resolve(novedades);
              },
              error: (err) => {
                this.novedadesEnRango = [];
                resolve([]);
              }
            });
          } else {
            this.novedadesEnRango = [];
            resolve([]);
          }
        });
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
async generateParteDiarioPDF(parteId: number): Promise<void> {
  await this.cargarPersonalParte(parteId);

  const parte = this.partesFiltrados.find(p => p.id === parteId);
  if (!parte) return;

  await this.cargarItemsAsociados(parteId);
  await this.cargarNovedadesEnRango(parte);

  if (!this.actaParteForm) {
    this.initParteDiarioForm();
  }
  if (parte) {
    this.actaParteForm.patchValue({
      fechaActa: parte.fecha_hasta || '',
      tipoHora: parte.tipoHora || '',
      dependencia: parte.dependencia_nombre || '',
      unidad_regional: parte.unidad_regional_nombre || '',
      jefe: parte.jefe || '',
      jefe_op: parte.jefe_op || '',
      jefe_legajo: parte.jefe_legajo || '',
      jefe_op_legajo: parte.jefe_op_legajo || '',
      fecha_desde: parte.fecha_desde || '',
      fecha_hasta: parte.fecha_hasta || '',
      hora_desde: parte.hora_desde || '',
      hora_hasta: parte.hora_hasta || '',
      lapso_valor: parte.lapso_valor || '',
      lapso_unidad: parte.lapso_unidad || '',
      mayores_detenidos: parte.mayores_detenidos || 0,
      menores_detenidos: parte.menores_detenidos || 0,
      vehiculos_secuestrados: parte.vehiculos_secuestrados || 0,
      motos_secuestradas: parte.motos_secuestradas || 0,
      destinario: parte.destinario || ''
    });
  }

  if (this.actaParteForm.invalid) {
    this.actaParteForm.markAllAsTouched();
    Swal.fire('Error', 'Por favor, completá todos los campos obligatorios.', 'error');
    return;
  }

  const imgUrl = 'assets/policiaa.png';
  fetch(imgUrl)
    .then(res => res.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgBase64 = reader.result as string;

        const formData = this.actaParteForm.value;
        const pdf = new jsPDF();

        const pageWidth = pdf.internal.pageSize.getWidth();
        const marginHorizontal = 20;
        const usablePageWidth = pageWidth - marginHorizontal * 2;
        const lineHeight = 6;

        // Título dinámico
        const fechaActa = new Date(formData.fechaActa + 'T00:00:00');
        const diaActa = fechaActa.getDate();
        const añoActa = fechaActa.getFullYear();
        const meses = [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        const mesTextoActa = meses[fechaActa.getMonth()];

        const titulo = `PARTE DIARIO POLICIAL ${formData.tipoHora?.toUpperCase() || ''} CORRESPONDIENTE A: ${formData.dependencia?.toUpperCase() || ''} (${formData.unidad_regional?.toUpperCase() || ''}), a los ${diaActa} días del mes de ${mesTextoActa} del ${añoActa}`;

        // --- Dibuja el logo ---
        const imgWidth = 25;
        const imgHeight = 28;
        const imgX = 15;
        const imgY = 15;
        pdf.addImage(imgBase64, 'PNG', imgX, imgY, imgWidth, imgHeight);

        // --- Dibuja el título justificado a la derecha del logo ---
        pdf.setFontSize(11);
        pdf.setFont("helvetica", "bold");
        const tituloX = marginHorizontal + imgWidth + 3;
        const tituloY = imgY + 2;
        const tituloMaxWidth = usablePageWidth - imgWidth - 5;
        const tituloDividido = pdf.splitTextToSize(titulo, tituloMaxWidth);

        for (let i = 0; i < tituloDividido.length; i++) {
          const lineaY = tituloY + i * lineHeight;
          pdf.text(tituloDividido[i], tituloX, lineaY, { align: 'justify', maxWidth: tituloMaxWidth });
          // Subraya solo el texto del título
          const textWidth = pdf.getTextWidth(tituloDividido[i]);
          pdf.setLineWidth(0.5);
          pdf.line(tituloX, lineaY + 1.5, tituloX + textWidth, lineaY + 1.5);
        }

        // Calcula la posición final del bloque de título
        const finalTituloY = tituloY + (tituloDividido.length * lineHeight);

        // Texto principal con saltos de línea
        const textoIntroduccion = [
          `AL SEÑOR: ${formData.destinario?.toUpperCase() || ''}`,
          'SU DESPACHO:',
          `LLEVO A SU CONOCIMIENTO NOVEDADES SURGIDAS DURANTE ${String(formData.lapso_valor).toUpperCase() || ''} ${formData.lapso_unidad?.toUpperCase() || ''} DE SERVICIO DE GUARDIA`
        ];

        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        const marginTop = finalTituloY + 4;
        let yActual = marginTop;

        // Primera línea: AL SEÑOR...
        const lineasSenor = pdf.splitTextToSize(textoIntroduccion[0], tituloMaxWidth);
        pdf.text(lineasSenor, tituloX, yActual, { align: 'left', maxWidth: tituloMaxWidth });
        yActual += lineasSenor.length * lineHeight;

        // Segunda línea: SU DESPACHO:
        const lineasDespacho = pdf.splitTextToSize(textoIntroduccion[1], tituloMaxWidth);
        pdf.text(lineasDespacho, tituloX, yActual, { align: 'left', maxWidth: tituloMaxWidth });
        yActual += lineasDespacho.length * lineHeight;

        // Tercera línea: el texto largo, justificado
        const parrafoJustificado = pdf.splitTextToSize(textoIntroduccion[2], tituloMaxWidth);
        pdf.text(parrafoJustificado, tituloX, yActual, { align: 'justify', maxWidth: tituloMaxWidth });
        yActual += parrafoJustificado.length * lineHeight;

        const finalTextoY = yActual;
        // --- TABLA DE PERSONAL ---
        const personal = this.personalParaActa || [];
        if (personal.length > 0) {
          const tablaTituloY = finalTextoY + lineHeight;
          pdf.setFontSize(11);
          pdf.setFont("helvetica", "bold");

          // Filtra por tipo de personal
          const personalSuperior = personal.filter(p => (p.tipo_personal || '').toUpperCase().includes('SUPERIOR'));
          const personalSubalterno = personal.filter(p => (p.tipo_personal || '').toUpperCase().includes('SUB'));

          let yTabla = tablaTituloY;

          // Tabla de PERSONAL SUPERIOR
          if (personalSuperior.length > 0) {
            pdf.setTextColor(0, 51, 102); // Azul oscuro para el título
            pdf.text("PERSONAL SUPERIOR:", marginHorizontal, yTabla);
            pdf.setTextColor(0, 0, 0); // Vuelve a negro para el resto
            autoTable(pdf, {
              startY: yTabla + lineHeight,
              margin: { left: marginHorizontal, right: marginHorizontal },
              head: [['Nombre y Apellido', 'Legajo', 'Rol', 'Situación', 'Tipo de Personal']],
              body: personalSuperior.map(p => [
                `${p.personal?.nombre || ''} ${p.personal?.apellido || ''}`,
                p.personal?.legajo || '',
                p.rol || '',
                p.situacion || '',
                p.tipo_personal || ''
              ]),
              theme: 'grid',
              headStyles: { fillColor: [0, 51, 102], textColor: 255 }, // Azul oscuro y texto blanco
              styles: { fontSize: 9, lineColor: [0, 51, 102], textColor: [0, 0, 0] }, // Bordes azul oscuro
              tableLineColor: [0, 51, 102], // Bordes de la tabla azul oscuro
              tableLineWidth: 0.5
            });
            yTabla = (pdf as any).lastAutoTable.finalY + lineHeight;
          }

          // Tabla de PERSONAL SUBALTERNO
          if (personalSubalterno.length > 0) {
            pdf.setTextColor(0, 51, 102); // Azul oscuro para el título
            pdf.text("PERSONAL SUBALTERNO:", marginHorizontal, yTabla);
            pdf.setTextColor(0, 0, 0); // Vuelve a negro para el resto
            autoTable(pdf, {
              startY: yTabla + lineHeight,
              margin: { left: marginHorizontal, right: marginHorizontal },
              head: [['Nombre y Apellido', 'Legajo', 'Rol', 'Situación', 'Tipo de Personal']],
              body: personalSubalterno.map(p => [
                `${p.personal?.nombre || ''} ${p.personal?.apellido || ''}`,
                p.personal?.legajo || '',
                p.rol || '',
                p.situacion || '',
                p.tipo_personal || ''
              ]),
              theme: 'grid',
              headStyles: { fillColor: [0, 51, 102], textColor: 255 }, // Azul oscuro y texto blanco
              styles: { fontSize: 9, lineColor: [0, 51, 102], textColor: [0, 0, 0] }, // Bordes azul oscuro
              tableLineColor: [0, 51, 102], // Bordes de la tabla azul oscuro
              tableLineWidth: 0.5
            });
            yTabla = (pdf as any).lastAutoTable.finalY + lineHeight;
          }

          // --- TÍTULO NOVEDADES ---
          const novedadesY = (pdf as any).lastAutoTable?.finalY
            ? (pdf as any).lastAutoTable.finalY + lineHeight * 2
            : yTabla + lineHeight * 2;

          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(13);

          pdf.text("NOVEDADES", pageWidth / 2, novedadesY, { align: 'center' });

          // --- TABLA DE NOVEDADES ---
          function getNovedadesCombinadasPDF(items: any[], novedades: any[]): any[] {
            const itemsFormateados = items.map(item => ({
              ...item,
              tipo: 'manual',
              fecha: item.fecha,
              hora: item.hora,
              titulo: item.titulo,
              descripcion: item.descripcion
            }));

            const novedadesFormateadas = novedades.map(nov => ({
              ...nov,
              tipo: 'automatica',
              fecha: nov.fecha,
              hora: nov.horario,
              titulo: 'ACTUACION SUMARIA: ' + (nov.descripcion_hecho || ''),
              descripcion: nov.descripcion  || ''
            }));

            return [...itemsFormateados, ...novedadesFormateadas].sort((a, b) => {
              const dateA = new Date(`${a.fecha}T${a.hora || '00:00'}`);
              const dateB = new Date(`${b.fecha}T${b.hora || '00:00'}`);
              return dateA.getTime() - dateB.getTime();
            });
          }

          const novedadesCombinadas = getNovedadesCombinadasPDF(this.itemsAsociados, this.novedadesEnRango);
          
          if (novedadesCombinadas.length > 0) {
                   autoTable(pdf, {
              startY: novedadesY + lineHeight,
              margin: { left: marginHorizontal, right: marginHorizontal },
              head: [['Novedad', 'Descripción']],
              body: novedadesCombinadas.map(nov => [
                `${nov.titulo || ''}\n(${nov.fecha || ''} ${nov.hora || ''})`,
                nov.descripcion || ''
              ]),
              theme: 'grid',
              headStyles: { fillColor: [0, 51, 102], textColor: 255 },
              styles: { fontSize: 9, lineColor: [0, 51, 102], textColor: [0, 0, 0] },
              tableLineColor: [0, 51, 102],
              tableLineWidth: 0.5,
              columnStyles: {
                0: { cellWidth: 25 } // Fija el ancho de la columna "Novedad" a 200 px
              },
              didParseCell: function (data) {
                if (data.section === 'body' && data.column.index === 1) {
                  const nov = novedadesCombinadas[data.row.index];
                  if (nov.tipo === 'automatica') {
                    data.cell.styles.textColor = [0, 51, 204]; // azul
                  }
                }
              }
            });
          }
        }
              // Calcula la posición Y final de la última tabla
        const finalY = (pdf as any).lastAutoTable?.finalY || pdf.internal.pageSize.getHeight() - 40;
        
        // Título "RESUMEN EJECUTIVO"
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(13);
        pdf.text("RESUMEN EJECUTIVO", pageWidth / 2, finalY + 16, { align: 'center' });
        
        // Tabla de cantidades al final
        const mayores = formData.mayores_detenidos || 0;
        const menores = formData.menores_detenidos || 0;
        const vehiculos = formData.vehiculos_secuestrados || 0;
        const motos = formData.motos_secuestradas || 0;
        
        autoTable(pdf, {
          startY: finalY + 20,
          margin: { left: 20, right: 20 },
          head: [['Detenidos Mayores', 'Detenidos Menores', 'Vehículos Secuestrados', 'Motovehículos Secuestrados']],
          body: [[mayores, menores, vehiculos, motos]],
          theme: 'grid',
          headStyles: { fillColor: [0, 51, 102], textColor: 255 },
          styles: { fontSize: 11, halign: 'center' },
          tableLineColor: [0, 51, 102],
          tableLineWidth: 0.5
        });
        // Mostrar PDF
        pdf.output('dataurlnewwindow');
      };
      reader.readAsDataURL(blob);
    });
}
}