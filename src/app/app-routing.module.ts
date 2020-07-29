import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListsComponent } from './Product/product-lists/product-lists.component';
import { PageNotFoundComponent } from './Common/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: ProductListsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
