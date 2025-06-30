import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Representa la sección de administración de post o noticias
 */


/** Interface para las noticias */
interface Notice {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-admin-post',
  imports: [RouterModule,CommonModule],
  templateUrl: './admin-post.component.html',
  styleUrl: './admin-post.component.scss'
})
export class AdminPostComponent {

  /** Carga de noticias */
  notices: Notice[] = [
    {
      id: 1,
      title: 'Bienvenidos',
      description: `Descubre toda la oferta turística de nuestra región: playas, gastronomía, hospedaje,
aventuras y cultura.
Este sitio está diseñado para ayudarte a planificar tu próxima escapada.
¡Y no olvides suscribirte a nuestro boletín para recibir novedades y promociones exclusivas!`,
      isActive: true,
    },
    {
      id: 2,
      title: 'Nueva ruta turística en la costa sur',
      description: `El Ministerio de Turismo ha inaugurado una nueva ruta costera con miradores, áreas verdes y acceso a playas escondidas...`,
      isActive: true,
    },
  ];


}
