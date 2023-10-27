import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MaintenancemanagementComponent } from './pages/maintenancemanagement/maintenancemanagement.component';
import { RoommanagementComponent } from './pages/roommanagement/roommanagement.component';
import { TenantmanagementComponent } from './pages/tenantmanagement/tenantmanagement.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'maintenance', component: MaintenancemanagementComponent },
  { path: 'rooms', component: RoommanagementComponent },
  { path: "tenants", component: TenantmanagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
