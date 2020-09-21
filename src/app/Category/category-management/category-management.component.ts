import { Component, OnInit, Inject } from '@angular/core';
import { ActionMode } from 'src/app/Shared/shared-util';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { Categories } from '../category.model';
import { CAT_LIST_PAGE_SIZE } from '../category.tokens';

@Component({
  selector: 'sh-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  totalItemCnt;
  categories: Categories;
  pageSize: number;

  constructor(private router: Router,
              private database: DataStoreService,
              @Inject(CAT_LIST_PAGE_SIZE) pageSize: number,
              private route: ActivatedRoute) {
                this.pageSize = pageSize;
              }

  ngOnInit() {
    // MEMO: 개수 count
    this.database.count('category').subscribe(cnt => this.totalItemCnt = cnt);
    this.fetchResolvedDate();
  }

  categoryChange(mode: ActionMode, no: number) {
    this.router.navigate(['/category-manage/detail/' + no], { queryParams: { action: mode } });
  }

  fetchResolvedDate(){
    const resolvedData = this.route.snapshot.data as {list: Categories};
    this.categories = resolvedData.list;
  }
}
