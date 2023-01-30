import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiServeUrl=environment.apiServerUrl;


  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServeUrl}/proyecto/all`);
  }

  public addProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiServeUrl}/proyecto/id`,proyecto);
  }

  public deleteProyecto(proyecto : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/proyecto/delete/${proyecto}`);
  }

  public updateProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiServeUrl}/proyecto/update`,proyecto);
  }

}
