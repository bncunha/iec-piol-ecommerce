import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.products.reduce((prev, current) => prev + current.price, 0)
  }
}
