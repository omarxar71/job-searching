import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../core/services/job.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {
private readonly _ActivatedRoute=inject(ActivatedRoute)
private readonly _JobService=inject(JobService)
id:any
ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{

        this.id=params.get("id")
      }
    })
    this._JobService.getOneJob(this.id).subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
}
}
