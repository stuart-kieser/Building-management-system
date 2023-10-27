import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommanagementComponent } from './roommanagement.component';

describe('RoommanagementComponent', () => {
  let component: RoommanagementComponent;
  let fixture: ComponentFixture<RoommanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoommanagementComponent]
    });
    fixture = TestBed.createComponent(RoommanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
