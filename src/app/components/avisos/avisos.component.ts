import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/**
 * Interface que representa los avisos mostrado en la sección principal
 */
interface Aviso {
  /** Clases para el icono FontAwesome */
  icono: string;
  /** Título destacado del aviso */
  titulo: string;
  /** Descripción breve del aviso */
  descripcion: string;
  /** Texto del botón de acción */
  btnTexto: string;
  /** Estilo CSS para el header de la tarjeta */
  headerStyle: string;
}
/**
 * Componente que muestra la sección de avisos en la página principal
 */
@Component({
  selector: 'app-avisos',
  imports: [RouterModule, CommonModule],
  templateUrl: './avisos.component.html',
  styleUrl: './avisos.component.scss'
})
export class AvisosComponent {
  /** Lista de avisos a mostrar en la sección. */
  avisos: Aviso[] = [
    {
      icono: 'fa-regular fa-building',
      titulo: 'Tú empresa puede estar aquí',
      descripcion: 'Pública en nuestro sitio',
      btnTexto: 'Ver publicidad',
      headerStyle: 'background: linear-gradient(135deg, #3498DB, #2980B9);'
    },
    {
      icono: 'fa-regular fa-lightbulb',
      titulo: 'Tú emprendimiento puede estar aquí',
      descripcion: 'Pública en nuestro sitio',
      btnTexto: 'Ver publicidad',
      headerStyle: 'background: linear-gradient(135deg, #27AE60, #229954);'
    }
  ];
}
