import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { Injectable } from '@angular/core';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {
  constructor() {}

  exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.truncateValues(json));
    const workbook: XLSX.WorkBook = { 
      Sheets: { 'data': worksheet }, 
      SheetNames: ['data'] 
    };
    const excelBuffer: any = XLSX.write(workbook, { 
      bookType: 'xlsx', 
      type: 'array' 
    });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: Blob, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, `${fileName}_export_${new Date().getTime()}${EXCEL_EXTENSION}`);
  }

  private truncateValues(json: any[]): any[] {
    return json.map(row => {
      const truncatedRow: { [key: string]: any } = {};
      for (const key in row) {
        if (row.hasOwnProperty(key)) {
          const value = row[key];
          truncatedRow[key] = (typeof value === 'string' && value.length > 32767) 
            ? value.substring(0, 32767) 
            : value;
        }
      }
      return truncatedRow;
    });
  }
}