import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

/**
 * Componente de acceso de usuario sitio web,
 */

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup;
  noCoincide = false;
  submitted = false;
  emailUsuaio: string = '';


  constructor(private fb: FormBuilder, private router: Router) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.formLogin = this.fb.group({

      email: ['', [Validators.required, Validators.minLength(10), Validators.pattern(emailRegex)]],
      password: ['', [Validators.required]],

    });
  }
  /* envío de formulario validado */
  onSubmit() {
    console.log('🔥 onSubmit() se ejecutó');
    this.submitted = true;
    this.formLogin.markAllAsTouched();

    if (this.formLogin.invalid) {
      //alert('Por favor completa todos los campos requeridos');
      return;
    }

    const { email, password } = this.formLogin.value;
    /** se crean unos usuaro por defecto roles usados admin y cliente */
    const credentials: Record<string, { password: string; route: string }> = {
      'admin@bahiainglesa.cl': { password: '123456', route: '/admin/index' },
      'editor@bahiainglesa.cl': { password: '123456', route: '/editor/index' },
      'usuario@gmail.com': { password: '123456', route: '/cliente/index' },
    };

    const user = credentials[email!];

    /** verificación de contraseña */
    if (user && user.password === password) {
      console.log('✅ Login correcto, redirigiendo a:', user.route);
      this.router.navigateByUrl(user.route);
    } else {
      console.warn('❌ Credenciales inválidas');
      const alert = document.getElementById('alertFailLogin');
      if (alert) {
        alert.classList.remove('d-none');
        alert.classList.add('fade', 'show');
      }
    }
  }






}
