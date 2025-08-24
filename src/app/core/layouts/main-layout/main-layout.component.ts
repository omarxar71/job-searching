import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, RouterModule , RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
