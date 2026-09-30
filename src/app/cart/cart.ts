import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CartService } from '../services/cart.service.service';
import { CartItem } from '../services/cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  cartItems: CartItem[] = [];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = [...this.cartService.getCart()];
  }

  increase(foodId: number): void {
    this.cartService.increaseQuantity(foodId);
    this.loadCart();
  }

  decrease(foodId: number): void {
    this.cartService.decreaseQuantity(foodId);
    this.loadCart();
  }

  removeItem(foodId: number): void {
    this.cartService.removeFromCart(foodId);
    this.loadCart();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

}