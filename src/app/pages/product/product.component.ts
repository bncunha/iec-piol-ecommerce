import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loading = false;
  product?: Product;
  quantidade: number = 1
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getProduct(id);
  }

  getProduct(id: string) {
    this.loading = true;
    this.productService.getById(id).subscribe(product => {
      this.loading = false;
      this.product = product;
    }, err => {
      this.loading = false;
      throw err;
    })
  }

}
