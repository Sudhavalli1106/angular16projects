import { TestBed } from '@angular/core/testing';

import { ProductForCarouselService } from './product-for-carousel.service';

describe('ProductForCarouselService', () => {
  let service: ProductForCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductForCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
