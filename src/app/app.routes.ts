import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlayasComponent } from './pages/playas/playas.component';
import { BienvenidosComponent } from './pages/bienvenidos/bienvenidos.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

export const routes: Routes = [
  // 🔒 Rutas de autenticación (sin header/sidebar)
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recovery', component: RecoveryComponent}
    ]
  },
  
  // 🧩 Layout principal (con header/sidebar)
  {
    path: '',
    component: MainLayoutComponent, 
    children: [
      { path: '', component: InicioComponent },
      { path: 'playas', component: PlayasComponent },
      { path: 'bienvenidos', component: BienvenidosComponent },
      { path: 'noticias', component: NoticiasComponent }
    ]
  }
];