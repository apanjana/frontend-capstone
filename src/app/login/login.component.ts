import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule], // Add ReactiveFormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    // Sign-in form
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    // Sign-up form
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      role: ['USER', Validators.required] // default role USER
    });
  }

  // Sign-in function
  onSignIn() {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;
      this.authService.authenticate(formData.email, formData.password).subscribe((response: any) => {
        const token = response.token;
        localStorage.setItem('authToken', token);

        // Get user details after sign-in
        this.authService.getUser(formData.email).subscribe(user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/dashboard']); // Navigate to dashboard
        });
      }, error => {
        console.error('Error during sign-in:', error);
      });
    } else {
      console.log('Sign-in form is invalid');
    }
  }

  // Sign-up function
  onSignUp() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      this.http.post('http://localhost:9999/auth/signup', formData).subscribe(
        (response) => {
          console.log('User registered successfully', response);
          alert('Registered successfully! You can now sign in.');
        },
        (error) => {
          console.error('Error occurred while registering user', error);
        }
      );
    } else {
      console.log('Sign-up form is invalid');
    }
  }
}
