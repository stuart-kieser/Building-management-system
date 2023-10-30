import { Component } from '@angular/core';
import { DataService } from 'src/app/services/dataService.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  // injectable in constructor
  constructor(private dataService: DataService) {
    this.fetchRooms();
  }

  // create a maintenance complaint list of type complaint
  roomList: any;

  // fetch maintenance complaints data from db
  fetchRooms() {
    this.roomList = this.dataService.fetchroomsList(this.roomList);
  }



}
