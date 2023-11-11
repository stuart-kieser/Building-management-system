import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  capsule: any

  constructor() { }

  setCapsule(data: any) {
    this.capsule = data
  }

  getCapsule() {
    return this.capsule
  }
}
