import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlatformService } from './platform.service';
import { LoginRequest } from './requests/LoginRequest';
import { LoginResponse } from './responses/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private platformService: PlatformService
  ) {
   }

  getLoggedUser() {
    if (!this.platformService.isBrowser) return []
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  }

  getToken() {
    return this.getLoggedUser()?.token;
  }

  create(login: LoginRequest) {
    return this.http.post<LoginResponse>(`${environment.apiEndpoint}/User/login`, login).pipe(
      tap(this.saveUser)
    );
  }

  logout() {
    localStorage.removeItem("user")
  }

  private saveUser(login: LoginResponse) {
    localStorage.setItem("user", JSON.stringify({
      token: login.token,
      name: login.user.name,
      id: login.user.id
    }))
  }
}
