import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }

  addItem(product: Product, quantity: number) {
    const items = this.getItems();
    items.push({
      ...product,
      quantity
    })
    this.saveOnStorage(items)
  }

  removeItem(index: number) {
    const items = this.getItems();
    items.splice(index, 1)
    this.saveOnStorage(items)
  }

  getItems(): Product[] {
    const savedItems = localStorage.getItem("cart");
    return savedItems ? JSON.parse(savedItems) : [];
  }

  private saveOnStorage(product: Product[]) {
    localStorage.setItem("cart", JSON.stringify(product))
  }
}