import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/services/cart.service';
import { OrderService } from 'src/services/order.service';
import { CreateOrderRequest } from 'src/services/requests/CreateOrderRequest';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const formBuilder = new FormBuilder();
    this.form = formBuilder.group({
      address: formBuilder.group({
        zipCode: [null, [Validators.required]],
        street: [null, [Validators.required]],
        number: [null, [Validators.required]],
        neighborhood: [null, [Validators.required]],
        city: [null, [Validators.required]],
        state: [null, [Validators.required]],       
      }),
      creditCard: formBuilder.group({
        number: [null, [Validators.required]],
        name: [null, [Validators.required]],
        cvv: [null, [Validators.required]],
        expirationDate: [null, [Validators.required]]
      }),
    });
  }

  get addressForm() {
    return this.form.get('address') as FormGroup;
  }

  get creditCardForm() {
    return this.form.get('creditCard') as FormGroup;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const request = new CreateOrderRequest(this.form.value, this.cartService.getItems())
      this.loading = true;
      this.orderService.create(request).subscribe((response) => {
        this.loading = false;
        this.toastr.success('Pedido criado com sucesso!')
        this.router.navigate(['/status', response.id])
      }, (err) => {
        this.loading = false;
        throw err;
      })
    }
  }

}
