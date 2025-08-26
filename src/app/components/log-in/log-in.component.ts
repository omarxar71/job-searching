import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  private readonly _AuthService = inject(AuthService)
  private readonly _Router = inject(Router)
  loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(4)] })
  });

  onSubmit() {
    if (this.loginForm.valid) {
     this._AuthService.loginApi(this.loginForm.value).subscribe({
      next : (res)=>{
        console.log(res);
        this._Router.navigate(["/role"])
        localStorage.setItem("token" ,res.giveToken)
        this._AuthService.decodeToken()
      } , 
      error: (err)=>{
        console.log(err.message +"error from log in")
      }
     })
      
    }
  }
}
