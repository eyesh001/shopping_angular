import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductMngDetailComponent } from './product-management/product-mng-detail/product-mng-detail.component';
import { PROD_LIST_PAGE_SIZE } from './products.tokens';
import { ButtonGroupComponent } from './product-management/button-group/button-group.component';
import { FormsModule } from '@angular/forms';
import { ProductStatusPipe } from './product-status.pipe';

@NgModule({
  declarations: [
    ProductDetailsComponent, ProductListsComponent, ProductManagementComponent, ProductMngDetailComponent, ButtonGroupComponent, 
    ProductStatusPipe
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  providers: [ {provide: PROD_LIST_PAGE_SIZE, useValue: 6}]
})
export class ProductModule { }
