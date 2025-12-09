import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-champ',
  imports: [FormsModule],
  templateUrl: './champ.html',
  styleUrl: './champ.css',
})
export class Champ {
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() value: any;

  @Output() onChange = new EventEmitter<any>
}
