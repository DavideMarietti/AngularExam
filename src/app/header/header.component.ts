import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  utenti: string[];
  utenteSel: number = -1;

  seleziona(e: MouseEvent, s: number){
    this.utenteSel = s;
  }
  constructor() {
    this.utenti = ['Alice','Matteo','Celia'];
  }
}
