import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin-bus',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './admin-bus.component.html',
  styleUrl: './admin-bus.component.css'
})
export class AdminBusComponent {

  busSchedules = [
    { id: 1, route: 'Route 1', status: 'On Time' },
    { id: 2, route: 'Route 2', status: 'Delayed' },
    // Add more bus schedules
  ];

  updateBusSchedule(id: number) {
    console.log(`Update schedule for bus ID: ${id}`);
    // Implement update logic here
  }
}
