import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { foodCard } from '../foodCard';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: foodCard[] = [];
  cur: string = '₾';

  total: number = 0

  @Input() item!: foodCard;

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }



  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // curChange() {
  //   this.cart = this.cart.map((cartItem) => {
  //     if (this.cur === '₾') {
  //       cartItem.price = cartItem.price / 2.7;
  //     } else if (this.cur === 'USD') {
  //       cartItem.price = cartItem.price * 2.7;
  //     }
  //     return cartItem;
  //   });
  //   this.cur = this.cur === '₾' ? 'USD' : '₾';
  //   this.saveCart();
  // }

  deleteItem(index: number) {
    this.cart.splice(index, 1);
    this.saveCart();
  }

}



