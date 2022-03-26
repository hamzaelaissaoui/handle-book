import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { User } from '../authentication/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:User =JSON.parse(localStorage.getItem("user") || "{}") as User;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.user.subscribe(data => {
      this.user = data
    });
  }

  onConnexion(){
    if(this.user==null)
      this.loginRoute();
    else this.logout();
  }

  loginRoute(){
    this.router.navigate(['/login']);
  }
  logout(){
    this.authService.logout();
  }

}
