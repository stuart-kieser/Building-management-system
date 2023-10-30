import { Component } from '@angular/core';
import { Login } from '../login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  user: Login = {
    name: "",
    surname: "",
    number: NaN,
    email: "",
    password: "",
  }



}
