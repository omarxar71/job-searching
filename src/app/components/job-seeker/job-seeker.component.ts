import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-seeker',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './job-seeker.component.html',
  styleUrl: './job-seeker.component.css'
})
export class JobSeekerComponent {
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
 
}


