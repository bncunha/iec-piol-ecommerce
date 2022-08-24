export class Product {
  id!: string;
  name!: string;
  price!: number;
  promotionalPrice!: number;
  imagePath!: string;
  description!: string;
  totalValue!: number;
  quantity!: number;

  getSimply() {
    return {
      id: this.id,
      quantity: this.quantity
    } as Product;
  }
}