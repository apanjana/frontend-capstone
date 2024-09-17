import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.css'
})
export class AdminUserComponent {

  users = [
    { id: 1, username: 'user1', role: 'Operator' },
    { id: 2, username: 'user2', role: 'Passenger' },
    // Add more users
  ];

  manageUser(id: number) {
    console.log(`Manage user with ID: ${id}`);
    // Implement user management logic here
  }

}
