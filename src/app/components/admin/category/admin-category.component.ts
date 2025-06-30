import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Representa la sección de administración de categorias
 */

/** interfaz para poblar categorías */
interface Category {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-admin-category',
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-category.component.html',
  styleUrl: './admin-category.component.scss'
})
export class AdminCategoryComponent {

  /** Poblamiento de categorías */
  categories: Category[] = [
    {
      id: 1,
      name: 'Restaurant',
      description: 'Avisos relacionados a gastronomia de bahía inglesa',
      isActive: true
    },
    {
      id: 2,
      name: 'Eventos',
      description: 'Avisos relacionados a eventos, ferias etc.',
      isActive: true
    },
    {
      id: 3,
      name: 'Tour',
      description: 'Avisos relacionados con oferta tours.',
      isActive: true
    }
  ];


}
