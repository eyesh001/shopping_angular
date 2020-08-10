import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActionMode } from 'src/app/Shared/shared-util';

@Component({
  selector: 'sh-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: DataStoreService,
    private db: AngularFireDatabase) { }

  productChange(mode: ActionMode) {
    this.router.navigate(['/product-manage/detail/0'], { queryParams: { action: mode } });
  }

  ngOnInit() {
    const sample = {no: '1', name:'sample'};
    // create(domain: ScmDomain, modelCreationFn: (number) => any) {
    //   return this.counter.incAndGet(domain).pipe(switchMap(no => this.findObject$(domain, no).set(modelCreationFn(no))));
    // }
    this.db.object(`/numbers/11`).query.ref.transaction(num => (num || 0) + 1);
  }
}
