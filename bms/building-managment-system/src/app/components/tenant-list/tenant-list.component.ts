import { Component } from '@angular/core';
import { Tenant } from '../tenant/tenant';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.sass']
})
export class TenantListComponent {
  // constructor to inject service
  constructor(private dataService: DataService) {
    this.tenantList = dataService.fetchData(this.tenantList)
  }

  // tenant list to hold tenant objects
  tenantList: Tenant[] = [];

  // fetch tenant list logic
  fetchTenants(tenantList: any) {
    this.tenantList = this.dataService.fetchData(this.tenantList);
  }
}
