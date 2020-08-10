import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryMngDetailComponent } from './category-management/category-mng-detail/category-mng-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryManagementComponent, CategoryMngDetailComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class CategoryModule { }
