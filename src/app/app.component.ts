import {Component} from '@angular/core';
import {UserInfoI, utenti as infoUtenti} from "./data/utenti";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  datiUtenti: { [username: string]: UserInfoI };
  currentUser: string;

  currentView: string;

  constructor() {
    this.datiUtenti = infoUtenti;
    this.currentUser = "";
    this.currentView= "profile";
  }

  calcolaNomiUtenti() {
    return Object.keys(this.datiUtenti);
  }

  logUser(nome: string){
    if (this.datiUtenti.hasOwnProperty(nome))
      this.currentUser = nome;
    else this.currentUser= '';
  }
}
