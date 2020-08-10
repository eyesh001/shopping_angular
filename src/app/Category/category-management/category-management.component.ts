import { Component, OnInit } from '@angular/core';
import { ActionMode } from 'src/app/Shared/shared-util';
import { Router } from '@angular/router';

@Component({
  selector: 'sh-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  categoryChange(mode: ActionMode){
    this.router.navigate(['/category-manage/detail/0'], { queryParams: { action: mode } });
  }
}
