import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [ServicioService]
})
export class UsuariosComponent implements OnInit {

  User;

  constructor(
    private _servicio : ServicioService
  ) { }

  ngOnInit() {
    this.getUsuarios()
  }
  getUsuarios(){
    this._servicio.getUsuarios().subscribe(
      res => {
        this.User = res
        console.log(this.User);
        
      },
      err => console.log(err)
    )
  }

  eliminar(){
    console.log('Eliminado')
  }
}
