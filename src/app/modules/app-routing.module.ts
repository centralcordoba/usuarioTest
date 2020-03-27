import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';

import { AuthGuard } from '../guards/auth.guard';




const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuard]},
  {path: 'usuario/:id', component:UsuarioComponent, canActivate:[AuthGuard]},
  {path:'**', redirectTo: 'usuarios', canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
