import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../env/global';
import { jwtDecode } from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  register=(form:any):Observable<any>=>{
    return this._HttpClient.post(baseUrl+"auth/register" , form)
  }


  loginApi=(form:any):Observable<any>=>{
    return this._HttpClient.post(baseUrl+"auth/login", form)
  }
  decodeToken =()=>{
    let token = localStorage.getItem("token")
    try {
      if(token){
        let Decoded =jwtDecode(token)
        console.log(Decoded)
      }
    } catch (error:any) {
      console.log(error + "error from token decoding")
    }
  }
}
