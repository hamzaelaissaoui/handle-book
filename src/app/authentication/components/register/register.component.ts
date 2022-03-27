import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forms!: FormGroup;
  isLoading: boolean = false; 
  error!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'confirmEmail':new FormControl(null, [Validators.required]),
      'username':new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'password':new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirmPassword':new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'birthday':new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){

    this.isLoading = true;
    const user: User = {
      id: 0,
      username: this.forms.controls.username.value,
      email: this.forms.controls.email.value,
      password: this.forms.controls.password.value,
      birthday: this.forms.controls.birthday.value
    }
    this.authService.register(user)
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
