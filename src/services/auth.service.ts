import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from './requests/LoginRequest';
import { LoginResponse } from './responses/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  create(login: LoginRequest) {
    return this.http.post<LoginResponse>(`${environment.apiEndpoint}/User/login`, login).pipe(
      tap(this.saveUser)
    );
  }

  private saveUser(login: LoginResponse) {
    localStorage.setItem("user", JSON.stringify({
      token: login.token,
      name: login.user.name
    }))
  }
}
