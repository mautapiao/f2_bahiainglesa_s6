import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Representa la sección de restaurantes recomendados en la página principal.
 */
interface Tour {
  /** Titulo para el tour o nombre de la empresa */
  titulo: string;
  /** Detalle básico del tour ofrecido */
  detalle: string;
  /** Clase para icono FontAwesome */
  icono: string;
}

@Component({
  selector: 'app-tours',
  imports: [CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent {
  /**
   * Lista de tours destacados para mostrar.
   */
  tours: Tour[] = [
    {
      titulo: 'GeoTurismo Atacama',
      detalle: 'Tours en Caldera y Bahía inglesa',
      icono: 'fa-regular fas fa-ship',
    
    },
    {
      titulo: 'Senderismo',
      detalle: 'Camina por senderos naturales',
      icono: 'fa-regular fas fa-hiking',
    },
    {
      titulo: 'Tour Fotográfico',
      detalle: 'Captura los mejores momentos',
      icono: 'fa-regular fas fa-camera',
    }
  ];

}
