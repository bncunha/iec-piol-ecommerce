import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  loading: boolean = false;
  orderItems?: Product[];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getOrderById(id);
  }

  get isInvalid() {
    return !this.loading && !this.orderItems;
  }

  getOrderById(id: string) {
    this.loading = true;
    this.orderService.getById(id).subscribe(items => {
      this.loading = false;
      this.orderItems = items
    }, (err) => {
      this.loading = false;
      throw err;
    })
  }

}
