import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  entrar(username: string, password: string) {
    console.log(username);
    console.log(password);
  }

  cadastro(username: string, email: string, password: string) {
    console.log(username);
    console.log(email);
    console.log(password);
  }
}
