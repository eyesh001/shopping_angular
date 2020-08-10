import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedUtil } from 'src/app/Shared/shared-util';

@Component({
  selector: 'sh-product-mng-detail',
  templateUrl: './product-mng-detail.component.html',
  styleUrls: ['./product-mng-detail.component.css']
})
export class ProductMngDetailComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

  ngOnInit() {
  }
}
