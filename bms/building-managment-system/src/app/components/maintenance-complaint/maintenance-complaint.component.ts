import { Component } from '@angular/core';
import { MaintenanceComplaint } from './maintenance-complaint';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-maintenance-complaint',
  templateUrl: './maintenance-complaint.component.html',
  styleUrls: ['./maintenance-complaint.component.sass']
})
export class MaintenanceComplaintComponent {

  constructor(private dataService: DataService) {

  }

  maintenancecomplaint: MaintenanceComplaint = {
    issue: '',
    desciption: "",
    photo: '', //jpeg?
    roomnumber: NaN,
    time: '',//function to return time of complaint
  }

  // send maintenance complaint logic
  sendComplaint(maintenancecomplaint: any) {
    this.dataService.putData(maintenancecomplaint);
  }
}
