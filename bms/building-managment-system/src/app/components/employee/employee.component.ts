import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {

  }

  //employee object 
  employee: Employee = {
    name: "",
    surname: "",
    email: "",
    role: "",
    id: NaN,
  }

  // send employee logic
  sendEmployee(employee: any) {
    this.dataService.putData(employee);
  }

















}
