import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employer-or-job-seeker',
  standalone: true,
  imports: [],
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
      this.router.navigate(['/employer-dashboard']);
    } else {
      this.router.navigate(['/jobseeker-dashboard']);
    }
  }
}
