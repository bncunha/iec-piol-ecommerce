import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateUserRequest } from 'src/services/requests/CreateUserRequest';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading = false;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSubmit(form: NgForm) {
    if (form.valid) {
      const request = new CreateUserRequest(form.value);
      this.loading = true;
      this.userService.create(request).subscribe(() => {
        this.toastr.success('Usuário criado com sucesso!')
        this.router.navigateByUrl('/login')
        this.loading = false;
      }, (err) => {
        this.loading = false;
        throw err;
      })
      
    }
  }

}
