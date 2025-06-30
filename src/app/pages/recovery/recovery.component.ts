import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
/**
 * Componente que muestra la sección de recuperar contraseña.
 */
@Component({
  selector: 'app-recovery',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.scss'
})

export class RecoveryComponent {
  formRecovery: FormGroup;
  submitted = false;

  /* Constructor */
  constructor(private fb: FormBuilder) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /* Validación de correo electrónico */
    this.formRecovery = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(10), Validators.pattern(emailRegex)]],
    });
  }

  /* Evento envío de formulario */ 
  onSubmit() {

    this.submitted = true;
    this.formRecovery.markAllAsTouched();

    /* si el formulario es invalido */
    if (this.formRecovery.invalid) {
      /* muestra mensaje de alerta */
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        text: 'Por favor ingresa un correo válido',
        timer: 3000,
        showConfirmButton: true,
        position: 'center',
        timerProgressBar: true,
        showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown',
      }
      });
      return;
    }

    /* obtengo el valor del input email */
    const { email } = this.formRecovery.value;

    /* muestro mesaje success */
    Swal.fire({
      icon: 'info',
      title: 'Correo enviado',
      text: `Si el correo ${email} está registrado, recibirás instrucciones por email.`,
      timer: 5000,
      showConfirmButton: true,
      position: 'center',
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown',
      }
    }).then(() => {
      this.formRecovery.reset(); // Limpia el campo
      this.submitted = false;
    });

    /* implementar aqui la logica de envio de link etc */
  }
}