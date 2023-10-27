import { Component } from '@angular/core';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.sass']
})
export class MaintenanceListComponent {

  // injectable in constructor
  constructor(private dataService: DataService) {
    this.fetchMaintenance();

  }

  // create a maintenance complaint list of type complaint
  maintenanceComplaintList: any

  // fetch maintenance complaints data from db
  fetchMaintenance() {
    this.maintenanceComplaintList = this.dataService.fetchmaintenanceData(this.maintenanceComplaintList);
  }


}
