import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorInicio:boolean = false;//variable agregada
  loading:boolean = false;//variable agregada
  user:any = {};//variable agregada
  

  constructor(private http: HttpClient){}//antes vacio

  ngOnInit(): void {
  }
        login(){
          let formulario:any = document.getElementById("login");
          let formularioValido:boolean = formulario.reportValidity();
          if(formularioValido){
            this.loading = true;
            this.loginService().subscribe(
              data => this.iniciarSesion(data)
            )

          }
        }

        iniciarSesion(resultado:any){
        this.loading = false;
        if(resultado){
        localStorage.setItem("user",JSON.stringify(resultado));
        location.href = "/home";
        }
        else{
        this.errorInicio = true;

        }

        }

      loginService(){

        var httpOptions = {
          headers:new HttpHeaders({
            'Content-type': 'application/json'
          })
        }
        return this.http.post<any>("https://argprogramaportafolio.onrender.com/user/login", this.user,httpOptions);

      }

      volverVista(){
        location.href = "/vista-home"//esta funcion parece actuar por default
      }

  

}
