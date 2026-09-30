import { Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements DoCheck {

  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngDoCheck(): void {
    this.cartCount = this.cartService.getCartCount();
  }

}