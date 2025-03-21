import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  entrar(username: string, password: string): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/auth/login', {username,password,})
  }

  cadastro(username: string, email: string, password: string) {
    console.log(username);
    console.log(email);
    console.log(password);
  }
}
