import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

const port:number = 5000;
const _URL:string = `http://localhost:${port}/`;

@Injectable()
export class AuthService {
  user!:User;

  constructor(private http:HttpClient){}

  login(email:string, password:string):Observable<User>{
    return this.http.post<User>(_URL+"login", {"email": email, "password": password});
  }
}
