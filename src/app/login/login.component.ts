import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    
  @ViewChild('myUser', {static: true}) myUser: ElementRef;
  @ViewChild('myPass', {static: true}) myPass: ElementRef;
  constructor() {
    
   } 

  usuarioOriginal = "admin";
  contrasenaOriginal = "123";
  ngOnInit(): void {
    
  }
  Validar() {
    
    let inputValue = this.myUser.nativeElement.value;
    let passValuer = this.myPass.nativeElement.value;
    if(inputValue == this.usuarioOriginal && passValuer == this.contrasenaOriginal)
    {
      alert('OkUser')
    }
    else{
      alert('UserNoOk')
    }    
    
    }
  
  login(){    
   
  }

}
