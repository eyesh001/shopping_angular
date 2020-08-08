import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'sh-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private database: DataStoreService,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    const sample = {no: '1', name:'sample'};
    console.log('route', this.route.snapshot.params);
    // create(domain: ScmDomain, modelCreationFn: (number) => any) {
    //   return this.counter.incAndGet(domain).pipe(switchMap(no => this.findObject$(domain, no).set(modelCreationFn(no))));
    // }
    this.db.object(`/numbers/11`).query.ref.transaction(num => (num || 0) + 1);
  }
}
