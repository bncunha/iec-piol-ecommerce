import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  get products(): Product[] {
    return this.cartService.getItems();
  }

  removeFromCart(index: number) {
    this.cartService.removeItem(index);
  }

  goToCheckout() {
    this.router.navigateByUrl('/finalizar')
  }

}

