import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/**
 * Interface que representa la sección de avisos columna derecha
 */
export interface Hospedaje {
  /** Nombre Item */
  nombre: string;
  /** Tipo servicio */
  tipo: 'hotel' | 'hostal' | 'oferta';
  /** Descripción servicios */
  descripcion: string;
  /** Precio servicio por noche, si aplica */
  precioPorNoche?: number; 
  /** Estrellas si aplica */
  estrellas?: number;
  /** Icono servicio */
  icono: string;
  /** Icono color */
  colorIcono: string;
  /** Texto botón acción */
  textoBoton: string;
  /** Color botón acción */
  colorBoton: string;
  /** Define si es oferta especial */
  esOfertaEspecial?: boolean;
  /** Detalle oferta */
  detalleOferta?: string;
}
/**
 * Componente que muestra la sección columna derecha en la página principal
 */
@Component({
  selector: 'app-right-column',
  imports: [RouterModule, CommonModule],
  templateUrl: './right-column.component.html',
  styleUrl: './right-column.component.scss'
})
export class RightColumnComponent {
 /** Lista de hospedaje recomendado. */
  hospedajes: Hospedaje[] = [
  {
    nombre: 'Hotel Bahia Resort',
    tipo: 'hotel',
    descripcion: 'Lujo frente al mar con todas las comodidades',
    precioPorNoche: 199,
    estrellas: 5,
    icono: 'fas fa-hotel',
    colorIcono: 'text-primary',
    textoBoton: 'Reservar Ahora',
    colorBoton: 'btn-primary'
  },
  {
    nombre: 'Hostal Aventurero',
    tipo: 'hostal',
    descripcion: 'Económico y acogedor para viajeros',
    precioPorNoche: 45,
    estrellas: 4,
    icono: 'fas fa-bed',
    colorIcono: 'text-warning',
    textoBoton: 'Ver Disponibilidad',
    colorBoton: 'btn-gold'
  },
  {
    nombre: 'Oferta Especial',
    tipo: 'oferta',
    descripcion: '¡Reserva 3 noches y obtén 1 gratis!',
    icono: 'fas fa-gift',
    colorIcono: '',
    textoBoton: 'Aprovechar Oferta',
    colorBoton: 'btn-light',
    esOfertaEspecial: true,
    detalleOferta: 'Reserva 3 noches y obtén 1 gratis'
  }
];
}