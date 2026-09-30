export interface CartItem {
}
import { Food } from './food';

export interface CartItem {
  food: Food;
  quantity: number;
}