import { Injectable } from '@angular/core';
import { Category } from '../../category.model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryMngDetailService implements Resolve<Category>{

  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.queryParams.action === 'create') { return null; }
    if (route.queryParams.action === 'edit') { return null; }
    if (route.queryParams.action === 'delete') { return null; }
    // return this.database
    //   .findObject$<Category>('category', route.params['no'])
    //   .snapshotChanges()
    //   .pipe(
    //       take(1)
    //     , map(action => {
    //       if (action.payload.val()) {
    //         return action.payload.val();
    //       }
    //       this.router.navigate(['/category-list']);
    //       return null;
    //     }));
  }
}
