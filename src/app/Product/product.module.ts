import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductDetailsComponent, ProductListsComponent, ProductManagementComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ]
})
export class ProductModule { }
