import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
/**
 * Interface que representa los valores de los avisos 
 */
interface AdSpot {
  /** id numerico autoincremento */
  id: number;
  /** nombre de categoria */
  category: string;
  /** tamaño publicacion */
  size: string;
  /** localizacion en pantalla */
  location: string;
  /** precio diario */
  dailyPrice: string;
  /** precio semanal */
  weeklyPrice: string;
  /** precio mensual */
  monthlyPrice: string;
  /** precio anual */
  annualPrice: string;
  /** descripcion plan */
  description: string;
}
/**
 * Componente que muestra los valores de los planes cliente
 */
@Component({
  selector: 'app-admin-plans',
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-plans.component.html',
  styleUrl: './admin-plans.component.scss'
})

export class AdminPlansComponent {
  /** Poblamiento de registros plan */
  adSpots: AdSpot[] = [
    {
      id: 1,
      category: 'Hotel',
      size: 'Grande',
      location: 'Página Principal',
      dailyPrice: '$5.000',
      weeklyPrice: '$30.000',
      monthlyPrice: '$100.000',
      annualPrice: '$900.000',
      description: 'Anuncio destacado en el header principal',
    },
    {
      id: 2,
      category: 'Camping',
      size: 'Pequeño',
      location: 'Sección Hospedaje',
      dailyPrice: '$2.000',
      weeklyPrice: '$12.000',
      monthlyPrice: '$40.000',
      annualPrice: '$300.000',
      description: 'Anuncio lateral para visibilidad económica',
    },
  ];

}
