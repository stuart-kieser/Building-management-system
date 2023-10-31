import { Component } from '@angular/core';
import { Login } from '../login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: Login = {
    email: "",
    password: "",
  }

  // submit login form and check deets
  // login redirects to user-account component


}
