import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedUtil, ActionMode } from 'src/app/Shared/shared-util';
import { Category } from '../../category.model';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { Router, ActivatedRoute } from '@angular/router';
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
              private route: ActivatedRoute,
              private router: Router) {
    this.initform();
   }

  initform() {
    this.categoryForm = this.fb.group({
      no: [0],
      name1: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$')])],
      name2: ['', Validators.pattern('^[a-zA-Z]*$')],
      isUse: [true, Validators.required],
      Time: [SharedUtil.getCurrentDateTime()],
    });
  }

  resetForm(cat: Category) {
    this.categoryForm.reset({
      no: { value: cat.no, disabled: true },
      name: { value: cat.name, disabled: true },
      isUse: { value: true, disabled: true },
      Time: [SharedUtil.getCurrentDateTime()]
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
      this.redirectToCategoryList();
    };
  }

  private _onError() {
    // TODO: popup message
    return () => {
      console.log('error');
    };
  }

  private redirectToCategoryList() {
    this.router.navigate(['category-manage']);
  }

  private _setActionMode(q) {
    this.actionMode = q['action'];
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(q => q['action'] !== undefined)
      // MEMO: tap - 데이터 저장?
    , tap(q => this._setActionMode(q))
    , switchMap(q => this.route.data)
    , filter((data: { category: Category }) => data.category !== null)
    , map((data: { category: Category }) => data.category)
    ).subscribe(cat =>
      this.actionMode === 'read' ? this.resetForm(cat) : this.categoryForm.patchValue(cat)
    );
  }
}
