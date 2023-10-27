import { Component } from '@angular/core';
import { MaintenanceComplaint } from '../maintenance-complaint/maintenance-complaint';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.sass']
})
export class MaintenanceListComponent {

  // injectable in constructor
  constructor(private dataService: DataService) {
    this.fetchMaintenance(this.maintenanceComplaintList)
  }

  // create a maintenance complaint list of type complaint
  maintenanceComplaintList: MaintenanceComplaint[] = [];

  // fetch maintenance complaints data from db
  fetchMaintenance(maintenanceComplaintList: any) {
    this.maintenanceComplaintList = this.dataService.fetchData(maintenanceComplaintList);
  }


}
