import { Component } from '@angular/core';
import { LayoutLoginComponent } from "../../components/layout-login/layout-login.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ApiResponse } from '../../types/api.response.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface CadastroForm {
  username: FormControl;
  email: FormControl;
  password: FormControl;
  passwordCheck: FormControl;
}

@Component({
  selector: 'app-cadastro',
  imports: [
    CommonModule,
    LayoutLoginComponent,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  titulo: String = 'Cadastro';
  cadastroForm!: FormGroup<CadastroForm>;
  apiResponse?: ApiResponse;

  constructor(private loginService: LoginService) {
    this.cadastroForm = new FormGroup({
      username: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      passwordCheck: new FormControl('', []),
    });
  }

  //TODO: validar se as senhas são iguais

  onSubmit() {
    const values = this.cadastroForm.value;
    const role = 'USER';
    this.loginService
      .cadastro(values.username, values.email, values.password, role)
      .subscribe({
        next: (response) => {
          this.apiResponse = response;
        },
        error: (response) => {
          this.apiResponse = response;
          console.log(this.apiResponse?.data);
        },
      });
  }
}
