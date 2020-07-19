import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListsComponent } from './Product/product-lists/product-lists.component';


const routes: Routes = [{ path: '', component: ProductListsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
