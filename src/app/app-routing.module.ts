import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListsComponent } from './Product/product-lists/product-lists.component';
import { PageNotFoundComponent } from './Common/page-not-found/page-not-found.component';
import { ProductManagementComponent } from './Product/product-management/product-management.component';
import { CartComponent } from './Purchase/cart/cart.component';
import { CategoryManagementComponent } from './Category/category-management/category-management.component';
import { CategoryMngDetailComponent } from './Category/category-management/category-mng-detail/category-mng-detail.component';
import { CategoryMngDetailService } from './Category/category-management/category-mng-detail/category-mng-detail.service';
import { ProductMngDetailService } from './Product/product-management/product-mng-detail/product-mng-detail.service';
import { ProductMngDetailComponent } from './Product/product-management/product-mng-detail/product-mng-detail.component';
import { CategoryListResolverService } from './Category/category-management/category-list-resolver.service';
import { ProductListResolverService } from './Product/product-management/product-list-resolver.service';

const routes: Routes = [
  { path: 'product-list', pathMatch: 'full', component: ProductListsComponent},
  { path: 'product-manage', children: [
    {path: '', pathMatch: 'full', resolve: { list: ProductListResolverService }, component: ProductManagementComponent},
    {path: 'detail/:no', resolve: { product: ProductMngDetailService }, component: ProductMngDetailComponent}
  ]
  },
  { path: 'category-manage', children: [
    {path: '', pathMatch: 'full', resolve: { list: CategoryListResolverService }, component: CategoryManagementComponent},
    {path: 'detail/:no', resolve: { category: CategoryMngDetailService }, component: CategoryMngDetailComponent}
  ]
  },
  { path: 'cart', component: CartComponent },
  { path: '', component: ProductListsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
