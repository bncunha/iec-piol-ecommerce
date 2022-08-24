import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  @Output() removeItem = new EventEmitter();
  @Input() products: Product[] = []
  @Input() readOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
