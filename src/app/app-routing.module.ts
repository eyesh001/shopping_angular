import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListsComponent } from './Product/product-lists/product-lists.component';
import { PageNotFoundComponent } from './Common/page-not-found/page-not-found.component';
import { CategoryListsComponent } from './Category/category-lists/category-lists.component';
import { ProductManagementComponent } from './Product/product-management/product-management.component';


const routes: Routes = [
  { path: 'product-list', children:[
      {
        path: '', pathMatch: 'full', component: ProductListsComponent
      },
      {
        path: 'product/:no', pathMatch: 'full', component: ProductManagementComponent
      }
    ]
  },
  { path: 'category-list', component: CategoryListsComponent },
  { path: '', component: ProductListsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
