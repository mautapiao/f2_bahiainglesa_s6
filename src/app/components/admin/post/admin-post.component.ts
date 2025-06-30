import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/**
 * Interface que representa los post o noticias
 */
interface Notice {
  /** id numerico autoincremento */
  id: number;
  /** titulo de la noticia */
  title: string;
  /** descripcion noticia */
  description: string;
  /** Activo o no */
  isActive: boolean;
}
/**
 * Componente que muestras los post al administrador
 */
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