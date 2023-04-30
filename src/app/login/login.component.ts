import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any = {
    username: null,
    password: null,
  };
  isLoggedIn: boolean = false;
  didLoginFail: boolean = false;
  errorMsg = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    if (this.storage.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.loginForm;

    this.authService.login(username, password).subscribe({
      next: (userData) => {
        this.storage.saveUser(userData);

        this.isLoggedIn = true;
        this.didLoginFail = false;
        this.roles = this.storage.getUser().roles;
      },
      error: (errRes) => {
        this.errorMsg = errRes.message;
        this.didLoginFail = true;
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
