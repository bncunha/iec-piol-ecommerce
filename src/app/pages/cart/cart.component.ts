import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  get products(): Product[] {
    return this.cartService.getItems();
  }

  removeFromCart(index: number) {
    this.cartService.removeItem(index);
  }

}

