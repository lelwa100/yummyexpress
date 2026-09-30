import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CartService } from '../services/cart.service.service';
import { CartItem } from '../services/cart-item';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  cartItems: CartItem[] = [];

  customerName = '';
  phone = '';
  address = '';
  paymentMethod = 'Cash on Delivery';


  constructor(
    private cartService: CartService,
    private router: Router
  ) {

    this.cartItems = this.cartService.getCart();

  }



  getTotal(): number {

    return this.cartService.getTotal();

  }



  placeOrder(): void {


    // Check if cart is empty

    if (this.cartItems.length === 0) {

      alert(
        'Your cart is empty. Add items before checkout.'
      );

      return;

    }



    // Name validation

    const namePattern = /^[a-zA-Z ]+$/;


    if (
      this.customerName.trim() === '' ||
      !namePattern.test(this.customerName)
    ) {

      alert(
        'Please enter a valid name using letters only.'
      );

      return;

    }



    // Phone validation

    const phonePattern = /^[0-9]{10}$/;


    if (
      !phonePattern.test(this.phone)
    ) {

      alert(
        'Please enter a valid 10 digit phone number.'
      );

      return;

    }



    // Address validation

    if (
      this.address.trim().length < 5
    ) {

      alert(
        'Please enter a valid delivery address.'
      );

      return;

    }



    // Order successful

    alert(

      '🎉 Order placed successfully!\n\n' +

      'Thank you for ordering from YumExpress.\n\n' +

      'Payment: ' + this.paymentMethod

    );



    // Clear cart

    this.cartService.clearCart();


    this.cartItems = [];



    // Go to success page

    this.router.navigate([
      '/order-success'
    ]);



    // Reset form

    this.customerName = '';

    this.phone = '';

    this.address = '';

    this.paymentMethod = 'Cash on Delivery';


  }

}