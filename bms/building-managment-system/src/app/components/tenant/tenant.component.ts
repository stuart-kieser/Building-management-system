import { Component } from '@angular/core';
import { Tenant } from './tenant';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {

  constructor(private dataService: DataService) {

  }

  // tenant data type is same as tenant, tenant is for adding potential tenant to db for checks
  tenant: Tenant = {
    name: "",
    surname: "",
    number: NaN,
    email: "",
    account: "",
    paymentStatus: false,
    password: "",
  }


}
