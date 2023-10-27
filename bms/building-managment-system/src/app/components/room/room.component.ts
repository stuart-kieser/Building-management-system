import { Component } from '@angular/core';
import { Room } from './room';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.sass']
})
export class RoomComponent {

  constructor(private dataService: DataService) {

  }

  room: Room = {
    number: 0,
    type: "",
    price: 0,
    electricity: 0,
    wifi: true,
  }


  // send room data to db
  sendRoom() {
    this.dataService.putData(this.room);
  }



}

