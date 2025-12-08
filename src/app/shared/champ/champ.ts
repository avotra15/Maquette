import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-champ',
  imports: [],
  templateUrl: './champ.html',
  styleUrl: './champ.css',
})
export class Champ {
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() value: any;

  @Output() onChange = new EventEmitter<any>
}
