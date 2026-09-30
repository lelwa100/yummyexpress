import { Injectable } from '@angular/core';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foods: Food[] = [

    {
      id: 1,
      name: 'Chicken Burger',
      description: 'Juicy grilled chicken burger with lettuce and cheese.',
      category: 'Burger',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
    },

    {
      id: 2,
      name: 'Beef Burger',
      description: 'Classic beef burger with cheddar cheese.',
      category: 'Burger',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600'
    },

    {
      id: 3,
      name: 'Double Cheese Burger',
      description: 'Double beef patties with melted cheese.',
      category: 'Burger',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600'
    },

    {
      id: 4,
      name: 'Pepperoni Pizza',
      description: 'Loaded with mozzarella cheese and pepperoni.',
      category: 'Pizza',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600'
    },

    {
      id: 5,
      name: 'BBQ Chicken Pizza',
      description: 'BBQ chicken pizza with onions and cheese.',
      category: 'Pizza',
      price: 139.99,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600'
    },

    {
      id: 6,
      name: 'Margherita Pizza',
      description: 'Classic tomato and mozzarella pizza.',
      category: 'Pizza',
      price: 109.99,
      image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=600'
    },

    {
      id: 7,
      name: 'Fried Chicken',
      description: 'Golden crispy fried chicken served hot.',
      category: 'Chicken',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600'
    },

    {
      id: 8,
      name: 'Chicken Wings',
      description: 'Spicy BBQ chicken wings.',
      category: 'Chicken',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600'
    },

    {
      id: 9,
      name: 'Chicken Wrap',
      description: 'Grilled chicken wrap with fresh vegetables.',
      category: 'Wrap',
      price: 74.99,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600'
    },

    {
      id: 10,
      name: 'French Fries',
      description: 'Golden crispy fries.',
      category: 'Sides',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600'
    },

    {
      id: 11,
      name: 'Caesar Salad',
      description: 'Fresh Caesar salad with grilled chicken.',
      category: 'Salad',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600'
    },

    {
      id: 12,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with creamy frosting.',
      category: 'Dessert',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600'
    },

    {
      id: 13,
      name: 'Chocolate Milkshake',
      description: 'Cold and creamy chocolate milkshake.',
      category: 'Drink',
      price: 54.99,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600'
    },

    {
      id: 14,
      name: 'Strawberry Smoothie',
      description: 'Refreshing strawberry smoothie.',
      category: 'Drink',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600'
    },

    {
      id: 15,
      name: 'Coca-Cola',
      description: 'Ice-cold Coca-Cola 500ml.',
      category: 'Drink',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600'
    }

  ];

  getFoods(): Food[] {
    return this.foods;
  }

}