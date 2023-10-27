import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantmanagementComponent } from './tenantmanagement.component';

describe('TenantmanagementComponent', () => {
  let component: TenantmanagementComponent;
  let fixture: ComponentFixture<TenantmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantmanagementComponent]
    });
    fixture = TestBed.createComponent(TenantmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
