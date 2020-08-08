import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListsComponent } from './category-lists/category-lists.component';
import { CategoryManagementComponent } from './category-management/category-management.component';

@NgModule({
  declarations: [CategoryListsComponent, CategoryManagementComponent],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
