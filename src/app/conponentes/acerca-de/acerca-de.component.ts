import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public usuario:Usuario |undefined;
  public editUsuario:Usuario |undefined; 
  public deleteUsuario :Usuario | undefined;
  miPorfolio:any;
 

  constructor(public personaService:PersonaService) { } 

  ngOnInit(): void {
    this.getUsuario();
    this.personaService.odtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPorfolio = data;
      });


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
  
  public onOpenModal(mode:  String, usuario? :Usuario) : void{
    const container= document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');

    if(mode==='add'){
      button.setAttribute('data-target', '#addUsuarioModal');

  } else if(mode==='delete'){
    this.deleteUsuario=usuario;
    button.setAttribute('data-target','#deleteUsuarioModal');

  }else if(mode==='edit'){
  this.editUsuario=usuario;
  button.setAttribute('data-target','#editUsuarioModal');
  
  }
  container?.appendChild(button);
  button.click();

 }
 public onAddUsuario(addForm: NgForm):void{
  document.getElementById('add-usuario-form')?.click();
  this.personaService.addUsuario(addForm.value).subscribe({
    next:(response :Usuario)=> {
      console.log(response);
      this.getUsuario();
      addForm.reset();
    },

    error:(error:HttpErrorResponse)=>{
    alert(error.message);
    addForm.reset();
    }
  
  })
 }
 public onUpdateUsuario(usuario: Usuario){
  this.editUsuario=usuario;
  document.getElementById('add-usuario-form')?.click();
  this.personaService.updateUsuario(usuario).subscribe({
    next:(response :Usuario)=> {
      console.log(response);
      this.getUsuario();
     
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
 }

 public onDeleteUsuario(id: number):void{
  
  this.personaService.deleteUsuario(id).subscribe({
    next:(response:void) => {
      console.log(response);
      this.getUsuario();
     
      
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
 }
}