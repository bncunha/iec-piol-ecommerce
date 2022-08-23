import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  percentage?: number;

  constructor() { }

  ngOnInit(): void {
    this.calculateDiscountPercentage();
  }

  calculateDiscountPercentage() {
    if (this.product.promotionalPrice) {
      this.percentage = 100 - (this.product.promotionalPrice / this.product.price * 100);
      this.percentage = Math.round(this.percentage)
    }
  }

}
