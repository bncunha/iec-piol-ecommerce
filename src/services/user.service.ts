import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUserRequest } from './requests/CreateUserRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  create(user: CreateUserRequest) {
    return this.http.post(`${environment.apiEndpoint}/User`, user);
  }
}
