
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobListedComponent } from './components/job-listed/job-listed.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ListJobComponent } from './components/list-job/list-job.component';
import { EmployerOrJobSeekerComponent } from './components/employer-or-job-seeker/employer-or-job-seeker.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { EmployerComponent } from './components/employer/employer.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { RoleLayoutComponent } from './core/layouts/role-layout/role-layout.component';

export const routes: Routes = [
    {
   
    path:"auth" ,component: AuthLayoutComponent , children:[
        {path: "" , redirectTo:"sign-up" , pathMatch: "full"},
        {path:"sign-up" , component:SignUpComponent},
        {path:"log-in" , component:LogInComponent},
    ]},
    {path:"role" , component:RoleLayoutComponent , children:[
        {path:"choose-role" , component:EmployerOrJobSeekerComponent},
        {path:"employer" , component:EmployerComponent} , 
        {path:"job-seeker" , component:JobSeekerComponent},
        {path:"", redirectTo:"choose-role" , pathMatch:"full"}
    ]},
    {path:"main",canActivate:[authGuard] , component:MainLayoutComponent, children : [
        {path :  "" , redirectTo:"home" , pathMatch:"full" },
        {path:"home" , component:HomeComponent},
        {path:"job-listed" , component:JobListedComponent},
        {path:"companies" , component:CompaniesComponent},
        {path:"list-Job" , component:ListJobComponent},
        {path:"employer-or-seeker" , component:EmployerOrJobSeekerComponent},
      
    ]},
    {path: "" , redirectTo:"auth/sign-up" , pathMatch: "full"},
];
