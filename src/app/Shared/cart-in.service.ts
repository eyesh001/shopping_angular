import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartInService {
  cartInLists = [];
  cartInList = {};

  constructor() { }
}
