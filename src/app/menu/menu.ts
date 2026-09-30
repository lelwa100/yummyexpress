import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodService } from '../services/food.service';
import { CartService } from '../services/cart.service.service';
import { Food } from '../services/food';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

  foods: Food[] = [];
  filteredFoods: Food[] = [];

  searchText = '';

  selectedCategory = 'All';

  sortOption = '';


  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {

    this.foods = this.foodService.getFoods();

    this.filteredFoods = this.foods;

  }


  addToCart(food: Food): void {

    this.cartService.addToCart(food);

    alert(food.name + ' added to cart!');

  }


  filterFoods(): void {


    this.filteredFoods = this.foods.filter(food => {


      const matchesCategory =

        this.selectedCategory === 'All' ||

        food.category === this.selectedCategory;



      const matchesSearch =

        food.name
        .toLowerCase()
        .includes(
          this.searchText.toLowerCase()
        );



      return matchesCategory && matchesSearch;


    });


    this.sortFoods();


  }



  sortFoods(): void {


    if (this.sortOption === 'priceLow') {


      this.filteredFoods.sort(

        (a, b) => a.price - b.price

      );


    }


    else if (this.sortOption === 'priceHigh') {


      this.filteredFoods.sort(

        (a, b) => b.price - a.price

      );


    }


    else if (this.sortOption === 'name') {


      this.filteredFoods.sort(

        (a, b) => a.name.localeCompare(b.name)

      );


    }


  }


}