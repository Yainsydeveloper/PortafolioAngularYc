import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/persona.model';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiServeUrl=environment.apiServerUrl;

  constructor(private http:HttpClient) { }

  
  public getUsuarioAll():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServeUrl}/usuario/all`);
  }
  public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServeUrl}/usuario/id/1`);
  }

  public addUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiServeUrl}/usuario/id`,usuario);
  }

  public deleteUsuario(usuario: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/usuario/delete/${usuario}`);
  }


  public updateUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiServeUrl}/usuario/update`,usuario);
  }

  odtenerDatos():Observable<any>{
    return this.http.get("./assets/data/data.json");
    
  }

  
}

