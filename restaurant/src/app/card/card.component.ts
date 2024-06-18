import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { foodCard } from '../foodCard';
import { CommonModule, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgClass, RouterModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() food!: foodCard

  cur: string = '₾'

  curCange() {
    if (this.cur == '₾') {
      this.cur = 'USD'
      this.food.price = this.food.price / 2.7
    } else if (this.cur == 'USD') {
      this.cur = '₾'
      this.food.price = this.food.price * 2.7
    }
  }





  incre() {
     this.addToCart(this.food)
  }



  addToCart(dish: foodCard) {
    dish.currency = this.cur
    let cart: foodCard[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart.push(dish)







    localStorage.setItem('cart', JSON.stringify(cart))

  }







}
