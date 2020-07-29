import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './Product/product.module';
import { CategoryModule } from './Category/category.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { AngularFireModule  } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { CommonsModule } from './Common/commons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /* Angular Modules */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /* App Modules */
    ProductModule,
    CategoryModule,
    CommonsModule,
    /* firebase */
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
