import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nSupportService {

  constructor(translate: TranslateService) {
    //console.log("lang:  " + translate.getBrowserCultureLang());
    translate.setDefaultLang('language');
  }
}
