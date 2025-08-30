import { Component, inject, OnInit } from '@angular/core';
import { JobService } from '../../core/services/job.service';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-job-listed',
  standalone: true,
  imports: [DatePipe, RouterLink, RouterOutlet],
  templateUrl: './job-listed.component.html',
  styleUrl: './job-listed.component.css'
})
export class JobListedComponent implements OnInit {
  allJobs:any
private readonly _JobService= inject(JobService)
ngOnInit(): void {
    this._JobService.getAllJobs().subscribe({
      next:(res)=>{
        console.log(res);
        this.allJobs=res.data
      }
    })
}
}
