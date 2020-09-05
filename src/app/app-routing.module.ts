import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { ExperianceComponent } from './experiance/experiance.component';


const routes:Routes = [
   {path: 'logout', component:LogoutComponent },
   {path: 'home', component:HomeComponent},
   {path: 'about', component:AboutComponent},
   {path: 'education', component:EducationComponent},
   {path: 'experiance', component:ExperianceComponent},
   {path: 'contact', component:ContactComponent},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: '', redirectTo: 'login', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
