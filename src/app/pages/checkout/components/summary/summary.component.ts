import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() isLoading = false;
  products: Product[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.products.reduce((prev, current) => prev + current.price, 0)
  }
}
