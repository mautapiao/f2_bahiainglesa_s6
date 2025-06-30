import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

/**
 * Area de cliente administración de su perfil o cuenta
 */
@Component({
  selector: 'app-my-account',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent {

  /**
  * Definición de variables
  */
  formAccount: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.formAccount = this.fb.group({
      nombreCompleto: ['Mauricio Tapia Ortega', [Validators.required, Validators.minLength(4)]],
      nombreUsuario:  ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  /**
   * Envío de formulario
   */
  onSubmit(): void {

    this.submitted = true;
    this.formAccount.markAllAsTouched();

    /** Valida si se han ingresado los campos */
    if (this.formAccount.invalid) {
      Swal.fire({
        title: 'Por favor completa todos los campos requeridos',
        icon: 'warning',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      return;
    }

    /** Muestra un mesaje al usuario de registro existoso */
    Swal.fire({
      icon: 'success',
      title: 'Cuenta Actualizada',
      text: `${this.formAccount.value.nombreCompleto}`,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });

    console.log('Formulario válido', this.formAccount.value);
  }

}
