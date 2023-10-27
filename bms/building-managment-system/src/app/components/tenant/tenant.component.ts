import { Component } from '@angular/core';
import { Tenant } from './tenant';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.sass']
})
export class TenantComponent {

  constructor(private dataService: DataService) {

  }

  // tenant data type
  tenant: Tenant = {
    name: "",
    surname: "",
    number: NaN,
    email: "",
    account: "",
    paymentStatus: false,
  }

  sendTenant() {
    this.dataService.putData(this.tenant);
  }

}
