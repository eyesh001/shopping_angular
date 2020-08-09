import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartInService } from 'src/app/Shared/cart-in.service';

@Component({
  selector: 'sh-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() productList: any;
  @Output() detailClose = new EventEmitter<number>();

  constructor(private cartIn: CartInService) { }

  clickButton(message: string) {
    if (message === 'close') {
      this.detailClose.emit();
    } else {
      this.cartIn.cartInLists.push(this.productList);
      this.detailClose.emit();
    }
  }

  ngOnInit() {
  }
}
