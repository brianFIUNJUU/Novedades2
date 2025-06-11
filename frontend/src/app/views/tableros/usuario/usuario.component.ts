import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { AuthenticateService } from '../../../services/authenticate.service'; // Importar el servicio de autenticación
import Swal from 'sweetalert2'; // Importar SweetAlert

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añadir FormsModule aquí
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
perfilUsuarioActual: string = '';
  usuarios: any[] = []; // Array para almacenar los usuarios originales
  usuariosFiltrados: any[] = []; // Array para almacenar los usuarios filtrados
  filtroEstado: string = ''; // Variable para el filtro de estado
  buscarLegajo: string = ''; // Variable para el filtro por legajo

  constructor(private authService: AuthenticateService) {}

    
  
  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(userInfo => {
      this.perfilUsuarioActual = userInfo.perfil;
    });
    this.loadUsuarios();
  }
  
  loadUsuarios(): void {
    this.authService.firestore.collection('usuarios').valueChanges().subscribe((firestoreUsuarios) => {
      console.log('Usuarios Firestore:', firestoreUsuarios);  // Verifica si los usuarios son correctos
      this.usuarios = firestoreUsuarios;
      this.filtrarUsuarios(); // Aplicar los filtros iniciales
    }, (error) => {
      console.error('Error al cargar los usuarios:', error);
    });
  }
  
  // Método para eliminar un usuario con confirmación de SweetAlert
  eliminarUsuario(uid: string): void {
    Swal.fire({
      title: '¿Estás seguro que quieres elimnar este usuario?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.eliminarUsuario(uid).subscribe(() => {
          Swal.fire(
            'Eliminado!',
            'El usuario ha sido eliminado.',
            'success'
          );
          this.loadUsuarios(); // Volver a cargar la lista de usuarios
        }, (error) => {
          console.error('Error al eliminar el usuario: ', error);
          Swal.fire(
            'Error!',
            'Hubo un problema al eliminar el usuario.',
            'error'
          );
        });
      }
    });
  }

  // Método para filtrar usuarios
  filtrarUsuarios(): void {
    let usuariosFiltrados = this.usuarios;

    // Filtrar por estado
    if (this.filtroEstado !== '') {
      const estadoFiltro = this.filtroEstado === 'activo';
      usuariosFiltrados = usuariosFiltrados.filter(usuario => usuario.estado === estadoFiltro);
    }

    // Filtrar por legajo
    if (this.buscarLegajo !== '') {
      usuariosFiltrados = usuariosFiltrados.filter(usuario =>
        usuario.legajo.toLowerCase().includes(this.buscarLegajo.toLowerCase())
      );
    }

    this.usuariosFiltrados = usuariosFiltrados;
  }

  // Filtrar por estado
  filtrarPorEstado(): void {
    this.filtrarUsuarios();
  }

  // Filtrar por legajo
  filtrarPorLegajo(): void {
    this.filtrarUsuarios();
  }
}
