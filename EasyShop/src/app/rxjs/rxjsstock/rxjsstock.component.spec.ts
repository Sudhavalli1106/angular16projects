import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsstockComponent } from './rxjsstock.component';

describe('RxjsstockComponent', () => {
  let component: RxjsstockComponent;
  let fixture: ComponentFixture<RxjsstockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsstockComponent]
    });
    fixture = TestBed.createComponent(RxjsstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
