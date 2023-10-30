import { Component } from '@angular/core';
import { DataService } from 'src/app/services/dataService.service';
import { MaintenanceComplaint } from '../maintenance-complaint/maintenance-complaint';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent {

  // injectable in constructor
  constructor(private dataService: DataService) {
    this.fetchMaintenance();

  }

  // create a maintenance complaint list of type complaint
  maintenanceComplaintList: any[] = [];

  selectedComplaints: any[] = [];

  // clear selected logic
  clearSelected() {
    for (let complaint of this.selectedComplaints) {
      let index = this.maintenanceComplaintList.indexOf(complaint);
      if (index !== -1) {
        this.maintenanceComplaintList.splice(index, 1); // Remove 1 element at the found index
      }
    }
  }

  // check box select
  selectComplaint(complaint: any) {
    this.selectedComplaints.push(complaint);
    console.log(complaint);
  }

  // fetch maintenance complaints data from db
  fetchMaintenance() {
    this.maintenanceComplaintList = this.dataService.fetchmaintenanceData(this.maintenanceComplaintList);
  }
}
