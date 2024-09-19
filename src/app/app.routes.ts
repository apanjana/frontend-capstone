import { Routes } from '@angular/router';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { AdminBusComponent } from './admin-bus/admin-bus.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// export const routes: Routes = [
//     { path: '', component:AdminMainPageComponent },
//     { path: 'bus', component:AdminBusComponent },
//     { path: 'user', component:AdminUserComponent}
// ];

// export const routes: Routes = [
//     { path: '', component:UserMainPageComponent },
//     { path: 'bus', component:AdminBusComponent },
//     { path: 'user', component:AdminUserComponent}
// ];

export const routes: Routes = [
    { path: '', component:LoginComponent },
    { path: 'admin', component:AdminMainPageComponent },
    { path: 'admin/bus', component:AdminBusComponent },
    { path: 'admin/user', component:AdminUserComponent},
    { path: 'user', component:UserMainPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}