import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMngDetailComponent } from './category-mng-detail.component';

describe('CategoryMngDetailComponent', () => {
  let component: CategoryMngDetailComponent;
  let fixture: ComponentFixture<CategoryMngDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMngDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMngDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
