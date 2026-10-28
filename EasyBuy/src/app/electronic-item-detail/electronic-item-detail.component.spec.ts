import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicItemDetailComponent } from './electronic-item-detail.component';

describe('ElectronicItemDetailComponent', () => {
  let component: ElectronicItemDetailComponent;
  let fixture: ComponentFixture<ElectronicItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicItemDetailComponent]
    });
    fixture = TestBed.createComponent(ElectronicItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
