import { Injectable } from '@angular/core';
import { Progreso } from '../model/progreso';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgresoService {

  private apiServeUrl=environment.apiServerUrl;


  constructor(private http:HttpClient) { }

  public getProgreso():Observable<Progreso[]>{
    return this.http.get<Progreso[]>(`${this.apiServeUrl}/progreso/all`);
  }

  public addProgreso(progreso:Progreso):Observable<Progreso>{
    return this.http.post<Progreso>(`${this.apiServeUrl}/progreso/id`,progreso);
  }

  public deleteProgreso(progreso : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/progreso/delete/${progreso}`);
  }

  public updateProgreso(progreso:Progreso):Observable<Progreso>{
    return this.http.put<Progreso>(`${this.apiServeUrl}/progreso/update`,progreso);
  }

}
