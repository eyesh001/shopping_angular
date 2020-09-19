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

  // TODO: CHECK snapshotChanges은 Observable 형태로 변환시키는 역할?
  getList<T>(domain: Domain){
    console.log(this.db.list<T>(`/${domain}`).valueChanges());
    return this.db.list<T>(`/${domain}`).snapshotChanges();
    // return this.db.list<T>(`/${domain}`, ref => ref.orderByChild('no')).snapshotChanges();
  }

  findList$ByPage<T>(domain: Domain, pageNo, pageSize, totalCnt) {
    const offset = totalCnt - pageSize * (pageNo - 1);
    return this.db.list<T>(`/${domain}`, ref => ref.orderByChild('no').endAt(offset).limitToLast(pageSize)).snapshotChanges();
  }

  delete(){

  }

  findObject$<T>(domain: Domain, no: number) {
    return this.db.object<T>(`/${domain}/${no}`);
  }
}
