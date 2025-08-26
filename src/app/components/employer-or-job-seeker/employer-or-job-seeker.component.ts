import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleNavbarComponent } from "../role-navbar/role-navbar.component";
@Component({
  selector: 'app-employer-or-job-seeker',
  standalone: true,
  imports: [RoleNavbarComponent],
  templateUrl: './employer-or-job-seeker.component.html',
  styleUrl: './employer-or-job-seeker.component.css'
})
export class EmployerOrJobSeekerComponent {
  constructor(private router: Router) {}

  selectRole(role: string) {
    // Store role in localStorage (or send to backend)
    localStorage.setItem('userRole', role);

    // Redirect based on role
    if (role === 'employer') {
      this.router.navigate(['/role/employer']);
    } else {
      this.router.navigate(['/role/job-seeker']);
    }
  }
}
