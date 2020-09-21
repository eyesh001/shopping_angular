import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartInService } from 'src/app/Shared/cart-in.service';
import { Categories } from 'src/app/Category/category.model';
import { ActivatedRoute } from '@angular/router';
import { ActionMode } from 'src/app/Shared/shared-util';
import { DataStoreService } from 'src/app/Shared/data-store.service';

@Component({
  selector: 'sh-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() productList: any;
  @Output() detailClose = new EventEmitter<number>();

  usedCats: Categories;
  actionMode: ActionMode;
  private prodNo: number;

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
