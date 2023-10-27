import { Component } from '@angular/core';
import { DataService } from 'src/app/services/dataService.service';
import { Room } from '../room/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.sass']
})
export class RoomListComponent {
  constructor(private dataService: DataService) {
    this.fetchRooms(this.roomList);
  }

  roomList: Room[] = [];

  // fetch maintenance complaints data from db
  fetchRooms(roomList: any) {
    this.roomList = this.dataService.fetchData(roomList);
  }



}
