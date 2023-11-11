import { Component, Output, EventEmitter } from '@angular/core';
import { Login } from '../login/login';
import { DataService } from 'src/app/services/dataService.service';
import { NavigationExtras, Router } from '@angular/router';
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

  // constructor for dependancy 
  constructor(private dataService: DataService, private router: Router) {
    // Check for query parameter indicating successful order
    this.templist === this.dataService.fetchtenantList(this.user);
  }



  fetchUser() {
    const params: NavigationExtras = {
      queryParams: {
        email: this.user.email
      }
    }
    this.router.navigate(["/account/user"], params);
  }

  @Output() loginEvent = new EventEmitter<any>();



}





