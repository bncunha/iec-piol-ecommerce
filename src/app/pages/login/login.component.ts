import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { LoginRequest } from 'src/services/requests/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const request = new LoginRequest(form.value);
      this.authService.create(request).subscribe(() => {
        this.loading = false;
        this.router.navigateByUrl('/')
      }, err => {
        this.loading = false;
        throw err;
      })
    }
  }

}
