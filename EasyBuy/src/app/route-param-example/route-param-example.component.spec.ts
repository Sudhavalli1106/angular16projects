import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamExampleComponent } from './route-param-example.component';

describe('RouteParamExampleComponent', () => {
  let component: RouteParamExampleComponent;
  let fixture: ComponentFixture<RouteParamExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteParamExampleComponent]
    });
    fixture = TestBed.createComponent(RouteParamExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
