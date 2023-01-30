import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './conponentes/home/home.component';
import { LoginComponent } from './conponentes/login/login.component';
import { VistaHomeComponent } from './conponentes/vista-home/vista-home.component';
import { SigninComponent } from './conponentes/signin/signin.component';

const routes: Routes = [  
  {path: '', component: VistaHomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
