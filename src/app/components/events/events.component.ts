import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Muestra una lista de eventos turísticos destacados de la región.
 */
interface Evento {
  imagen: string;       // imagen del evento
  alt: string;          // descripcion imagen
  descripcion: string;  // descripocion evento
  fecha: string;        // fecha del evento
  fondo?: string;       // color linear de forno
}

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
   /**
   * Lista de eventos turísticos con su imagen, descripción y fecha.
   */
  eventos: Evento[] = [
    {
      imagen: 'img/festival_xii_banner.png',
      alt: 'Festival XII',
      descripcion: 'Anunciamos que se abrirán convocatorias para la edición 2026 del Festival Internacional de Gastronomía de Bahía Inglesa, revisa nuestras redes sociales para mayor información.',
      fecha: 'Verano 2026'
    },
    {
      imagen: 'img/copa_bahia.png',
      alt: 'Copa Bahía',
      descripcion: 'Atacama se prepara para la Copa Bahía Inglesa 2024: natación, canotaje polinésico y stand up paddle protagonizan esta fiesta deportiva con identidad regional.',
      fecha: 'Noviembre 2025',
      fondo: 'linear-gradient(135deg, #16A085, #1ABC9C)'
    }
  ];
  
}
