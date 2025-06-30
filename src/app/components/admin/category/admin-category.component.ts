import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Interface que representa ulas categorias de avisos
 */
interface Category {
  /** id numerico autoincremento */
  id: number;
  /** nombre de la categoria */ 
  name: string;
  /** descripción de la categoría */
  description: string;
  /** activo o no */
  isActive: boolean;
}
/**
 * Componente que muestra las categorias del sistema para los avisos
 */
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