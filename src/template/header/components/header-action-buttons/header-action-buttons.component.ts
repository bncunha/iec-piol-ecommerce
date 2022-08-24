import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-header-action-buttons',
  templateUrl: './header-action-buttons.component.html',
  styleUrls: ['./header-action-buttons.component.scss']
})
export class HeaderActionButtonsComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  get cartItems() {
    return this.cartService.getItems();
  }

  get usuario() {
    return this.authService.getLoggedUser();
  }

  logout() {
    this.authService.logout();
  }

}
