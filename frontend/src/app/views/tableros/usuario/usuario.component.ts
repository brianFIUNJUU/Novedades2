import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { AuthenticateService } from '../../../services/authenticate.service'; // Importar el servicio de autenticación
import Swal from 'sweetalert2'; // Importar SweetAlert
import { UsuarioService } from '../../../services/usuario.services'; // Importar el servicio de usuario

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
  filtroPerfil: string = ''; // Variable para el filtro por perfil

  constructor(private authService: AuthenticateService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(userInfo => {
      this.perfilUsuarioActual = userInfo.perfil;
    });
    this.loadAdministradores(); // Cambia aquí
  }

  // Cargar solo administradores por defecto
  loadAdministradores(): void {
    this.authService.getUsuariosAdministradores().subscribe((usuarios) => {
      this.usuarios = usuarios;
      this.usuariosFiltrados = usuarios;
    }, (error) => {
      console.error('Error al cargar administradores:', error);
    });
  }
    // En usuario.component.ts
  sincronizarUsuariosFirestore() {
    this.usuarioService.sincronizarDesdeFirestore().subscribe({
      next: (res) => {
        alert(res.msg || 'Sincronización completada');
      },
      error: (err) => {
        alert('Error al sincronizar usuarios');
        console.error(err);
      }
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
          this.loadAdministradores(); // Volver a cargar la lista de usuarios
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
   // Cargar todos los usuarios solo si el filtro es "Todos"
  loadTodosUsuarios(): void {
    this.authService.getAllUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
      this.usuariosFiltrados = usuarios;
    }, (error) => {
      console.error('Error al cargar todos los usuarios:', error);
    });
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
  filtrarPorPerfil(): void {
    if (!this.filtroPerfil) {
      // Si el filtro es "Todos", cargar todos los usuarios
      this.loadUsuarios();
    } else {
      // Si es otro perfil, filtrar localmente
      this.usuariosFiltrados = this.usuarios.filter(usuario =>
        usuario.perfil === this.filtroPerfil
      );
    }
  }
  // Método para filtrar usuarios
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
        String(usuario.legajo).toLowerCase().includes(this.buscarLegajo.toLowerCase())
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
