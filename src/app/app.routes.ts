
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobListedComponent } from './components/job-listed/job-listed.component';

export const routes: Routes = [
    {path:"home" , component:HomeComponent},
    {path:"job-listed" , component:JobListedComponent},
    {path:"" , component:HomeComponent},
    
    
];
