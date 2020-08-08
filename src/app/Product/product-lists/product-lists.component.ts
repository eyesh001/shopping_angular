import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sh-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})

export class ProductListsComponent implements OnInit {
  productLists = [];

  constructor() {
    this.productLists.push({id: 0, name: 'check1', img:'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI'});
    this.productLists.push({id: 1, name: 'check2'}),
    this.productLists.push({id: 2, name: 'check3'}),
    this.productLists.push({id: 3, name: 'check4'}),
    this.productLists.push({id: 4, name: 'check5'}),
    this.productLists.push({id: 5, name: 'check6'}),
    this.productLists.push({id: 6, name: 'check7'});
  }

  productDetailOpen(productList: String[]){
    console.log(productList);
  }

  ngOnInit() {
  }
}
