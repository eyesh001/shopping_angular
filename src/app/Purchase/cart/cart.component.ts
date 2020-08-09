import { Component, OnInit } from '@angular/core';
import { CartInService } from 'src/app/Shared/cart-in.service';

@Component({
  selector: 'sh-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartInLists = [];

  constructor(private cartIn: CartInService) {
  }

  ngOnInit() {
    this.cartInLists = this.cartIn.cartInLists;
  }
}
