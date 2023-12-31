import { Component } from '@angular/core';
import { Room } from './room';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  constructor(private dataService: DataService) {

  }

  room: Room = {
    number: 0,
    type: "Blank",
    price: 0,
    electricity: 0,
    wifi: true,
    open: false,
  }


  // send room data to db
  sendRoom() {
    this.dataService.putMaintenance(this.room);
  }



}

