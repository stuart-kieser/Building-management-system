import { Component, Output, EventEmitter } from '@angular/core';
import { Login } from '../login/login';
import { DataService } from 'src/app/services/dataService.service';
import { Router } from '@angular/router';
import { Tenant } from '../tenant/tenant';

//Angular material for pop up

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

  // login authentication
  authenticated = false

  // temp holders
  templist: Tenant[] = []
  tempuser: any;

  // constructor for dependancy 
  constructor(private dataService: DataService, private router: Router) {
    // Check for query parameter indicating successful order
    this.templist === this.dataService.fetchtenantList(this.user);
  }



  // submit login form and check deets
  fetchUser(user: any): void {
    // logic to fetch user profile if password is correct   
    // passing data from login function is hard and will need to be looked at in finer detail
    for (this.tempuser in this.templist) {
      if (this.tempuser === this.user.email && this.tempuser.account === this.user.password) {
        this.dataService.putTenant(this.tempuser);
        console.log(this.tempuser)
      }
    };

    console.log("Login successful")

    this.router.navigate(['/account/user']);

  }
}

// login redirects to user-account component



