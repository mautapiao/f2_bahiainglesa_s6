import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
/**
 * Formulario de contacto uso de NgModel
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',

})
export class ContactComponent {

  /**
  * Objeto json prueba de NgModel
  */
  contacto = {
    nombre: 'Usuario Cliente',
    email: 'usuario@gmail.com',
    mensaje: ''
  };

  /**
  * Metodo para envío de Formulario de contacto uso de NgModel
  */
  enviarFormulario(form: NgForm) {
    console.log('Formulario enviado:', this.contacto);
    alert(`Gracias por escribirnos, ${this.contacto.nombre}`);
    /** Limpia los campor del formulario  */
    form.resetForm();

    //this.contacto = { nombre: 'Usuario Cliente', email: 'usuario@gmail.com', mensaje: '' };

  }
}
