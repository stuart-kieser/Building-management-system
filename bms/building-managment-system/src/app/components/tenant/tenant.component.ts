import { Component, OnInit } from '@angular/core';
import { Tenant } from './tenant';
import { DataService } from 'src/app/services/dataService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute) {

  }

  // tenant data type is same as tenant, tenant is for adding potential tenant to db for checks
  tenant: any

  ngOnInit(): void {
    this.tenant = this.dataService.getTenant(this.tenant);
    console.log(this.tenant)
  }


}
