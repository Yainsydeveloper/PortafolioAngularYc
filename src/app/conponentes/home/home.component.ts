import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:any = {};//variable agregada antes no habia nada
  public users:User[]=[];
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.user = JSON.stringify(localStorage.getItem("user"));
    if(!this.user){
      location.href = "/home";
    }
    
  }//este metodo agregado antes estaba vacio

 
  logout(){

    localStorage.removeItem("user");
    location.href = "/";
  }//este metodo tambien agregado


  public getUsers(): void {
    this.userService. getUser().subscribe({
      next:(response:User[]) =>{
      this.users = response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }

    })
   
  }



}
