import {Component, Input} from '@angular/core';
import {UserInfoI} from "../data/utenti";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  @Input() user!: UserInfoI;

  constructor() {
  }
}
