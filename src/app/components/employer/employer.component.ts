import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employer',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './employer.component.html',
  styleUrl: './employer.component.css'
})
export class EmployerComponent {
  private readonly _UserService = inject(UserService)
  employerForm = new FormGroup({
    companyName : new FormControl(null),
    companyWebsite : new FormControl(null),
    companyDescription : new FormControl(null)
  })




  onSubmit(){
    if(this.employerForm.valid){
      this._UserService.createEmployerApi(this.employerForm.value).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{}
      })
    }
  }
}
