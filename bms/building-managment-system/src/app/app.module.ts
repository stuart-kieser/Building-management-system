import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { RoomComponent } from './components/room/room.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MaintenanceComplaintComponent } from './components/maintenance-complaint/maintenance-complaint.component';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { TenantListComponent } from './components/tenant-list/tenant-list.component';
import { AccountComponent } from './pages/account/account.component';
import { RoommanagementComponent } from './pages/roommanagement/roommanagement.component';
import { TenantmanagementComponent } from './pages/tenantmanagement/tenantmanagement.component';
import { MaintenancemanagementComponent } from './pages/maintenancemanagement/maintenancemanagement.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    TenantComponent,
    RoomComponent,
    EmployeeComponent,
    MaintenanceComplaintComponent,
    MaintenanceListComponent,
    TenantListComponent,
    AccountComponent,
    RoommanagementComponent,
    TenantmanagementComponent,
    MaintenancemanagementComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
