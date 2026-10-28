import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExampleComponent } from './routing-example.component';

describe('RoutingExampleComponent', () => {
  let component: RoutingExampleComponent;
  let fixture: ComponentFixture<RoutingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingExampleComponent]
    });
    fixture = TestBed.createComponent(RoutingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
