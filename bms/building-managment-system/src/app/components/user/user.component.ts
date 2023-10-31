import { Component } from '@angular/core';
import { Tenant } from '../tenant/tenant';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {

  // tenant data type is same as tenant, tenant is for adding potential tenant to db for checks
  user: Tenant = {
    name: "",
    surname: "",
    number: NaN,
    email: "",
    account: "",
    paymentStatus: false,
    password: "",
  }

}
