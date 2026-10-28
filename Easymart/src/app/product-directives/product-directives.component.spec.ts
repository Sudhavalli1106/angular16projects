import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDirectivesComponent } from './product-directives.component';

describe('ProductDirectivesComponent', () => {
  let component: ProductDirectivesComponent;
  let fixture: ComponentFixture<ProductDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDirectivesComponent]
    });
    fixture = TestBed.createComponent(ProductDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
