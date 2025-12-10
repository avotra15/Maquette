import { Component } from '@angular/core';
import { Champ } from '../shared/champ/champ';
import { ButtonComponent } from '../shared/button-component/button-component';

@Component({
  selector: 'app-login-component',
  imports: [Champ, ButtonComponent],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

}
