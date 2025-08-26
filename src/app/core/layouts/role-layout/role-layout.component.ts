import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";
import { RoleNavbarComponent } from "../../../components/role-navbar/role-navbar.component";

@Component({
  selector: 'app-role-layout',
  standalone: true,
  imports: [RouterModule, RoleNavbarComponent , RouterOutlet],
  templateUrl: './role-layout.component.html',
  styleUrl: './role-layout.component.css'
})
export class RoleLayoutComponent {

}
