import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckecdProductSetService {
  prodNoSet = new Set();
  hasNo$: Observable<boolean>;
  // TODO: new BehaviorSubject(false); ???
  private hasNoSubject: Subject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.hasNo$ = this.hasNoSubject.asObservable();
   }

   initProdNos(){
    this.prodNoSet = new Set();
    this._notifyExistence();
  }

   addNo(no: number){
    this.prodNoSet.add(no);
    this._notifyExistence();
  }

  removeNo(no: number){
    this.prodNoSet.delete(no);
    this._notifyExistence();
  }

  private _notifyExistence(){
    const hasNo = this.prodNoSet.size > 0;
    this.hasNoSubject.next(hasNo);
  }
}
