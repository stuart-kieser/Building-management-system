import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  // tenant data type is same as tenant, tenant is for adding potential tenant to db for checks
  user: any

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
  }


}

