import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/**
 * Interface que representa los ads
 */
interface Ad {
  /** id numerico autoincremento */
  id: number;
  /** Fecha de registro del anuncio */
  createdAt: string;
  /** Usuario y correo */
  user: {
    /** nombre de usaurio */
    name: string;
    /** email usaurio */
    email: string;
  };
  /** Categoría de anuncio */
  category: string;
  /** Imagen del anuncio */
  imageUrl: string;
  /** Fecha de incio anuncio */
  startDate: string;
  /** Fecha fin de anuncio */
  endDate: string;
  /** Descripción de anuncio */
  description: string;
  /** Valor Costo del anuncio */
  amount: number;
  /** Si el anuncio fue aprovado  */
  isApproved: boolean;
  /** Ruta de la edición */
  editLink: string;
  /** Indica si el registro esta activo */
  active: boolean;
}
/**
 * Componente para administración de ads cliente
 */
@Component({
  selector: 'app-admin-ads',
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-ads.component.html',
  styleUrl: './admin-ads.component.scss'
})

export class AdminAdsComponent {

  /** Poblamiendo de los anuncios */
  ads: Ad[] = [
    {
      id: 1,
      createdAt: '2025-10-15',
      user: {
        name: 'Juan Perez',
        email: 'juan.perez@mail.com'
      },
      category: 'Restaurant',
      imageUrl: 'img/elplateado.png',
      startDate: '2025-11-01',
      endDate: '2025-12-31',
      description: 'Promoción de verano',
      amount: 120000,
      isApproved: true,
      editLink: '/admin/adsedit',
      active: true,
    },
    {
      id: 2,
      createdAt: '2025-10-14',
      user: {
        name: 'Maria Gonzalez',
        email: 'maria.gonzalez@mail.com'
      },
      category: 'Evento',
      imageUrl: 'img/copa_bahia.png',
      startDate: '2025-11-15',
      endDate: '2025-11-20',
      description: 'Festival de música',
      amount: 80000,
      isApproved: false,
      editLink: 'admin_ads_editar.html',
      active: true,
    },
    {
      id: 3,
      createdAt: '2025-10-13',
      user: {
        name: 'Carlos Lopez',
        email: 'carlos.lopez@mail.com'
      },
      category: 'Tour',
      imageUrl: 'img/festival_xii.png',
      startDate: '2025-12-01',
      endDate: '2025-12-10',
      description: 'Tour por playas',
      amount: 150000,
      isApproved: true,
      editLink: 'admin_ads_editar.html',
      active: true,
    },
    {
      id: 4,
      createdAt: '2025-10-13',
      user: {
        name: 'Carlos Lopez',
        email: 'carlos.lopez@mail.com'
      },
      category: 'Tour',
      imageUrl: 'img/playas.png',
      startDate: '2025-12-01',
      endDate: '2025-12-10',
      description: 'Tour por playas',
      amount: 150000,
      isApproved: true,
      editLink: 'admin_ads_editar.html',
      active: true,
    }
  ];

 /**
  * Cambia el estado activo/inactivo del anuncio.
  * Este método podría ser conectado a una llamada a la base de datos.
  * @param ad El anuncio cuyo estado se desea alternar.
  */
  toggleActivo(ad: Ad): void {
    ad.active = !ad.active;
    // Aquí a db para persistir el cambio
  }
}
