import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedUtil } from 'src/app/Shared/shared-util';

@Component({
  selector: 'sh-category-mng-detail',
  templateUrl: './category-mng-detail.component.html',
  styleUrls: ['./category-mng-detail.component.css']
})
export class CategoryMngDetailComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initform();
   }

  initform() {
    this.categoryForm = this.fb.group({
      no: [0],
      name: ['', Validators.required],
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
