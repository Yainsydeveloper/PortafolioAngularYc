import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: any = {};
  loading:boolean = false;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  }

  crear(){
    let formulario:any = document.getElementById("crear");
    let formularioValido:boolean = formulario.reportValidity();
    if(formularioValido){
      this.loading = true;
      this.createService().subscribe(
        data => this.confirmar(data)
      )

    }

  }

  confirmar(resultado:any){
    this.loading = false;
  if(resultado){
    alert("Usuario creado exitosamente")
    this.user = {};
  }
else{
    
  alert("Error al crear el usuario");


  }
}

  createService(){
    
    var httpOptions = {
      headers:new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>("https://argprogramaportafolio.onrender.com/user/guardar", this.user,httpOptions);
  }

  regresar(){

    location.href = "/vista-home";//esta funcion actua por default
  }
   

}

