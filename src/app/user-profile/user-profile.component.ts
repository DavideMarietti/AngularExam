import {Component} from '@angular/core';
import {AppStateService} from "../app-state.service";
import {UserInfoI} from "../data/utenti";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  user: UserInfoI | null;

  constructor(private appServ: AppStateService) {
    this.user = appServ.userInfo(appServ.currentUser)
  }
}
