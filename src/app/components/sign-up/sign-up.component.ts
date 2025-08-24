import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule , RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  isBtnSubmit : boolean = false;
  private readonly _AuthService=inject(AuthService)
  private readonly _Router=inject(Router)
  registerForm =new FormGroup({
    userName:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null),

  })


  onSubmit(){
    this.isBtnSubmit=true
    if(this.registerForm.valid){
      this._AuthService.register(this.registerForm.value).subscribe({
        next:(res)=>{
          this.isBtnSubmit = false;
          console.log(res)
          if(res.message == "success"){
            this._Router.navigate(["auth/log-in"])
          }
        },
        error:(err)=>{
          this.isBtnSubmit = false;
          console.log(err.message)
          if(err.message.includes("Http failure response for "))
            console.log("email already exists")
        },

      })
    }
  }
}
