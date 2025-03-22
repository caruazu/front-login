import { Component } from '@angular/core';
import { LayoutLoginComponent } from "../../components/layout-login/layout-login.component";
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { ApiResponse } from '../../types/api.response.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface LoginForm {
  username: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  imports: [
    LayoutLoginComponent,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  titulo = 'Entrar';
  botaoPrincipal = 'Entrar';
  botaoSecundario = 'Criar conta';

  loginForm!: FormGroup<LoginForm>;
  apiResponse?: ApiResponse;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  submit() {
    const values = this.loginForm.value;

    this.loginService.entrar(values.username, values.password).subscribe({
      next: (response) => {
        this.apiResponse = response;
      },
      error: (response) => {
        this.apiResponse = response;
      },
    });
  }

  navigate() {
    this.router.navigate(['cadastro']);
  }
}
