import { Component, Input } from '@angular/core';
import { Food } from '../services/food';

@Component({
  selector: 'app-food-card',
  imports: [],
  templateUrl: './food-card.html',
  styleUrl: './food-card.css',
})
export class FoodCard {

  @Input() food!: Food;

}