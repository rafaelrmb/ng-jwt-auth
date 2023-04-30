import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: any = {
    username: null,
    email: null,
    password: null,
  };
  isSuccessful: boolean = false;
  didSignUpFail: boolean = false;
  errorMsg = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    const { username, email, password } = this.registerForm;

    this.authService.register(username, email, password).subscribe({
      next: (resData) => {
        this.isSuccessful = true;
      },
      error: (errRes) => {
        this.errorMsg = errRes.error.message;
        this.didSignUpFail = true;
      },
    });
  }
}
