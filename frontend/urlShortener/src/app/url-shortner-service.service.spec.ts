import { TestBed } from '@angular/core/testing';

import { UrlShortnerServiceService } from './url-shortner-service.service';

describe('UrlShortnerServiceService', () => {
  let service: UrlShortnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlShortnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
