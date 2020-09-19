import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryMngDetailComponent } from './category-management/category-mng-detail/category-mng-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CAT_LIST_PAGE_SIZE } from './category.tokens';

@NgModule({
  declarations: [CategoryManagementComponent, CategoryMngDetailComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  providers: [ {provide: CAT_LIST_PAGE_SIZE, useValue: 6}]
})
export class CategoryModule { }
