import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected to styleUrls
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Sign In form initialization
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });

    // Sign Up form initialization
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Handle Sign In form submission
  onSignInSubmit() {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;
      console.log('Sign In data:', formData);
      // Call the UserService to send the login request
      // Example: this.userService.login(formData).subscribe(...);
    } else {
      console.log('Sign In form is invalid');
    }
  }

  // Handle Sign Up form submission
  onSignUpSubmit() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
      console.log('Sign Up data:', formData);
      // Call the UserService to send the registration request
      // Example: this.userService.register(formData).subscribe(...);
    } else {
      console.log('Sign Up form is invalid');
    }
  }
}
