import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Area de cliente administración de Ads que ha publicado Ad
 * Las propiedades de esta interfaz están escritas en inglés para seguir buenas prácticas,
 */

/** Define una interface para los ad */
interface Ad {
  id: number;
  /** fecha envío (YYYY-MM-DD) */
  sendDate: string; 
  /** categoría (Restaurant, Evento, Tour)  */ 
  category: string;    
  /** ruta imagen */
  imageSrc: string;   
  /** fecha desde */
  startDate: string;
  /** fecha hasta */
  endDate: string;   
  /** Comentario Ad */    
  comment: string;
  /** Url objetivo */
  url: string;
  /** con formato string, ej. '$120.000' */
  cost: string;      
  /** true = Sí, false = No  */
  paid: boolean;         
}

@Component({
  selector: 'app-my-ads',
  imports: [RouterModule,CommonModule],
  templateUrl: './my-ads.component.html',
  styleUrl: './my-ads.component.scss'
})
export class MyAdsComponent {

  /** Se ingrean Ad por defecto */
  ads: Ad[] = [
    {
      id: 1,
      sendDate: '2025-10-15',
      category: 'Restaurant',
      imageSrc: 'img/elplateado.png',
      startDate: '2025-11-01',
      endDate: '2025-12-31',
      comment: 'Promoción de verano',
      url: '#',
      cost: '$120.000',
      paid: true,
    },
    {
      id: 2,
      sendDate: '2025-10-14',
      category: 'Evento',
      imageSrc: 'img/copa_bahia.png',
      startDate: '2025-11-15',
      endDate: '2025-11-20',
      comment: 'Festival de música',
      url: '#',
      cost: '$80.000',
      paid: false,
    },
    {
      id: 3,
      sendDate: '2025-10-13',
      category: 'Evento',
      imageSrc: 'img/festival_xii.png',
      startDate: '2025-12-01',
      endDate: '2025-12-10',
      comment: 'Tour por playas',
      url: '#',
      cost: '$150.000',
      paid: true,
    },
    {
      id: 4,
      sendDate: '2025-10-13',
      category: 'Tour',
      imageSrc: 'img/playas.png',
      startDate: '2025-12-01',
      endDate: '2025-12-10',
      comment: 'Tour por playas',
      url: '#',
      cost: '$150.000',
      paid: true,
    }
  ];

}
