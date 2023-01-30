import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private apiServeUrl=environment.apiServerUrl;
   
  constructor(private http:HttpClient) { }

  public getUser():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServeUrl}/user/buscar`);
  }


  
  }

  


