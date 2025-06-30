import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Representa la sección de noticias destacados en la página,
 * mostrando información dinámica sobre eventos en general.
 */

interface Post {
  /** Fecha de la publicación */
  fecha: string;
  /** Autor de la publicación */
  autor: string;
  /** Titulo de la publicación */
  titulo: string;
  /** Texto de la publicación */
  texto: string;
  /** Ruta a contenido de la noticia */
  ruta: string; 
}

@Component({
  selector: 'app-posts',
  imports: [RouterModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  /**
   * Lista de noticias a mostrar en la sección.
   */
  posts: Post[] = [
    {
      fecha: '07/06/2025',
      autor: 'Equipo Bahia',
      titulo: '¡Bienvenidos!',
      texto: 'Descubre toda la oferta turística de nuestra región: playas, gastronomía, hospedaje, aventuras y cultura. Este sitio está diseñado para ayudarte a planificar tu próxima escapada. ¡Y no olvides suscribirte a nuestro boletín para recibir novedades y promociones exclusivas!',
      ruta: 'bienvenidos'
    },
    {
      fecha: '07/06/2025',
      autor: 'María González',
      titulo: 'Nueva ruta turística en la costa sur',
      texto: 'El Ministerio de Turismo ha inaugurado una nueva ruta costera con miradores, áreas verdes y acceso a playas escondidas...',
      ruta: 'noticias'
    }

  ];

}
