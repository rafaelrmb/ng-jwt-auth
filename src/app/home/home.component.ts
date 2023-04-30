import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: (resData) => {
        this.content = resData;
      },
      error: (errRes) => {
        console.log(errRes);
        if (errRes) {
          this.content = errRes.message;
        } else {
          this.content = 'Error Status' + errRes.status;
        }
      },
    });
  }
}
