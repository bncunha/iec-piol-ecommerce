import { Address } from "src/app/models/Address";
import { CreditCard } from "src/app/models/CreditCard";
import { Product } from "src/app/models/Product";

export class CreateOrderRequest {
  userId!: string;
  address!: Address;
  creditCard!: CreditCard;
  products!: Product[];


  constructor(formData?: any, products?: Product[]) {
    if (formData && products) {
      this.fromFormData(formData, products)
    }
  }

  fromFormData(formData: any, products: Product[]) {
    Object.assign(this, formData)
    const savedUser = localStorage.getItem('user');
    this.userId = savedUser ? JSON.parse(savedUser).id : null;
    this.address.number = Number(this.address.number)
    this.creditCard.number = Number(this.creditCard.number)
    this.creditCard.cvv = Number(this.creditCard.cvv)
    this.products = products.map(p => p.getSimply())
    return this;
  }
} 