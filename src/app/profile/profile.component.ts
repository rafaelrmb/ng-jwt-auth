import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUserBoard();
  }
}
