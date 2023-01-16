import { TestBed } from '@angular/core/testing';

import { NewsApiServicesService } from './news-api-services.service';

describe('NewsApiServicesService', () => {
  let service: NewsApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
