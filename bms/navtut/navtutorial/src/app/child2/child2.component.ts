import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  message = "Hello parent from child2"

  // using out put we emit the object in the event emitter <>
  @Output() event = new EventEmitter<string>()

  constructor(private service: SharedService) {
    this.messageBrother()
  }

  sendMessage() {
    this.event.emit(this.message)
  }

  messageBrother() {
    this.service.setCapsule(this.message)
  }

  ngOnInit(): void {

  }


}
