import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './models/user';

const port:number = 5000;
const _URL:string = `http://localhost:${port}/`;

interface UserResponse {
  user:User;
  accessToken:string
}

@Injectable()
export class AuthService {
  user: Subject<User> = new Subject<User>();

  constructor(private http:HttpClient){}

  login(email:string, password:string):Observable<UserResponse>{
    return this.http.post<UserResponse>(_URL+"login", {"email": email, "password": password}).pipe(
      tap((data:UserResponse)=>this.handleAuth(data)),
      catchError(this.handleError)
    );
  }

  logout():void{
    this.user.next(undefined);
    localStorage.clear();
  }



  handleError(error:HttpErrorResponse){
    return throwError(error.error);
  }

  handleAuth(userResponse: UserResponse):void{
      this.user.next(userResponse.user);
      localStorage.setItem("token", userResponse.accessToken);
      localStorage.setItem("user", JSON.stringify(userResponse.user));
  }
}
