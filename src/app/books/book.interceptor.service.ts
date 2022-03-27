import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BookInterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (req.url === "http://localhost:5000/login" || req.url === "http://localhost:5000/register")
      return next.handle(req);
    
    const token: string = localStorage.getItem("token")!;
    const newReq:HttpRequest<any> = req.clone({headers: req.headers.append("Authorization",`Bearer ${token}`)});
    return next.handle(newReq);
    
  }
}
