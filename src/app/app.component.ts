import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminBusComponent } from './admin-bus/admin-bus.component';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule, NavbarUserComponent, AdminBusComponent, AdminMainPageComponent, AdminUserComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bus-transport-real';
}
