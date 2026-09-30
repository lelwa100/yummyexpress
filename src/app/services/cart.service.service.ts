import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  constructor() { }

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(food: Food): void {

    const existingItem = this.cart.find(
      item => item.food.id === food.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({
        food: food,
        quantity: 1
      });
    }

  }

  increaseQuantity(foodId: number): void {

    const item = this.cart.find(
      item => item.food.id === foodId
    );

    if (item) {
      item.quantity++;
    }

  }

  decreaseQuantity(foodId: number): void {

    const item = this.cart.find(
      item => item.food.id === foodId
    );

    if (item) {

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(foodId);
      }

    }

  }

  removeFromCart(foodId: number): void {

    this.cart = this.cart.filter(
      item => item.food.id !== foodId
    );

  }

  clearCart(): void {
    this.cart = [];
  }

  getTotal(): number {

    return Number(
      this.cart.reduce(
        (total, item) => total + (item.food.price * item.quantity),
        0
      ).toFixed(2)
    );

  }

  getCartCount(): number {

    return this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

  }

}