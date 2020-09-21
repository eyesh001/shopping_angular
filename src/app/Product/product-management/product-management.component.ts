import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActionMode } from 'src/app/Shared/shared-util';
import { NoCounterService } from 'src/app/Shared/no-counter.service';
import { Products } from '../product.model';
import { CheckecdProductSetService } from './checkecd-product-set.service';
import { range } from 'rxjs';

@Component({
  selector: 'sh-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  productForm: FormGroup;
  products: Products;
  checkedStatus: boolean[];
  pageSize: number;
  totalItemCnt;
  clickedHandler: {sell: () => void, stop: () => void};

  constructor(
    private router: Router,
    private counter: NoCounterService,
    private route: ActivatedRoute,
    private prodSet: CheckecdProductSetService,
    private database: DataStoreService) { }

  productChange(mode: ActionMode) {
    this.router.navigate(['/product-manage/detail/0'], { queryParams: { action: mode } });
  }

  ngOnInit() {
    this.database.count('product').subscribe(cnt => this.totalItemCnt = cnt);
    this.fetchResolvedDate();
    this.initCheckedProducts();
    this.setBtnClickHandler();
  }

  fetchResolvedDate(){
    // const resolvedData = < {list: Products}> this.route.snapshot.data;
    const resolvedData = this.route.snapshot.data as {list: Products};
    this.products = resolvedData.list;
  }

  checkProduct(isChecked: boolean, idx: number, no: number) {
    this.checkedStatus[idx] = isChecked;

    if (this.checkedStatus[idx]) {
      this.prodSet.addNo(no);
    } else {
      this.prodSet.removeNo(no);
    }
  }

  private setBtnClickHandler(){
    const clickedSell = () => {}

    const clickedStop = () => {}

    this.clickedHandler = {
      sell: clickedSell,
      stop: clickedStop
    };
  }


  private initCheckedProducts() {
    this.prodSet.initProdNos();
    this.setAllProductsCheckedStatusTo(false);
  }

  private setAllProductsCheckedStatusTo(v: boolean) {
    this.checkedStatus = [];

    const curItem = this.pageSize > this.totalItemCnt ? this.totalItemCnt : this.pageSize;
    range(0, curItem).subscribe(i => this.checkedStatus[i] = v);
  }
}
