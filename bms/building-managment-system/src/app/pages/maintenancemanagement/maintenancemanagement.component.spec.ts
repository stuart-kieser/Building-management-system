import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancemanagementComponent } from './maintenancemanagement.component';

describe('MaintenancemanagementComponent', () => {
  let component: MaintenancemanagementComponent;
  let fixture: ComponentFixture<MaintenancemanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenancemanagementComponent]
    });
    fixture = TestBed.createComponent(MaintenancemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
