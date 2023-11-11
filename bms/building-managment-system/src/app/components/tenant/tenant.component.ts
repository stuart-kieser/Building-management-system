import { Component, Input, OnInit } from '@angular/core';
import { Tenant } from './tenant';
import { DataService } from 'src/app/services/dataService.service';
import { ActivatedRoute } from '@angular/router';
import { tenantList } from 'src/mock-data/tenantlist';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  // tenant data type is same as tenant, tenant is for adding potential tenant to db for checks
  tenant: any = {
    name: "",
    surname: "",
    number: 0,
    email: "",
    account: "",
    paymentStatus: true,
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.tenant.email = param.get('email');
      this.tenant = tenantList.find(x => x.email == this.tenant.email);
    });

    // Retrieve the user ID from the route parameters
  }


}
