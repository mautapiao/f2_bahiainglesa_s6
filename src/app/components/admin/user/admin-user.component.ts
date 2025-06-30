import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserAdmin } from '../../../interfaces/user-admin';
import { UserAdminService } from '../../../services/user-admin.service';
/**
 * Representa la sección de administración de usuarios 
 */
@Component({
  selector: 'app-admin-user',
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
/**
 * Componente de administración de anuncios (Ads).
 * Muestra una lista de anuncios y permite activar/desactivar cada uno.
 */
export class AdminUserComponent {
  
  /** Poblamiendo de los usuarios */
  usuarios: UserAdmin[]=[];
  /** Obtener todos los usuarios desde el servicio */
  constructor( private userAdminService:UserAdminService){
    this.usuarios=this.userAdminService.getUsersAdmin();
  }
  

}
