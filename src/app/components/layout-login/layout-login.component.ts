import { Component, EventEmitter, input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-layout-login',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './layout-login.component.html',
  styleUrl: './layout-login.component.scss',
})
export class LayoutLoginComponent {
  titulo = input.required<String>();
  botaoPrincipal = input.required<String>();
  botaoSecundario = input<String>();

  @Output('submit') onSubmit = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
