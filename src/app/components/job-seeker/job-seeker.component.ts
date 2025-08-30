import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-seeker',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './job-seeker.component.html',
  styleUrl: './job-seeker.component.css'
})
export class JobSeekerComponent {
  private readonly _UserService = inject(UserService)
  private readonly _Router = inject(Router)
  jobSeekerForm! : FormGroup
  constructor(private fb: FormBuilder) { 
    this.jobSeekerForm = this.fb.group({
      skills : this.fb.array([this.fb.control("")]),
      experience : this.fb.array([]),
      education : this.fb.array([]),
    })
  }
  //getters for the arrays 
  getSkills (){
    return this.jobSeekerForm.get("skills") as FormArray;
  }
  getExperience (){
    return this.jobSeekerForm.get("experience") as FormArray;
  }
  getEducation (){
    return this.jobSeekerForm.get("education") as FormArray;
  }
  //form groups for the all the arrays 
  experienceFormGroup ():FormGroup{
    return this.fb.group({
      jobTitle: ['', Validators.required],
    company: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: [''],
    description: ['', Validators.maxLength(500)]
    })
  }
  educationFormGroup ():FormGroup{
    return this.fb.group({
      school: ['', Validators.required],
      degree: ['', Validators.required],
      fieldOfStudy: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['']
    })
  }

  // adding
  addSkill (){
    return this.getSkills().push(this.fb.control(""))
  }
  addExperience (){
    return this.getExperience().push(this.experienceFormGroup())
  }
  addEducation (){
    return this.getEducation().push(this.educationFormGroup())
  }
  submit(){
    console.log(this.jobSeekerForm.value)
     
      this._UserService.createJobSeeker(this.jobSeekerForm.value).subscribe({
        next:(res)=>{
          this._Router.navigate(["/main/home"])
        },
        error:(err)=>{
          console.log(err)
        }
      })
     
  }
}


