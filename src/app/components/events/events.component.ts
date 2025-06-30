import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Interface que representa los eventos destacados  en la sección principal
 */
interface Evento {
  /** imgane del evento */
  imagen: string;    
  /** descripcion de la imagen */   
  alt: string;          
  /** descripcion evento */
  descripcion: string;  
  /** fecha evento */
  fecha: string;        
  /** fondo linear */
  fondo?: string;      
}
/**
 * Componente que muestra la sección de eventos destacados en la página principal
 */
@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
   /** Lista de eventos turísticos con su imagen, descripción y fecha. */
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