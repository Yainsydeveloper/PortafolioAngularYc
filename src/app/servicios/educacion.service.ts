import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiServeUrl=environment.apiServerUrl;


  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServeUrl}/educacion/all`);
  }

  public addEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServeUrl}/educacion/id`,educacion);
  }

  public deleteEducacion(educacion : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/educacion/delete/${educacion}`);
  }

  public updateEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServeUrl}/educacion/update`,educacion);
  }

}