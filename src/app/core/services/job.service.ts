import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../env/global';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _HttpClient:HttpClient) { }
  getAllJobs=():Observable<any>=>{
    return this._HttpClient.get(baseUrl+"job/all-jobs")
  }
  getOneJob = (id:any):Observable<any>=>{
    return this._HttpClient.get(`${baseUrl}job/one-job/${id}`)
  }
}
