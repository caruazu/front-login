import { Component } from '@angular/core';
import { LayoutLoginComponent } from "../../components/layout-login/layout-login.component";
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

interface LoginForm {
  username: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  imports: [LayoutLoginComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  navigate() {
    this.router.navigate(['cadastro']);
  }
}
