import { Component, OnInit } from '@angular/core';
import { CartInService } from 'src/app/Shared/cart-in.service';

@Component({
  selector: 'sh-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})

export class ProductListsComponent implements OnInit {
  productLists = [];
  productList = {};
  detailOpen = false;

  constructor(private cartIn: CartInService) {
    const newLocal = (this.productLists.push({ id: 0, name: 'check1', img: 'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI' }),
      this.productLists.push({ id: 1, name: 'check2', img: 'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI' }),
      this.productLists.push({ id: 2, name: 'check3', img: 'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI' }),
      this.productLists.push({ id: 3, name: 'check4', img: 'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI' }),
      this.productLists.push({ id: 4, name: 'check5', img: 'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI' }),
      this.productLists.push({ id: 5, name: 'check6', img: 'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI' }),
      this.productLists.push({ id: 6, name: 'check7', img: 'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI' }));
  }

  productDetailOpen(productList: any) {
    this.detailOpen = true;
    this.productList = productList;
  }

  detailClose() {
    this.detailOpen = false;
  }

  ngOnInit() {
  }
}
