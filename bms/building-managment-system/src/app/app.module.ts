import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { RoomComponent } from './components/room/room.component';
import { MaintenanceComplaintComponent } from './components/maintenance-complaint/maintenance-complaint.component';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { TenantListComponent } from './components/tenant-list/tenant-list.component';
import { AccountComponent } from './pages/account/account.component';
import { RoommanagementComponent } from './pages/roommanagement/roommanagement.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { TenantmanagementComponent } from './pages/tenantmanagement/tenantmanagement.component';
import { MaintenancemanagementComponent } from './pages/maintenancemanagement/maintenancemanagement.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TenantComponent,
    RoomComponent,
    MaintenanceComplaintComponent,
    MaintenanceListComponent,
    TenantListComponent,
    AccountComponent,
    RoommanagementComponent,
    TenantmanagementComponent,
    MaintenancemanagementComponent,
    LandingComponent,
    NavComponent,
    RoomListComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Form binding 
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
