import { Injectable } from '@angular/core';
import { Domain } from './shared-util';
import { NoCounterService } from './no-counter.service';
import { switchMap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Category } from '../Category/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(
    private db: AngularFireDatabase,
    private counter: NoCounterService) { }

  create(domain: Domain, modelCreationFn: (number) => any) {
    return this.counter.incAndGet(domain).pipe(switchMap(no => this.findObject$(domain, no).set(modelCreationFn(no))));
  }

  count(domain: Domain){
    return this.counter.get(domain);
  }

  update(){

  }

  getList<T>(domain: Domain){
    return this.db.list<T>(`/${domain}`);
  }

  delete(){

  }

  findObject$<T>(domain: Domain, no: number) {
    return this.db.object<T>(`/${domain}/${no}`);
  }
}
