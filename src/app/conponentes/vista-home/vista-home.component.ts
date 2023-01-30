import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Encabezado } from 'src/app/model/encabezado';
import { Experiencia } from 'src/app/model/experiencia';
import { Usuario } from 'src/app/model/persona.model';
import { Progreso } from 'src/app/model/progreso';
import { Proyecto } from 'src/app/model/proyecto';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ProgresoService } from 'src/app/servicios/progreso.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-vista-home',
  templateUrl: './vista-home.component.html',
  styleUrls: ['./vista-home.component.css']
})

export class VistaHomeComponent implements OnInit {
  public encabezado:Encabezado|undefined;
  miPorfolio:any;
  public usuario:Usuario |undefined;
  public educaciones:Educacion[]=[];
  public experiencias:Experiencia[]=[];
  public proyectos:Proyecto[]=[];
  public progresos:Progreso[]=[];

  constructor(private encabezadoService:EncabezadoService,
              public personaService:PersonaService,
              private educacionService:EducacionService,
              private experienciaService:ExperienciaService,
              private proyectoService:ProyectoService,
              private progresoService:ProgresoService
    
    ) { }

  ngOnInit(): void {
    this.getProgresos();
    this.getProyectos();
    this.getExperiencias();
    this.getEducaciones();
    this.getUsuario();
    this.getEncabezado();
      this.encabezadoService.odtenerDatos().subscribe(data=>{
        console.log(data);
        this.miPorfolio = data;
        });

  }
  public getEncabezado(): void {
    this.encabezadoService.getEncabezado().subscribe({
      next:(response:Encabezado) =>{
      this.encabezado = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }

    })
  
  }

  public getUsuario(): void {
    this.personaService. getUsuario().subscribe({
      next:(response:Usuario) =>{
      this.usuario = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }

    })
   
  }

  public getEducaciones(): void {
    this.educacionService. getEducacion().subscribe({
      next:(response:Educacion[]) =>{
      this.educaciones = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
  
    })
   
  }

  public getExperiencias(): void {
    this.experienciaService. getExperiencia().subscribe({
      next:(response:Experiencia[]) =>{
      this.experiencias = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }

    })
   
  }

  public getProyectos(): void {
    this.proyectoService. getProyecto().subscribe({
      next:(response:Proyecto[]) =>{
      this.proyectos = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
  
    })
   
  }

  public getProgresos(): void {
    this.progresoService. getProgreso().subscribe({
      next:(response:Progreso[]) =>{
      this.progresos = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }

    })
   
  }


  loguearse(){
    location.href = "/login"
  }

  registrarse(){
    location.href = "/signin"
  }


}

