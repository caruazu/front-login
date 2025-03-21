import { Component } from '@angular/core';
import { LayoutLoginComponent } from "../../components/layout-login/layout-login.component";
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

interface LoginForm {
  username: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  imports: [LayoutLoginComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  loginResponse: any;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  onSubmit() {
    const values = this.loginForm.value;
    this.loginService.entrar(values.username, values.password).subscribe({
      next: (response) => {
        console.log(response.timestamp)
        this.loginResponse = response.message;
      },
      error: (err) => {
        console.log(err.error?.timestamp);
        this.loginResponse = err.error?.message || 'Ocorreu um erro desconhecido.';
      },
    });
  }

  navigate() {
    this.router.navigate(['cadastro']);
  }
}
