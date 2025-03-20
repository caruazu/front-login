import { Component } from '@angular/core';
import { LayoutLoginComponent } from "../../components/layout-login/layout-login.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface CadastroForm {
  username: FormControl;
  email: FormControl;
  password: FormControl;
  passwordCheck: FormControl;
}

@Component({
  selector: 'app-cadastro',
  imports: [LayoutLoginComponent, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  cadastroForm!: FormGroup<CadastroForm>;

  constructor() {
    this.cadastroForm = new FormGroup({
      username: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      passwordCheck: new FormControl('', []),
    });
  }

  onSubmit() {
    console.log(this.cadastroForm.value);
  }
}
