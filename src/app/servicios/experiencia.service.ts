import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiServeUrl=environment.apiServerUrl;


  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServeUrl}/experiencia/all`);
  }

  public addExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServeUrl}/experiencia/id`,experiencia);
  }

  public deleteExperiencia(experiencia : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/experiencia/delete/${experiencia}`);
  }

  public updateExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServeUrl}/experiencia/update`,experiencia);
  }

}
