
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobListedComponent } from './components/job-listed/job-listed.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ListJobComponent } from './components/list-job/list-job.component';

export const routes: Routes = [
    {path:"home" , component:HomeComponent},
    {path:"job-listed" , component:JobListedComponent},
    {path:"companies" , component:CompaniesComponent},
    {path:"list-Job" , component:ListJobComponent},
    {path:"" , component:HomeComponent},
    
    
];
