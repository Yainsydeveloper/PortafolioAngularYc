import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Encabezado } from 'src/app/model/encabezado';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public encabezado:Encabezado|undefined;
  public editEncabezado: Encabezado| undefined;
  public deleteEncabezado :Encabezado | undefined;
    miPorfolio:any;
  
  constructor(private encabezadoService:EncabezadoService) {}
  
      ngOnInit(): void {
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
  
      public onOpenModal(mode:  String, encabezado? :Encabezado) : void{
        const container= document.getElementById('main-container');
        const button = document.createElement('button');
        button.style.display='none';
        button.setAttribute('data-toggle', 'modal');
  
        if(mode==='add'){
          button.setAttribute('data-target', '#addEncabezadoModal');
  
      } else if(mode==='delete'){
        this.deleteEncabezado=encabezado;
        button.setAttribute('data-target','#deleteEncabezadoModal');
  
      }else if(mode==='edit'){
      this.editEncabezado=encabezado;
      button.setAttribute('data-target','#editEncabezadoModal');
  
      }
      container?.appendChild(button);
      button.click();
  
      }
      public onAddEncabezado(addForm: NgForm):void{
      document.getElementById('add-encabezado-form')?.click();
      this.encabezadoService.addEncabezado(addForm.value).subscribe({
        next:(response :Encabezado)=> {
          console.log(response);
          this.getEncabezado();
          addForm.reset();
        },
  
        error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
        }
  
      })
      }
      public onUpdateEncabezado(encabezado: Encabezado){
      this.editEncabezado=encabezado;
      document.getElementById('add-encabezado-form')?.click();
      this.encabezadoService.updateEncabezado(encabezado).subscribe({
        next:(response :Encabezado)=> {
          console.log(response);
          this.getEncabezado();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
      }
  
      public onDeleteEncabezado(idEnc: number):void{
  
      this.encabezadoService.deleteEncabezado(idEnc).subscribe({
        next:(response:void) => {
          console.log(response);
          this.getEncabezado();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
      }
  
}
