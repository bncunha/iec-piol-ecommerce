import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponent,
    AddressFormComponent,
    PaymentFormComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class CheckoutModule { }
