import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Representa la sección de restaurantes recomendados en la página principal.
 */
interface Restaurante {
  nombre: string;
  descripcion: string;
  ciudad: string;
  imagen: string;
  instagram: string;
}

@Component({
  selector: 'app-restaurants',
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {
  /**
   * Lista de restaurantes destacados para mostrar en la sección.
   */
  restaurantes: Restaurante[] = [
    {
      nombre: 'El Plateao',
      descripcion: 'Especialidad en mariscos frescos frente a la playa. Ambiente familiar y vista al atardecer.',
      ciudad: 'Bahía Inglesa',
      imagen: 'img/elplateado.png',
      instagram: 'https://www.instagram.com/elplateaoatacama/?hl=es'
    },
    {
      nombre: 'Coral Restaurant',
      descripcion: 'Propuesta gastronómica basada en cocinas populares y productos del mar.',
      ciudad: 'Bahía Inglesa',
      imagen: 'img/coralbahia.png',
      instagram: 'https://www.instagram.com/coraldebahia/?hl=es'
    }
  ];
  
}
