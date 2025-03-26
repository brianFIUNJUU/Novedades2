import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NovedadesService } from '../../../services/novedades.service';
import { NovedadesPersonaService } from '../../../services/novedades_persona.service';
import { Novedades} from '../../../models/novedades';
import { UnidadRegional } from '../../../models/unidad_regional';
import { UnidadRegionalService } from '../../../services/unidad_regional.service';
import { CuadranteService } from '../../../services/cuadrante.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { Cuadrante } from '../../../models/cuadrante';
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../models/persona';
import {EstadoService} from '../../../services/estado.service';
import {Estado} from '../../../models/estado';
import { PersonalService } from '../../../services/personal.service'; // Importar el servicio de Personal
import {Personal} from '../../../models/personal'; // Importar el modelo de Personal
import { AuthenticateService } from '../../../services/authenticate.service';
import { ExcelExportService } from '../../../services/excel-export.service';
import { forkJoin,of } from 'rxjs';
import { map,switchMap} from 'rxjs/operators';
import { ExportRow } from '../../../models/export-row';
import * as L from 'leaflet';
import * as bootstrap from 'bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ReactiveFormsModule } from '@angular/forms';
import { CellHookData, HAlignType, RowInput } from 'jspdf-autotable';

// Tipo para los códigos de novedad
type CodigoNovedad = 'R' | 'A' | 'V';
type FontStyleType = 'normal' | 'bold' | 'italic' ;
@Component({
  selector: 'app-novedades-list',
  templateUrl: './novedades-list.component.html',
  styleUrls: ['./novedades-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
})
export class NovedadesListComponent implements OnInit {
  novedades: Novedades[] = [];
  personales: Personal[] = [];
  map!: L.Map;
  marker!: L.Marker;
  unidadesRegionales: UnidadRegional[] = [];
  mensajeError: string = '';
  userType: string = 'administrador'; // Ajusta esto según tu lógica de autenticación
  usuarioNombre: string = '';
  usuarioLegajo: string = '';
  userInfo: any = {};
  legajoFiltro: string = '';
  filteredNovedades: any[] = [];
  colorFilter: string = '';
  fechaSeleccionada: string = ''; // Almacenar la fecha seleccionada
  actaForm: FormGroup;
  actaSecForm: FormGroup;
  // Declaración de la variable novedadesFiltradas
novedadesFiltradas: Novedades[] = [];
// Definir los íconos como una propiedad de la clase

  constructor(
    private novedadesService: NovedadesService,
    private unidadRegionalService: UnidadRegionalService,
    private personaService: PersonaService,
    private cuadranteService: CuadranteService,
    private estadoService:EstadoService,
    private router: Router,
    private personalService: PersonalService,
    private authService: AuthenticateService,
    private excelExportService: ExcelExportService,
    private novedadesPersonaService: NovedadesPersonaService,
    private fb: FormBuilder
    
  ) {
    this.actaForm = this.fb.group({
      fechaActa: [''],
      horaActa: [''],
      fechaIntervencion: [''],
      horaIntervencion: [''],
      relato: [''],
      direccion: [''],
      descripcion_hecho: [''],
      
    });
    this.actaSecForm = this.fb.group({
      fechaActa: [''], //
      horaActa: [''], //
      direccion: [''], //
      ciudad: [''], //
      latitud: [''], //
      longitud: [''], //
      fiscal: [''], //
      juez: [''], //
      fechaOrden: [''], //
      filmacion: [''], //
      descripcion: [''], //
      relato: [''], //






  
    });
  }
  openDocumentOptions(novedad: any) {
    Swal.fire({
      title: 'Selecciona el documento a generar',
      input: 'select',
      inputOptions: {
        'procedimiento': 'Acta de procedimiento',
        'secuestro': 'Acta de secuestro'
      },
      inputPlaceholder: 'Selecciona un documento',
      showCancelButton: true,
      confirmButtonText: 'Generar',
      cancelButtonText: 'Cancelar',
      preConfirm: (value) => {
        if (value === 'procedimiento') {
          this.openActaModal(novedad); // Llamar a la función para "Acta de procedimiento"
        } else if (value === 'secuestro') {
          this.OpenSecuestro(novedad); // Llamar a la función para "Acta de secuestro"
        }
      }
    });
  }
  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(userInfo => {
      this.usuarioNombre = userInfo.nombre;
      this.userInfo = userInfo;
      this.usuarioLegajo = userInfo.legajo;
  
      // Llamamos a getAllNovedades() y filtramos cuando se carguen los datos
      this.getAllNovedades();
    });
     this.initForm(); // Inicializar el formulario en ngOnInit
    this.loadPersonales();
      // Inicializamos el formulario
   

  }
  
  initForm(): void {
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
    const currentTime = today.toTimeString().slice(0, 5); // HH:mm
  
    // Inicializamos el formulario correctamente
    this.actaForm = this.fb.group({
      fechaActa: [currentDate], 
      horaActa: [currentTime], 
      fechaIntervencion: [''],
      horaIntervencion: [''],
      relato: [''],
      direccion: [''],
      descripcion_hecho: [''],
    
    });
    this.actaSecForm = this.fb.group({
      fechaActa: [currentDate], 
      horaActa: [currentTime], 
      direccion: [''],
      ciudad: [''],
      latitud: [''],
      longitud: [''],
      fiscal: [''],
      juez: [''],
      fechaOrden: [''],
      filmacion: [''],
      descripcion: [''],
      relato: [''],
   
    });
  }
  openActaModal(novedad: any): void {
    this.initForm(); // Asegurar que el formulario se inicializa antes de abrir el modal
    this.actaForm.patchValue({
      fechaIntervencion: novedad.fecha,
      horaIntervencion: novedad.horario,
      relato:novedad.descripcion,
      direccion: novedad.lugar_hecho,
      descripcion_hecho: novedad.descripcion_hecho,
    });
    // Abrir el modal (usando bootstrap modal API)
    const modalElement = document.getElementById('actaModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  OpenSecuestro(novedad:any):void{
    this.initForm();
    this.actaSecForm.patchValue({
      fechaActa: novedad.fecha,
      horaActa: novedad.horario,
      direccion: novedad.lugar_hecho,
      ciudad: novedad.localidad,
      latitud: novedad.latitud,
      longitud: novedad.longitud,
      fiscal: novedad.fiscal,
      juez: novedad.juez,
      fechaOrden: novedad.fecha_orden,
      filmacion: novedad.filmacion,
      descripcion: novedad.descripcion,
    }); 
    const modalElement = document.getElementById('actaSecModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  
  

  

   // Función para generar el PDF del acta
  // Función para generar el PDF del acta
generatePDF(): void {
  const formData = this.actaForm.value;
  const pdf = new jsPDF();

  // Definir el título
  const titulo = 'ACTA DE PROCEDIMIENTO';
  pdf.setFontSize(11);

  // Calcular ancho del texto y posición centrada
  const pageWidth = pdf.internal.pageSize.getWidth();
  const textWidth = pdf.getTextWidth(titulo);
  const x = (pageWidth - textWidth) / 2;
  const y = 20;

  // Agregar título centrado
  pdf.text(titulo, x, y);

  // Dibujar una línea debajo del título para subrayarlo
  pdf.setLineWidth(0.5); // Grosor de la línea
  pdf.line(x, y + 2, x + textWidth, y + 2); // (x1, y1, x2, y2)

  // Convertir fechaActa en día, mes (texto) y año
  const fechaActa = new Date(formData.fechaActa + 'T00:00:00');
  const diaActa = fechaActa.getDate(); // Día en número
  const añoActa = fechaActa.getFullYear(); // Año en número

  // Convertir fechaIntervencion en día, mes (texto) y año
  const fechaIntervencion = new Date(formData.fechaIntervencion + 'T00:00:00');
  const diaIntervencion = fechaIntervencion.getDate();
  const añoIntervencion = fechaIntervencion.getFullYear();

  // Array con los nombres de los meses en español
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const mesTextoActa = meses[fechaActa.getMonth()];
  const mesTextoIntervencion = meses[fechaIntervencion.getMonth()];

  // Lógica para determinar el valor de fechaI
  const fechaI = formData.fechaActa === formData.fechaIntervencion
    ? "antes indicada"
    : `${diaIntervencion} del mes de ${mesTextoIntervencion} del ${añoIntervencion}`;

  // Definir el texto de introducción con sangría
  const inicio = "             EN LA CIUDAD DE S. S. DE JUJUY, PROVINCIA DE JUJUY, REPUBLICA ARGENTINA";
  const textoIntroduccion =
    `, a los ${diaActa} días del mes de ${mesTextoActa} del ${añoActa}, siendo las ${formData.horaActa} horas. El funcionario policial que suscribe, a los efectos legales hace CONSTAR: Que en la fecha ${fechaI}, siendo las ${formData.horaIntervencion} horas, se realiza la siguiente intervención policial con direccion en ${formData.direccion} : ${formData.relato}`;

  pdf.setFontSize(11);
  const marginLeft = 20; // Margen izquierdo para alineación
  let marginTop = y + 10; // Un poco más abajo del título
  const maxWidth = pageWidth - 40; // Ajuste de ancho del párrafo

  // Configurar fuente en negrita solo para "inicio"
  pdf.setFont("helvetica", "bold");
  pdf.text(inicio, marginLeft, marginTop, { maxWidth, align: 'justify' });

  // Volver a la fuente normal para el resto del texto
  pdf.setFont("helvetica", "normal");

  // Actualizar la posición Y después de agregar el texto en negrita
  marginTop += 5;  // Aumentar la posición Y para el siguiente texto

  // Agregar el resto del texto con sangría y justificado
  pdf.text(textoIntroduccion, marginLeft, marginTop, { maxWidth, align: 'justify' });

  // Guardar el PDF
  pdf.save('acta_de_procedimiento.pdf');
  

  // Cerrar el modal después de generar el PDF
  const modalElement = document.getElementById('actaModal');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
  }
  
}

generateSecPDF(): void {
  const formData = this.actaForm.value;
  const pdf = new jsPDF();

  const imgUrl = 'assets/LOGOMINPUBACUS.png';

  fetch(imgUrl)
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgBase64 = reader.result as string;

        // Configurar imagen en el PDF
        const imgWidth = 70;
        const imgHeight = 17;
        const imgX = 20;
        const imgY = 10;

        pdf.addImage(imgBase64, 'PNG', imgX, imgY, imgWidth, imgHeight);
        const separadorX = imgX + imgWidth + 6; // Ajusta la posición
        const separadorYInicio = imgY; // Inicio de la línea (arriba)
        const separadorYFin = imgY + imgHeight; // Fin de la línea (abajo)
        
        pdf.setLineWidth(0.5); // Controla el grosor de la línea (0.5 es delgado)
        pdf.line(separadorX, separadorYInicio, separadorX, separadorYFin);
        

        // Configurar título y subtítulo
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(15);
        const titleText = "ACTA DE SECUESTRO";
        const subTitleText = "(Ley 6259)";
        const titleX = imgX + imgWidth + 10;
        const titleY = 17;
        pdf.text(titleText, titleX, titleY);

        pdf.setFontSize(14);
        const subTitleX = titleX + (pdf.getTextWidth(titleText) / 4); // Centrado bajo el título
        const subTitleY = titleY + 7; // Un poco más abajo
        pdf.text(subTitleText, subTitleX, subTitleY);

        // Datos para la tabla
  // Posición de la tabla
  const startY = imgY + imgHeight + 10; // Ajuste de espacio después de la imagen
// Define la variable tableData antes de usarla
const tableData = [
  // TÍTULO (2 Columnas)
  [{ content: "AUTORIDADES", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' as FontStyleType } }],
  [
    { content: "Fuerza de Seguridad:\n"+"Policía de la Provincia de Jujuy", colSpan: 2 },
     { content:"Nro. Legajo:\n"+" P-1688/25"},
  ],
  [
    { content: "NOMBRE Y APELLIDO (Funcionarios intervinientes):\nMario lopez\nMario lopez", colSpan: 2 },
    { content:"Solicitada por agente/ayudante fiscal:\nMario lopez"},
  ],

  // Fila con 3 columnas
  [
    { content: "Juez:" },
    { content: "Fecha de la Orden:\n"},
    { content: "Orden Judicial dispuesta por el fiscal:"},
  ],
  [{ content: "TIEMPO Y LUGAR", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' } }],
  [
  { content: "Fecha de secuestro:\n"+" 24/02/2025", colSpan: 2 },
  { content:"Hora de inicio:\n"+"03:15"},
  ],
  [{ content: "Lugar Procedimiento:\n"+"Ciudad:,"+"Calle:,"+"Nro:,"+"Latitud:,"+"Longitud:,", colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' } }],
  [
    { content:"Descripción del soporte:", colSpan: 2 },
    { content: "Filmación:\n"+"Si"}
  ],
  [{ content: "JUSTIFICACION DEL SECUESTRO IMPOSTERGABLE", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' as FontStyleType } }],

  


];

// Función para dibujar la tabla
autoTable(pdf, {
  startY: 40,
  body: tableData as RowInput[],
  theme: 'grid',
  styles: {
    fontSize: 10,
    cellPadding: 2,
    valign: 'middle',  // Alineación central
    overflow: 'linebreak',
    lineWidth: 0.5,
    lineColor: [0, 0, 0],
  },
  columnStyles: {
    0: { cellWidth: 62, minCellHeight: 10 }, // Primera columna
    1: { cellWidth: 50, minCellHeight: 10 }, // Segunda columna
    2: { cellWidth: 70, minCellHeight: 10 }, // Tercera columna
  },
  // Función para personalizar el padding y el contenido
  didDrawCell: (data: any) => {
    const { rowIndex, cell } = data;

    // Ajustar el padding dependiendo del tipo de fila (título vs contenido)
    if (rowIndex === 0) {
      data.cell.styles.cellPadding = 5; // Padding mayor para la fila de título
    } else {
      data.cell.styles.cellPadding = 2;  // Padding regular para las filas normales
    }

    // Ajuste de posiciones y contenido
    if (cell.raw && typeof cell.raw === 'object' && 'content' in cell.raw) {
      const text = cell.raw.content;

      if (typeof text === 'string' && text.includes(":")) {
        const [boldText, ...normalTextParts] = text.split(":");
        const normalText = normalTextParts.join(":").trim();
        const { x, y, width, height } = cell;

        // Limpiar la celda original
        pdf.setFillColor(255, 255, 255);
        pdf.rect(x, y, width, height, 'F');

        // Ajuste de posiciones
        let textOffsetX = x + 2;
        let textOffsetY = y + 5;
        let lineHeight = 5;

        // Procesar líneas separadas por salto de línea
        const boldLines = boldText.split("\n");
        const normalLines = normalText.split("\n");

        // Procesar solo la primera línea del texto en negrita con el ":"
        pdf.setFont("helvetica", "bold");
        pdf.text(boldText + ":", textOffsetX, textOffsetY);

        // Aumentar el offset Y para el texto normal
        textOffsetY += lineHeight;

        // Procesar las líneas de texto normal
        pdf.setFont("helvetica", "normal");
        let normalOffsetY = textOffsetY;
        normalLines.forEach((normalLine: string, i: number) => {
          pdf.text(normalLine, textOffsetX, normalOffsetY); // Alinear el texto normal
          normalOffsetY += lineHeight;
        });

        // Ajustar la posición final para que no haya espacio extra en la parte inferior
        textOffsetY = normalOffsetY;
      }
    }
  },
});
const pageHeight = pdf.internal.pageSize.height;  // Altura total de la página
const footerHeight = 30;  // Ajusta esta altura si es necesario

// Calcular la posición Y para las firmas al final de la página
const finalY = pageHeight - footerHeight;

  // Configuración de firmas
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "bold");

  // Primera fila de firmas
  pdf.text("Firma de quien recibió la orden", 20, finalY);
  pdf.text("Firma del funcionario a cargo", 80, finalY);
  pdf.text("Firma de testigo", 140, finalY);

  // Segunda fila de firmas
  pdf.text("Firma de testigo", 20, finalY + 20);
  pdf.text("Firma de otro interveniente", 80, finalY + 20);
  pdf.text("Firma de otro interveniente", 140, finalY + 20);
  // Añadir una nueva página para la segunda tabla
  pdf.addPage();

  // Segunda tabla en la segunda página
  // Modificar las entradas para asegurarte de que fontStyle sea de tipo 'FontStyle'
  const secondTableData = [
    [{ content: "OBJETOS SECUESTRADOS", colSpan: 3, styles: { halign: 'center' as HAlignType, fontStyle: 'bold' as FontStyleType } }],
    [{ content: "blabal", colSpan: 3 }],

  ];
  
  autoTable(pdf, {
    startY: 10,
    body: secondTableData,
    theme: 'grid',
    styles: {
      fontSize: 10,
      cellPadding: 2,
      valign: 'middle',
      overflow: 'linebreak',
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
    },
    columnStyles: {
      0: { cellWidth: 60, minCellHeight: 10 },
      1: { cellWidth: 60, minCellHeight: 10 },
      2: { cellWidth: 60, minCellHeight: 10 },
    },
  });
  // Calcular la posición Y para las firmas al final de la página


// Configuración de firmas
pdf.setFontSize(10);
pdf.setFont("helvetica", "bold");

// Primera fila de firmas
pdf.text("Firma de quien recibió la orden", 20, finalY);
pdf.text("Firma del funcionario a cargo", 80, finalY);
pdf.text("Firma de testigo", 140, finalY);

// Segunda fila de firmas
pdf.text("Firma de testigo", 20, finalY + 20);
pdf.text("Firma de otro interveniente", 80, finalY + 20);
pdf.text("Firma de otro interveniente", 140, finalY + 20);
  // Mostrar el PDF
  pdf.addPage();

const tableData2 = [
  // TÍTULO (2 Columnas)
  [{ content: "AUTORIDADES", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' as FontStyleType } }],
  [
    { content: "Fuerza de Seguridad:\n"+"Policía de la Provincia de Jujuy", colSpan: 2 },
     { content:"Nro. Legajo:\n"+" P-1688/25"},
  ],
  [
    { content: "NOMBRE Y APELLIDO (Funcionarios intervinientes):\nMario lopez\nMario lopez", colSpan: 2 },
    { content:"Solicitada por agente/ayudante fiscal:\nMario lopez"},
  ],

  // Fila con 3 columnas
  [
    { content: "Juez:" },
    { content: "Fecha de la Orden:\n"},
    { content: "Orden Judicial dispuesta por el fiscal:"},
  ],
  [{ content: "TIEMPO Y LUGAR", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' } }],
  [
  { content: "Fecha de secuestro:\n"+" 24/02/2025", colSpan: 2 },
  { content:"Hora de inicio:\n"+"03:15"},
  ],
  [{ content: "Lugar Procedimiento:\n"+"Ciudad:,"+"Calle:,"+"Nro:,"+"Latitud:,"+"Longitud:,", colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' } }],
  [
    { content:"Descripción del soporte:", colSpan: 2 },
    { content: "Filmación:\n"+"Si"}
  ],
  [{ content: "JUSTIFICACION DEL SECUESTRO IMPOSTERGABLE", colSpan: 3, styles: { halign: 'center', fontStyle: 'bold' as FontStyleType } }],

  


];

// Función para dibujar la tabla
autoTable(pdf, {
  startY: 40,
  body: tableData2 as RowInput[],
  theme: 'grid',
  styles: {
    fontSize: 10,
    cellPadding: 2,
    valign: 'middle',  // Alineación central
    overflow: 'linebreak',
    lineWidth: 0.5,
    lineColor: [0, 0, 0],
  },
  columnStyles: {
    0: { cellWidth: 62, minCellHeight: 10 }, // Primera columna
    1: { cellWidth: 50, minCellHeight: 10 }, // Segunda columna
    2: { cellWidth: 70, minCellHeight: 10 }, // Tercera columna
  },
  // Función para personalizar el padding y el contenido
  didDrawCell: (data: any) => {
    const { rowIndex, cell } = data;

    // Ajustar el padding dependiendo del tipo de fila (título vs contenido)
    if (rowIndex === 0) {
      data.cell.styles.cellPadding = 5; // Padding mayor para la fila de título
    } else {
      data.cell.styles.cellPadding = 2;  // Padding regular para las filas normales
    }

    // Ajuste de posiciones y contenido
    if (cell.raw && typeof cell.raw === 'object' && 'content' in cell.raw) {
      const text = cell.raw.content;

      if (typeof text === 'string' && text.includes(":")) {
        const [boldText, ...normalTextParts] = text.split(":");
        const normalText = normalTextParts.join(":").trim();
        const { x, y, width, height } = cell;

        // Limpiar la celda original
        pdf.setFillColor(255, 255, 255);
        pdf.rect(x, y, width, height, 'F');

        // Ajuste de posiciones
        let textOffsetX = x + 2;
        let textOffsetY = y + 5;
        let lineHeight = 5;

        // Procesar líneas separadas por salto de línea
        const boldLines = boldText.split("\n");
        const normalLines = normalText.split("\n");

        // Procesar solo la primera línea del texto en negrita con el ":"
        pdf.setFont("helvetica", "bold");
        pdf.text(boldText + ":", textOffsetX, textOffsetY);

        // Aumentar el offset Y para el texto normal
        textOffsetY += lineHeight;

        // Procesar las líneas de texto normal
        pdf.setFont("helvetica", "normal");
        let normalOffsetY = textOffsetY;
        normalLines.forEach((normalLine: string, i: number) => {
          pdf.text(normalLine, textOffsetX, normalOffsetY); // Alinear el texto normal
          normalOffsetY += lineHeight;
        });

        // Ajustar la posición final para que no haya espacio extra en la parte inferior
        textOffsetY = normalOffsetY;
      }
    }
  },
});
// Configuración de firmas
pdf.setFontSize(10);
pdf.setFont("helvetica", "bold");

// Primera fila de firmas
pdf.text("Firma de quien recibió la orden", 20, finalY);
pdf.text("Firma del funcionario a cargo", 80, finalY);
pdf.text("Firma de testigo", 140, finalY);

// Segunda fila de firmas
pdf.text("Firma de testigo", 20, finalY + 20);
pdf.text("Firma de otro interveniente", 80, finalY + 20);
pdf.text("Firma de otro interveniente", 140, finalY + 20);
  pdf.output('dataurlnewwindow');
};
reader.readAsDataURL(blob);
})    
}

  // EN LA CIUDAD DE S. S. DE JUJUY, PROVINCIA DE JUJUY, REPUBLICA ARGENTINA,
  
  ngAfterViewInit(): void {
    // Inicializar el mapa cuando se muestra el modal
    const modalElement = document.getElementById('modalMapa');
    if (modalElement) {
      modalElement.addEventListener('shown.bs.modal', () => {
        this.initMap();
      });
    }
  }
  abrirModalMapa(): void {
    const modalElement = document.getElementById('modalMapa');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // este es el mapa que toma las imagens a reutilizar initMap(): void {
  //   if (this.map) {
  //     this.map.remove();
  //   }
  
  //   try {
  //     this.map = L.map('mapaOperativo').setView([-24.18769889437684, -65.29709953331486], 15);
  
  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; OpenStreetMap contributors'
  //     }).addTo(this.map);
  
  //     if (this.novedades && this.novedades.length > 0) {
  //       this.novedades.forEach(novedad => {
  //         if (novedad.latitud && novedad.longitud) {
  //           const lat = Number(novedad.latitud);
  //           const lng = Number(novedad.longitud);
  
  //           if (!isNaN(lat) && !isNaN(lng)) {  
  //             const codigo = novedad.codigo as CodigoNovedad;
  //             let icono: L.Icon<L.IconOptions> | L.DivIcon = this.iconosNovedades[codigo];
  
  //             if (!icono) {
  //               console.warn(`Icono no encontrado para código ${codigo}, usando icono de Leaflet.`);
  //               icono = this.getDefaultIcon(codigo);
  //             }
  
  //             L.marker([lat, lng], { icon: icono }).addTo(this.map)
  //               .bindPopup(`<b>${novedad.descripcion_hecho}</b><br>Fecha: ${novedad.fecha}`);
  //           } else {
  //             console.warn("Latitud o longitud inválida:", novedad);
  //           }
  //         }
  //       });
  //     } else {
  //       console.warn("No hay novedades disponibles para mostrar en el mapa.");
  //     }
  
  //   } catch (error) {
  //     console.error("Error al inicializar el mapa:", error);
  //   }
  // }
  initMap(): void {
    if (this.map) {
      this.map.remove();
    }
  
    try {
      this.map = L.map('mapaOperativo').setView([-24.18769889437684, -65.29709953331486], 8);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
  
      // Usamos `filteredNovedades` en lugar de `novedades`
      if (this.filteredNovedades && this.filteredNovedades.length > 0) {
        this.filteredNovedades.forEach(novedad => {
          if (novedad.latitud && novedad.longitud) {
            const lat = Number(novedad.latitud);
            const lng = Number(novedad.longitud);
  
            if (!isNaN(lat) && !isNaN(lng)) {  
              const codigo = novedad.codigo as CodigoNovedad;
              const icono = this.getDefaultIcon(codigo); // Usa los puntos de color
  
              L.marker([lat, lng], { icon: icono }).addTo(this.map)
                .bindPopup(`<b>${novedad.descripcion_hecho}</b><br>Fecha: ${novedad.fecha}`);
            } else {
              console.warn("Latitud o longitud inválida:", novedad);
            }
          }
        });
      } else {
        console.warn("No hay novedades disponibles para mostrar en el mapa.");
      }
  
    } catch (error) {
      console.error("Error al inicializar el mapa:", error);
    }
  }
  

  
  // Función para obtener un icono predeterminado de Leaflet en caso de fallo
  getDefaultIcon(codigo: CodigoNovedad): L.DivIcon {
    let color;
    switch (codigo) {
      case 'R': color = 'red'; break;
      case 'A': color = 'gold'; break;
      case 'V': color = 'green'; break;
   
    }
  
    return L.divIcon({
      className: "custom-marker",
      html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid black;"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -10]
    });
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



  descargarImagen() {
    const mapa = document.getElementById('mapaOperativo');
  
    if (mapa && this.map) {
      const zoomActual = this.map.getZoom();
  
      // Redibujar el mapa antes de capturar
      this.map.eachLayer((layer: any) => {
        if (layer instanceof L.TileLayer) {
          layer.redraw();
        }
      });
  
      setTimeout(() => {
        html2canvas(mapa, { useCORS: true }).then(canvas => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'mapa.png';
          link.click();
  
          // Restaurar el zoom original
          this.map.setZoom(zoomActual);
        }).catch(error => {
          console.error("Error al capturar el mapa:", error);
        });
      }, 500);
    }
  }
  

  filtrarPorFecha(): void {
    const fechaDesdeInput = (document.getElementById('fechaDesde') as HTMLInputElement).value;
    const fechaHastaInput = (document.getElementById('fechaHasta') as HTMLInputElement).value;
  
    if (fechaDesdeInput || fechaHastaInput) {
      const fechaDesde = fechaDesdeInput ? new Date(fechaDesdeInput) : null;
      const fechaHasta = fechaHastaInput ? new Date(fechaHastaInput) : null;
  
      this.novedadesFiltradas = this.novedades.filter(novedad => {
        const novedadFecha = new Date(novedad.fecha);
        
        return (
          (!fechaDesde || novedadFecha >= fechaDesde) &&
          (!fechaHasta || novedadFecha <= fechaHasta)
        );
      });
    } else {
      // Si no se selecciona ninguna fecha, mostrar todas las novedades
      this.novedadesFiltradas = [...this.novedades];
    }
  
    // Actualizar el mapa con las novedades filtradas
    this.actualizarMapa();
  }
  

actualizarMapa(): void {
  if (this.map) {
    // Limpiar los marcadores existentes
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });

    // Agregar los nuevos marcadores filtrados
    this.novedadesFiltradas.forEach(novedad => {
      if (novedad.latitud && novedad.longitud) {
        L.marker([+novedad.latitud, +novedad.longitud]).addTo(this.map)
          .bindPopup(`<b>${novedad.descripcion_hecho}</b><br>Fecha: ${novedad.fecha}`);
      }
    });
  }
}

  cerrarModal(modalId: string): void {
      const modalElement = document.getElementById(modalId);
      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      }
    }
  filtrarporLegajo(){

  }
   cargarDatosPersonalPorId(novedad: Novedades): void {
    this.personalService.getPersonal(novedad.personal_autor_id.toString()).subscribe(
      (personal: Personal) => {
        novedad.personalAutor = personal; // Almacenar los datos del personal autor en la novedad al final ni se quie es lo que tien esta wea supuestamente ahay intenerte y esta wea noi surve
        console.log('Personal autor encontrado:', personal);
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener los datos del personal:', error.message);
      }
    );
  }
  cargarDatosPersonales(): void {
    let loadedCount = 0;
    this.novedades.forEach(novedad => {
      this.personalService.getPersonal(novedad.personal_autor_id.toString()).subscribe(
        (personal: Personal) => {
          novedad.personalAutor = personal; // Almacenar los datos del personal autor en la novedad
          console.log('Personal autor encontrado:', personal);
          loadedCount++;
          if (loadedCount === this.novedades.length) {
            this.filtrarNovedades();
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error al obtener los datos del personal:', error.message);
          loadedCount++;
          if (loadedCount === this.novedades.length) {
            this.filtrarNovedades();
          }
        }
      );
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
   getAllNovedades(): void {
    this.novedadesService.getAllNovedades().subscribe(
      (data: Novedades[]) => {
        this.novedades = data;
        this.novedades.forEach(novedad => {
          this.cargarDatosPersonales();
          this.cargarUnidadRegionalNombre(novedad);
          this.cargarCuadranteNombre(novedad);
          this.cargarPersonas(novedad);
          this.filtrarNovedades(); // Filtramos una vez que tenemos datos
          this.filtrarNovedadesC()
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener novedades:', error.message);
        Swal.fire('Error', 'Error al obtener novedades: ' + error.message, 'error');
      }
    );
  }

// comom 
  navigateToUpdateForm(id: string): void {
    this.router.navigate(['/tableros/novedades', id]);
  }
  
  cargarUnidadRegionalNombre(  novedades: Novedades): void {
    this.unidadRegionalService.getUnidadRegional(novedades.unidad_regional_id).subscribe(
      (unidadRegional: UnidadRegional) => {
        novedades.unidad_regional_nombre = unidadRegional.unidad_regional;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al obtener unidad regional:', error.message);
      }
    );
  }
   cargarCuadranteNombre(novedades: Novedades): void {
    if (novedades.cuadrante_id) {
      this.cuadranteService.getCuadrante(novedades.cuadrante_id.toString()).subscribe(
        (cuadrante: Cuadrante) => {
          novedades.cuadrante_nombre = cuadrante.nombre;
        },
        (error: HttpErrorResponse) => {
          console.error('Error al obtener jurisdicción:', error.message);
        }
      );
    } else {
      console.warn(`Novedad con ID ${novedades.id} no tiene cuadrante_id.`);
    }
  }
  filtrarNovedades(): void {
    console.log("Novedades antes del filtrado:", this.novedades);
  
    if (this.userInfo.perfil === 'usuario') {
      this.filteredNovedades = this.novedades.filter(novedad => 
        novedad.personalAutor?.legajo === this.userInfo.legajo
      );
    } else {
      this.filteredNovedades = [...this.novedades];
    }
  
    console.log("Novedades después del filtrado:", this.filteredNovedades);
  }
    
  
  deleteNovedad(id: string): void {
    this.novedadesService.deleteNovedad(id).subscribe(
      res => {
        console.log('Novedad eliminada', res);
        this.getAllNovedades();
        Swal.fire('Éxito', 'Novedad eliminada con éxito', 'success');
      },
      error => {
        console.error('Error al eliminar novedad', error);
        Swal.fire('Error', 'Error al eliminar la novedad', 'error');
      }
    );
  }
 
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
 
    cargarPersonas(novedad: Novedades): void {
      console.log(`Cargando personas para la novedad con ID: ${novedad.id}`);
      console.log(`Array de personas: ${JSON.stringify(novedad.personas)}`);
      if (novedad.personas && novedad.personas.length > 0) {
        novedad.personas.forEach((personaId: any) => {
          const id = typeof personaId === 'object' ? personaId.id : personaId;
          console.log(`Cargando persona con ID: ${id}`);
          this.personaService.getPersona(id).subscribe(
            (persona: Persona) => {
              console.log(`Persona cargada: ${JSON.stringify(persona)}`);
              // Obtener el estado de la persona para la novedad actual
              this.estadoService.getEstadoByNovedadAndPersona(novedad.id, persona.id).subscribe(
                (estado: Estado) => {
                  persona.estado = estado.estado;
                  console.log(`Estado de la persona: ${persona.estado}`);
                  if (!novedad.personasDetalles) {
                    novedad.personasDetalles = [];
                  }
                  novedad.personasDetalles.push(persona);
                },
                
              );
            },
            (error: HttpErrorResponse) => {
              console.error('Error al obtener persona:', error.message);
            }
          );
        });
      } else {
        console.log('El array de personas está vacío o no está definido.');
      }
    }
    loadPersonales(): void {
      this.personalService.getPersonales().subscribe(personales => {
        this.personales = personales;
      });
    }
    
  
    getPersonalNombreById(id: number): string {
      const personal = this.personales.find(p => p.id === id);
      return personal ? `${personal.jerarquia} ${personal.nombre} ${personal.apellido} ${personal.legajo}` : '';

    }
  
    exportToExcel(): void {
      console.log('exportToExcel');
      const exportData: ExportRow[] = [];
  
      const processNovedad = (novedad: Novedades) => {
        console.log('Processing novedad:', novedad.id);
        const elementoSecuestrado = novedad.elemento_secuestrado.map((elem, index) => ({
          [`elemento_secuestrado_${index + 1}_elemento`]: elem.elemento,
          [`elemento_secuestrado_${index + 1}_descripcion`]: elem.descripcion
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {});
  
        const bienRecuperadoNo = novedad.bien_recuperado_no.map((elem, index) => ({
          [`bien_recuperado_no_${index + 1}_elemento`]: elem.elemento,
          [`bien_recuperado_no_${index + 1}_descripcion`]: elem.descripcion
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {});
  
        const bienRecuperado = novedad.bien_recuperado.map((elem, index) => ({
          [`bien_recuperado_${index + 1}_elemento`]: elem.elemento,
          [`bien_recuperado_${index + 1}_descripcion`]: elem.descripcion
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {});
  
        return this.novedadesPersonaService.getPersonasByNovedadId(novedad.id).pipe(
          switchMap(personas => {
            console.log('Personas:', personas);
            if (personas.length === 0) {
              return of([]);
            }
            const personasObservables = personas.map(persona => 
              this.estadoService.getEstadoByNovedadAndPersona(novedad.id, persona.id).pipe(
                map((estado: Estado) => {
                  persona.estado = estado.estado;
                  return persona;
                })
              )
            );
  
            return forkJoin(personasObservables);
          }),
          map(personasConEstado => {
            const victimas: string[] = [];
            const victimarios: string[] = [];
            const protagonistas: string[] = [];
  
            personasConEstado.forEach(persona => {
              if (persona.estado === 'victima') {
                victimas.push(`${persona.nombre} ${persona.apellido}`);
              } else if (persona.estado === 'victimario') {
                victimarios.push(`${persona.nombre} ${persona.apellido}`);
              } else if (persona.estado === 'protagonista') {
                protagonistas.push(`${persona.nombre} ${persona.apellido}`);
              }
            });
  
            const exportRow: ExportRow = {
              id: novedad.id,
              fecha: novedad.fecha,
              horario: novedad.horario,
              unidad_regional_nombre: novedad.unidad_regional_nombre,
              cuadrante_nombre: novedad.cuadrante_nombre,
              lugar_hecho: novedad.lugar_hecho,
              latitud: novedad.latitud,
              longitud: novedad.longitud,
              origen_novedad: novedad.origen_novedad,
              horaIncidencia: novedad.horaIncidencia,
              N_incidencia: novedad.n_incidencia,
              unidad_interviniente: novedad.unidad_interviniente,
              tipo_hecho: novedad.tipo_hecho,
              subtipohecho: novedad.subtipo_hecho,
              descripcionhecho: novedad.descripcion_hecho,
              modus_operandi: novedad.modus_operandi_nombre,
              descripcion: novedad.descripcion,
              tipo_lugar: novedad.tipo_lugar,
              personal_autor_nombre: this.getPersonalNombreById(novedad.personal_autor_id),
              observaciones: novedad.observaciones,
              unidad_actuante: novedad.unidad_actuante,
              oficial_cargo_nombre: novedad.oficial_cargo_id ? this.getPersonalNombreById(novedad.oficial_cargo_id) : '',
              victimas: JSON.stringify(victimas),
              victimarios: JSON.stringify(victimarios),
              protagonistas: JSON.stringify(protagonistas),
              ...elementoSecuestrado,
              ...bienRecuperadoNo,
              ...bienRecuperado
            };
  
            exportData.push(exportRow);
            return exportRow;
          })
        );
      };
  
      const observables = this.novedades.map(novedad => processNovedad(novedad));
  
      forkJoin(observables).subscribe(() => {
        console.log('Exporting data:', exportData);
        this.excelExportService.exportAsExcelFile(exportData, 'Novedades');
      }, error => {
        console.error('Error during export:', error);
      });
    }
    setColorFilter(event: Event): void {
      const target = event.target as HTMLSelectElement;
      this.colorFilter = target.value;
      this.filtrarNovedadesC(); // Llamar a la función de filtrado
    }
    
    filtrarNovedadesC(): void {
      console.log("Filtrando por color:", this.colorFilter);
      console.log("Novedades disponibles antes de filtrar por color:", this.novedades);
    
      if (this.novedades && this.novedades.length > 0) { // Asegurar que hay datos
        if (this.colorFilter) {
          this.filteredNovedades = this.novedades.filter(novedad => {
            console.log(`Comparando ${novedad.codigo} con ${this.colorFilter}`);
            return String(novedad.codigo) === String(this.colorFilter);
          });
        } else {
          this.filteredNovedades = [...this.novedades]; // Si no hay filtro, mostrar todo
        }
      }
    
      console.log("Novedades filtradas por color:", this.filteredNovedades);
    }

    
  }
  