import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiResponse } from '../types/api.response.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  entrar(username: string, password: string): Observable<ApiResponse> {
    return this.httpClient
      .post<ApiResponse>(this.apiUrl + '/auth/login', { username, password })
      .pipe(
        tap((response) => {
          const { message, data, timestamp } = response;
          console.log(`Mensagem: ${message}, Data: ${data}, Timestamp: ${timestamp}`);
          sessionStorage.setItem('auth-token', data)
        }),
        catchError((err) => {
          // Erro: normalmente a resposta da API estará em err.error
          const { message, data, timestamp } = err.error;
          console.log(`Mensagem: ${message}, Data: ${data}, Timestamp: ${timestamp}`);
          // Propaga o erro para que o componente possa tratá-lo
          return throwError(() => err.error);
        })
      );
  }

  cadastro(username: string, email: string, password: string, role: string  ): Observable<ApiResponse> {
    return this.httpClient
      .post<ApiResponse>(this.apiUrl + '/auth/register', {
        username,
        email,
        password,
        role,
      })
      .pipe(
        tap((response) => {
          const { message, data, timestamp } = response;
          console.log(
            `Mensagem: ${message}, Data: ${data}, Timestamp: ${timestamp}`
          );
        }),
        catchError((err) => {
          // Erro: normalmente a resposta da API estará em err.error
          const { message, data, timestamp } = err.error;
          console.log(
            `Mensagem: ${message}, Data: ${data}, Timestamp: ${timestamp}`
          );
          // Propaga o erro para que o componente possa tratá-lo
          return throwError(() => err.error);
        })
      );
  }
}

