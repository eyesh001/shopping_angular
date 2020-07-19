import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './Product/product.module';
import { CategoryModule } from './Category/category.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* Angular Modules */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /* App Modules */
    ProductModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
