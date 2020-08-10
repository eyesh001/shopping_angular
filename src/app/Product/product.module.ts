import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductMngDetailComponent } from './product-management/product-mng-detail/product-mng-detail.component';

@NgModule({
  declarations: [ProductDetailsComponent, ProductListsComponent, ProductManagementComponent, ProductMngDetailComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class ProductModule { }
