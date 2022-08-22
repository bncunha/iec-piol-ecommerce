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
    this.products.push(
      new Product('Corda de pular', 16.9, 19.9, 'corda.jpg'),
      new Product('Rolo de posicionamento para fisioterapia', 199.9, 249.9, 'rolo-fisioterapia.png'),
    )
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.products.reduce((prev, current) => prev + current.price, 0)
  }
}
