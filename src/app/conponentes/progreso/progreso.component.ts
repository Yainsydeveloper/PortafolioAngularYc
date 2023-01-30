import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Progreso } from 'src/app/model/progreso';
import { ProgresoService } from 'src/app/servicios/progreso.service';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {

  public progresos:Progreso[]=[];
  public editProgreso: Progreso| undefined;
  public deleteProgreso :Progreso | undefined;
 
  constructor(private progresoService:ProgresoService) { 
    
  }

  ngOnInit(): void {
    this.getProgresos();
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
  public onOpenModal(mode:  String, progreso? :Progreso) : void{
    const container= document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');

    if(mode==='add'){
      button.setAttribute('data-target', '#addProgresoModal');

  } else if(mode==='delete'){
    this.deleteProgreso=progreso;
    button.setAttribute('data-target','#deleteProgresoModal');

  }else if(mode==='edit'){
  this.editProgreso=progreso;
  button.setAttribute('data-target','#editProgresoModal');
  
  }
  container?.appendChild(button);
  button.click();

 }
 public onAddProgreso(addForm: NgForm):void{
  document.getElementById('add-progreso-form')?.click();
  this.progresoService.addProgreso(addForm.value).subscribe({
    next:(response :Progreso)=> {
      console.log(response);
      this.getProgresos();
      addForm.reset();
    },

    error:(error:HttpErrorResponse)=>{
    alert(error.message);
    addForm.reset();
    }
  
  })
 }
 public onUpdateProgreso(progreso: Progreso){
  this.editProgreso=progreso;
  document.getElementById('add-progreso-form')?.click();
  this.progresoService.updateProgreso(progreso).subscribe({
    next:(response :Progreso)=> {
      console.log(response);
      this.getProgresos();
     
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
 }

 public onDeleteProgreso(idPro: number):void{
  
  this.progresoService.deleteProgreso(idPro).subscribe({
    next:(response:void) => {
      console.log(response);
      this.getProgresos();
     
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
 }
 


 



}
