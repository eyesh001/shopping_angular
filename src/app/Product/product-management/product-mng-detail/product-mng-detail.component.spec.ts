import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMngDetailComponent } from './product-mng-detail.component';

describe('ProductMngDetailComponent', () => {
  let component: ProductMngDetailComponent;
  let fixture: ComponentFixture<ProductMngDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMngDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMngDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
