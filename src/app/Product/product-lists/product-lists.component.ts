import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sh-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})

export class ProductListsComponent implements OnInit {
  prodcutLists = [];

  constructor() {
    this.prodcutLists.push({id: 1, name: 'check1', img:'https://i.picsum.photos/id/1054/3079/1733.jpg?hmac=Rk5_Xt3oLlDLJHH3ZDyHCqua0s45mhNjXmID277ZOMI'});
    this.prodcutLists.push({id: 2, name: 'check2'});
  }

  ngOnInit() {
    console.log('checkddd');
  }
}
