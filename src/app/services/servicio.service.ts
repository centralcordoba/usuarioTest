import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private _http : HttpClient) { }

  url = "https://jsonplaceholder.typicode.com/users"

  getUsuarios(){
    return this._http.get(this.url)
  }

}
