import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/services/cart.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  loading = false;
  product?: Product;
  quantity: number = 1
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
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

  addToCart(product: Product, quantity: number) {
    this.cartService.addItem(product, Number(quantity))
    this.toastr.success('Item adicionado com sucesso!')
    this.router.navigateByUrl('/carrinho')
  }

}
