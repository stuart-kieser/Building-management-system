import { Component } from '@angular/core';
import { Tenant } from '../tenant/tenant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user: Tenant = {
    name: '',
    surname: '',
    number: NaN,
    email: '',
    account: '',
    paymentStatus: true,
  }

  registerUser() {
    localStorage.setItem('signUpUsers', JSON.stringify(this.user));
    this.user = {
      name: '',
      surname: '',
      number: NaN,
      email: '',
      account: '',
      paymentStatus: true,
    };
  }
  // submit registration form
  // check registration to room is valid
  // check is room not filled


}
