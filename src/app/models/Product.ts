export class Product {
  name!: string;
  price!: number;
  basePrice?: number;
  image!: string;

  constructor(name: string, price: number, basePrice: number | undefined, image: string) {
    this.name = name;
    this.price = price;
    this.basePrice = basePrice;
    this.image = image;
  }
}