import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product = new Product('Bicicleta para spinning', 1999, 2999, 'bicicleta.jpg');
  
  constructor() { }

  ngOnInit(): void {
  }

}