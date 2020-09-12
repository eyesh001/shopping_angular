import { Injectable, EventEmitter } from '@angular/core';
import { Domain } from './shared-util';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class NoCounterService {

  constructor(private db: AngularFireDatabase) { }

  get(domain: Domain){
    return this._getNumber$(domain).snapshotChanges().pipe(map(action => action.payload.val() || 0));
  }

  incAndGet(domain: Domain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err, comitted, dataSnapshot) => {
      if (err) { throw new Error('failed to increase number'); }

      if (comitted) {
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };
    this.db.object(`/numbers/${domain}`).query.ref.transaction(num => (num || 0) + 1, onComplete);

    return id$;
  }

  private _getNumber$(domain: Domain) {
    return this.db.object(`/numbers/${domain}`);
  }
}
