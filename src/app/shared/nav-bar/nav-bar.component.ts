import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn: boolean = false;
  isModerator: boolean = false;
  isAdmin: boolean = false;
  username?: string;

  constructor(
    private authService: AuthService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storage.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storage.getUser();

      this.roles = user.roles;
      this.isModerator = this.roles.includes('ROLE_MODERATOR');
      this.isAdmin = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }

  logout() {
    this.authService.logout().subscribe({
      next: (resData) => {
        this.storage.clean();

        window.location.reload();
      },
      error: (errRes) => {
        console.log(errRes);
      },
    });
  }
}
