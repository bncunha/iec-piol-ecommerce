import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = []

  constructor() { }

  ngOnInit(): void {
    this.products.push(
      new Product('Corda de pular', 16.9, 19.9, 'corda.jpg'),
      new Product('Rolo de posicionamento para fisioterapia', 199.9, 249.9, 'rolo-fisioterapia.png'),
      new Product('Aparelho para ultrassom', 1479.9, undefined, 'aparelho-ultrassom.png'),
      new Product('Apidômetro para medição de massa de gordura', 9.9, 15.9, 'apidometro.png'),
      new Product('Balança de medição de vidro', 59.9, undefined, 'balanca.jpg'),
      new Product('Seringa descartável', 2.99, 4.99, 'seringa.jpg'),
      new Product('Maca de massagem', 999.9, 1299.9, 'maca.jpg'),
      new Product('Bicicleta para spinning', 1999, 2999, 'bicicleta.jpg'),
    )
  }

}
