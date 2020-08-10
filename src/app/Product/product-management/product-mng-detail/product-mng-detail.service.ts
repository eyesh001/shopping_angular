import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductMngDetailService implements Resolve<Product>{

  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.queryParams.action === 'create') { return null; }
    if (route.queryParams.action === 'edit') { return null; }
    if (route.queryParams.action === 'delete') { return null; }
  }
}
