import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../../services/funcionario.service';
import { PersonaService } from '../../../services/persona.service';
import { Funcionario } from '../../../models/funcionario';
import { Persona } from '../../../models/persona';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionario: Funcionario = new Funcionario();
  dniPersona: string = '';
  legajoBusqueda: string = ''; // Añadido para la búsqueda por legajo
  mensajeError: string = '';
  personaExistente: Persona | null = null; // Añadido para manejar la persona encontrada

  constructor(
    private funcionarioService: FuncionarioService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios(): void {
    this.funcionarioService.getFuncionarios().subscribe(
      data => this.funcionarios = data,
      error => console.error('Error al obtener los funcionarios:', error)
    );
  }

  buscarPersonaPorDni(): void {
    this.personaService.getPersonaByDni(this.dniPersona).subscribe(
      (data: Persona) => {
        this.personaExistente = data;
        this.funcionario.persona = data;
        this.mensajeError = '';
      },
      error => {
        this.personaExistente = null;
        this.mensajeError = 'No se encontró a la persona con el DNI proporcionado.';
        console.error('Error al buscar persona por DNI:', error);
      }
    );
  }

  buscarFuncionarioPorLegajo(): void {
    this.funcionarioService.getFuncionarioByLegajo(this.legajoBusqueda).subscribe(
      (data: Funcionario) => {
        if (data) {
          this.funcionario = data;
          this.personaExistente = data.persona;
          this.mensajeError = ''; // Limpiar el mensaje de error
          Swal.fire('Éxito', 'Funcionario encontrado con éxito', 'success'); // Mensaje de éxito
        } else {
          this.funcionario = new Funcionario(); // Limpiar datos del funcionario
          this.personaExistente = null; // Limpiar persona encontrada
          this.mensajeError = 'No se encontró ningún funcionario con el legajo proporcionado.';
          Swal.fire('Error', 'No se encontró ningún funcionario con el legajo proporcionado.', 'error'); // Mensaje de error
        }
      },
      error => {
        this.funcionario = new Funcionario(); // Limpiar datos del funcionario
        this.personaExistente = null; // Limpiar persona encontrada
        this.mensajeError = 'No se encontró ningún funcionario con el legajo proporcionado.';
        console.error('Error al buscar funcionario por legajo:', error);
        Swal.fire('Error', 'Error al buscar funcionario por legajo.', 'error'); // Mensaje de error
      }
    );
  }

  guardarFuncionario(): void {
    if (!this.funcionario.persona || !this.funcionario.persona.id) {
      this.mensajeError = 'Debe asignar una persona válida antes de guardar el funcionario.';
      return;
    }

    if (this.funcionario._id) {
      this.funcionarioService.updateFuncionario(this.funcionario).subscribe(
        () => {
          Swal.fire('Éxito', 'Funcionario actualizado con éxito', 'success');
          this.getFuncionarios();
          this.resetForm();
        },
        error => console.error('Error al actualizar el funcionario:', error)
      );
    } else {
      this.funcionarioService.createFuncionario(this.funcionario).subscribe(
        () => {
          Swal.fire('Éxito', 'Funcionario creado con éxito', 'success');
          this.getFuncionarios();
          this.resetForm();
        },
        error => console.error('Error al crear el funcionario:', error)
      );
    }
  }

  editarFuncionario(funcionario: Funcionario): void {
    this.funcionario = { ...funcionario };
    this.dniPersona = funcionario.persona.dni || '';
    this.buscarPersonaPorDni(); // Llamar a la búsqueda para asegurarse de que la persona está cargada
  }

  eliminarFuncionario(id: string): void {
    this.funcionarioService.deleteFuncionario(id).subscribe(
      () => {
        Swal.fire('Éxito', 'Funcionario eliminado con éxito', 'success');
        this.getFuncionarios();
      },
      error => console.error('Error al eliminar el funcionario:', error)
    );
  }

  resetForm(): void {
    this.funcionario = new Funcionario();
    this.dniPersona = '';
    this.legajoBusqueda = ''; // Resetear búsqueda de legajo
    this.mensajeError = '';
    this.personaExistente = null;
  }
}
