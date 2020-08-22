import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CommonsModule } from './Common/commons.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ProductModule } from './Product/product.module';
import { CategoryModule } from './Category/category.module';
import { PurchaseModule } from './Purchase/purchase.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { AngularFireModule  } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    /* Angular Modules */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient] }
     }),
    /* App Modules */
    ProductModule,
    CategoryModule,
    CommonsModule,
    PurchaseModule,
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
