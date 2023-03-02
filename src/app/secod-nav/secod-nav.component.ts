import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-secod-nav',
  templateUrl: './secod-nav.component.html',
  styleUrls: ['./secod-nav.component.css']
})
export class SecodNavComponent {
  @Input() view!: string;
  @Output() viewChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }
}
