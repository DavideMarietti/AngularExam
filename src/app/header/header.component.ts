import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() utenti!: string[];
  @Input() loggedUser!: string;
  @Output() login: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }
}
