import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
// import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { CourseService } from '../course.service';
import { FormsModule } from '@angular/forms';
import { BusServiceService } from '../bus-service.service';


@Component({
  selector: 'app-admin-bus',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent,FormsModule],
  templateUrl: './admin-bus.component.html',
  styleUrl: './admin-bus.component.css'
})
export class AdminBusComponent {

  bus = { busName: '',capacity: '',scheduledArrivalTime: '',routes: [] as string[]};
  // busRoute = { routes: '' };

  constructor(private router: Router, private busService: BusServiceService) {}

  // busSchedules = [
  //   { id: 1, route: 'Route 1', status: 'On Time' },
  //   { id: 2, route: 'Route 2', status: 'Delayed' },
  //   // Add more bus schedules
  // ];

  busSchedules: any[] = [];

  ngOnInit() {
    // Fetch all buses when the component loads
    this.fetchBuses();
  }

  fetchBuses() {
    this.busService.getBuses().subscribe((data) => {
      this.busSchedules = data;
    }, (error) => {
      console.error("Error fetching buses: ", error);
    });
  }

  updateBusSchedule(id: number) {
    console.log(`Update schedule for bus ID: ${id}`);
    // Implement update logic here
  }

  onSubmit() {
    console.log(this.bus);
    this.bus.routes = this.bus.routes.toString().split(',').map(route => route.trim());
    this.busService.addBus(this.bus).subscribe(() => {
    // this.

      // this.router.navigate(['/']);
      alert(`Bus added successfully`)

    }, (error) => {
      console.error("Error adding bus: ", error);
    });

  }
}
