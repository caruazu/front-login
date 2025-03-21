import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-layout-login',
  imports: [MatCardModule],
  templateUrl: './layout-login.component.html',
  styleUrl: './layout-login.component.scss'
})
export class LayoutLoginComponent {
  titulo = input.required<String>();
}
