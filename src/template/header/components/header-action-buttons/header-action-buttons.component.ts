import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header-action-buttons',
  templateUrl: './header-action-buttons.component.html',
  styleUrls: ['./header-action-buttons.component.scss']
})
export class HeaderActionButtonsComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get usuario() {
    return this.authService.getLoggedUser();
  }

  logout() {
    this.authService.logout();
  }

}
