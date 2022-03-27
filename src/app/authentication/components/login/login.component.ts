import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forms!: FormGroup;
  isLoading: boolean = false; 
  error!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'password':new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    this.isLoading = true;
    this.authService.login(this.forms.controls.email.value, this.forms.controls.password.value)
      .subscribe(
        ()=> {
          this.isLoading = false;
          this.router.navigate(['/'])
        },
        error => {
          this.isLoading = false;
          this.error = error;
        }
      );
  }
}
