import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BusServiceService } from '../bus-service.service'; // Import BusService
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-bus-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    RouterOutlet,
    FormsModule
  ], // Add CommonModule here
  templateUrl: './user-bus-page.component.html',
  styleUrls: ['./user-bus-page.component.css']
})
export class UserBusPageComponent {
  buses: any[] = []; // Declare buses as an array of any type
  route = ''; // Model for the input route
  
  filteredBuses: any[] = [];

  constructor(
    private router: Router,  // Import Router
    private busService: BusServiceService // Correctly name the service
  ) {
    console.log('UserBusPageComponent initialized');
  }

  // Method to fetch all buses
  getAllBuses() {
    this.busService.getAllBuses().subscribe({
      next: (data) => {
        console.log('Fetched buses:', data); // Log the data
        this.buses = data; // Assign the fetched data to the buses array
      },
      error: (error) => {
        console.error('Error fetching buses:', error);
      }
    });
  }

  getBusesByRoute() {
    if (!this.route) {
      alert('Please enter a route');
      return;
    }

    this.busService.getBusByRoute(this.route).subscribe({
      next: (data) => {
        this.filteredBuses = data; // Assign the fetched data to the filtered buses array
      },
      error: (error) => {
        console.error('Error fetching buses by route:', error);
      }
    });
  }
}
