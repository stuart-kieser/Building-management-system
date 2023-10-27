import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceComplaintComponent } from './maintenance-complaint.component';

describe('MaintenanceComplaintComponent', () => {
  let component: MaintenanceComplaintComponent;
  let fixture: ComponentFixture<MaintenanceComplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenanceComplaintComponent]
    });
    fixture = TestBed.createComponent(MaintenanceComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
