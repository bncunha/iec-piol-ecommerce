import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  @Input() creditCardForm!: FormGroup;
  @Input() submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
