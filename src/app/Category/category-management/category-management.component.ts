import { Component, OnInit } from '@angular/core';
import { ActionMode } from 'src/app/Shared/shared-util';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStoreService } from 'src/app/Shared/data-store.service';
import { Categories } from '../category.model';

@Component({
  selector: 'sh-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  totalItemCnt;
  categories: Categories;

  constructor(private router: Router,
              private database: DataStoreService,
              private route: ActivatedRoute) { }

  // TODO: type of cnt is now unknown (should be any..?)
  ngOnInit() {
    this.database.count('category').subscribe(cnt => this.totalItemCnt = cnt);
    this.fetchResolvedDate();
  }

  categoryChange(mode: ActionMode) {
    this.router.navigate(['/category-manage/detail/1'], { queryParams: { action: mode } });
  }

  fetchResolvedDate(){
    const resolvedData = <{list: Categories}> this.route.snapshot.data;
    this.categories = resolvedData.list;
    console.log(" this.categories");
    console.log( this.categories);
  }
}
