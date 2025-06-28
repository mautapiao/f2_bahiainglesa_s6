import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroBahiaComponent } from "./hero-bahia/hero-bahia.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RightColumnComponent } from "./right-column/right-column.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bahiainglesa_ng';
}
