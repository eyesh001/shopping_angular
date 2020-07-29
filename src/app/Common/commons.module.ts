import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [NavBarComponent, PageNotFoundComponent, SideBarComponent],
  imports: [
    CommonModule
  ],
  exports: [NavBarComponent, PageNotFoundComponent, SideBarComponent],
})
export class CommonsModule { }
