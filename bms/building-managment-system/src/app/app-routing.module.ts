import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MaintenancemanagementComponent } from './pages/maintenancemanagement/maintenancemanagement.component';
import { RoommanagementComponent } from './pages/roommanagement/roommanagement.component';
import { TenantmanagementComponent } from './pages/tenantmanagement/tenantmanagement.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  //redirect on blank path
  { path: '', pathMatch: "full", component: LandingComponent },
  { path: 'maintenance', component: MaintenancemanagementComponent },
  { path: 'rooms', component: RoommanagementComponent },
  { path: "tenants", component: TenantmanagementComponent },
  {
    path: "account", component: AccountComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'user', component: UserComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
