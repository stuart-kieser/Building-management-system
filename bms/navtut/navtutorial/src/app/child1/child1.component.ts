import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, OnChanges {

  // using input and output data data can be shared from parent component to child component
  @Input() data: string = ''
  brothermessage = ''

  constructor(private service: SharedService) {

  }

  ngOnInit(): void {
    this.receiveBrother()
  }

  ngOnChanges() {
    this.receiveBrother()
  }

  receiveBrother() {
    this.brothermessage = this.service.getCapsule()
  }


}
