import { Component } from '@angular/core';
import { MaintenanceComplaint } from './maintenance-complaint';
import { DataService } from 'src/app/services/dataService.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-maintenance-complaint',
  templateUrl: './maintenance-complaint.component.html',
  styleUrls: ['./maintenance-complaint.component.scss']
})
export class MaintenanceComplaintComponent {

  constructor(private dataService: DataService) {

  }

  ticket: MaintenanceComplaint = {
    issue: '',
    description: "",
    photo: '', //jpeg?
    roomnumber: NaN,
    time: '',//function to return time of complaint
  }

  // send maintenance complaint logic
  sendComplaint(maintenancecomplaint: any) {
    this.dataService.putMaintenance(maintenancecomplaint);
  }
}
