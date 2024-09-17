import { Component } from '@angular/core';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';
@Component({
  selector: 'app-user-main-page',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './user-main-page.component.html',
  styleUrl: './user-main-page.component.css'
})
export class UserMainPageComponent {

  username: string = 'User';

}
