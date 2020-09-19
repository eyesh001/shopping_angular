import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedUtil, ActionMode } from 'src/app/Shared/shared-util';
import { Product } from '../../product.model';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { Router } from '@angular/router';
import { PROD_LIST_PAGE_SIZE } from '../../products.tokens';

@Component({
  selector: 'sh-product-mng-detail',
  templateUrl: './product-mng-detail.component.html',
  styleUrls: ['./product-mng-detail.component.css']
})
export class ProductMngDetailComponent implements OnInit {
  productForm: FormGroup;
  actionMode: ActionMode;

  constructor(
             private fb: FormBuilder,
             private database: DataStoreService,
             @Inject(PROD_LIST_PAGE_SIZE) pageSize: number,
             private router: Router) {
    this.initform();
  }

  initform() {
    this.productForm = this.fb.group({
      no: [0],
      name: ['', Validators.required],
      qty: [0],
      listPrice: [0],
      catNo: ['0', Validators.required],
      img: [0],
      desc: ['', Validators.compose([Validators.required, Validators.minLength(5),
      Validators.maxLength(100)])],
      isUse: [true, Validators.required],
      createdTime: [SharedUtil.getCurrentDateTime()],
      updatedTime: [''],
    });
  }

  // private _setActionMode(q) {
  //   this.actionMode = q['action'];
  // }

  ngOnInit() {
  }

  submit(){
    const product: Product = this.productForm.value;
    this.actionMode = 'create';
    if ( this.actionMode === 'create' ) {
      const productFn = (no) => {
        product.no = no;
        return product;
      };
      this.database.create('product', productFn).subscribe(this._onSuccess(), this._onError());
      return;
    }
  }

  private _onSuccess() {
    // TODO: popup message
    return () => {
      console.log('success');
      this.redirectToCategoryList();
    };
  }

  private redirectToCategoryList() {
    this.router.navigate(['product-list']);
  }

  private _onError() {
    // TODO: popup message
    return () => {
      console.log('error');
    };
  }

  private _setActionMode(q) {
    this.actionMode = q['action'];
    switch (this.actionMode) {
      case 'create':
        break;
      case 'edit':
      default:
        break;
    }
  }
}
