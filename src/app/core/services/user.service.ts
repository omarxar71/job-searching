import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../env/global';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
private readonly _HttpClient = inject(HttpClient)

createEmployerApi=(form : any):Observable<any>=>{
  console.log(localStorage.getItem("token"));  
 return this._HttpClient.post(baseUrl+"user/employer" , form ,{
  headers:{
    
    auth : localStorage.getItem("token")!
  }
 } )
}
createJobSeeker (form:any):Observable<any>{
  return this._HttpClient.post(baseUrl+"user/job-seeker" , form , {
    headers:{
      auth:localStorage.getItem("token")!
    }
  })
}
}
