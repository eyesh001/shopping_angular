import { Injectable } from '@angular/core';
import { Category } from '../../category.model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { take, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryMngDetailService implements Resolve<Category>{

  constructor(private router: Router, private database: DataStoreService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.queryParams.action === 'create') { return null; }
    // if (route.queryParams.action === 'delete') { return null; }
    return this.database
      .findObject$<Category>('category', route.params['no'])
      .snapshotChanges()
      .pipe(
          take(1)
        , map(action => {
          if (action.payload.val()) {
            return action.payload.val();
          }
          return null;
        }));
  }
}
