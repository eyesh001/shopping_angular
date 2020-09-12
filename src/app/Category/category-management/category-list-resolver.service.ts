import { Injectable } from '@angular/core';
import { Category } from '../category.model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { map, tap, mergeMap, filter, take } from 'rxjs/operators';
import { from, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryListResolverService implements Resolve<Category> {

  constructor(private router: Router,
              private database: DataStoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return null;
  }
}
