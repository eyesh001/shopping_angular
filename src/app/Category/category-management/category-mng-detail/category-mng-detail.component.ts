import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedUtil, ActionMode } from 'src/app/Shared/shared-util';
import { Category } from '../../category.model';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { ActivatedRoute } from '@angular/router';
import { filter, tap, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'sh-category-mng-detail',
  templateUrl: './category-mng-detail.component.html',
  styleUrls: ['./category-mng-detail.component.css']
})
export class CategoryMngDetailComponent implements OnInit {
  categoryForm: FormGroup;
  category2IsUse = false;
  actionMode: ActionMode;

  constructor(private fb: FormBuilder,
              private database: DataStoreService,
              private route: ActivatedRoute) {
    this.initform();
   }

  initform() {
    this.categoryForm = this.fb.group({
      no: [0],
      name1: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      name2: ['', Validators.pattern('^[a-zA-Z]*$')],
      isUse: [true, Validators.required],
      createdTime: [SharedUtil.getCurrentDateTime()],
      updatedTime: [''],
    });
  }

  // TODO: test は後で削除。
  keyupHappenTest(value) {
    if ( value.length > 0 ) {
      this.category2IsUse = true;
      } else {
        this.category2IsUse = false;
      }
  }

  submit() {
    const category: Category = this.categoryForm.value;
    if (this.actionMode === 'create') {
      const categoryFn = (no) => {
        category.no = no;
        return category;
      };
      this.database.create('category', categoryFn).subscribe(this._onSuccess(), this._onError());
      return;
    }
  }

  private _onSuccess() {
    // TODO: popup message
    return () => {
      console.log('success');
    };
  }

  private _onError() {
    // TODO: popup message
    return () => {
      console.log('error');
    };
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(q => q['action'] !== undefined)
    , switchMap(q => this.route.data)
    , filter((data: { category: Category }) => data.category !== null)
    , map((data: { category: Category }) => data.category)
    ).subscribe(cat =>
      // console.log(cat)
      this.categoryForm.patchValue(cat))
      // TODO: what is 'read'
      // this.actionMode === 'read' ? this.resetForm(cat) : this.categoryForm.patchValue(cat)
  }
}
