import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forms!: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'password':new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    this.authService.login(this.forms.controls.email.value, this.forms.controls.password.value)
      .subscribe(v=> console.log(v));
  }
}
