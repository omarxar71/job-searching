import { Component } from '@angular/core';
import { AuthNavbarComponent } from "../../../components/auth-navbar/auth-navbar.component";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthNavbarComponent, RouterModule , RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
