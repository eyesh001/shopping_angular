import { Injectable, Inject } from '@angular/core';
import { Category, Categories } from '../category.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { map, tap, take } from 'rxjs/operators';
import { CAT_LIST_PAGE_SIZE } from '../category.tokens';

@Injectable({
  providedIn: 'root'
})
export class CategoryListResolverService implements Resolve<any> {

  constructor( private database: DataStoreService,
               @Inject(CAT_LIST_PAGE_SIZE) private pageSize: number) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.database.findList$ByPage<Category>('category', 1, this.pageSize, 6)
      .pipe(
        take(1)
        , map(actions => actions.map(action => action.payload.val()))
        , tap((list: Categories) => list.sort((p1, p2) => p2.no - p1.no))
      );
  }
}
