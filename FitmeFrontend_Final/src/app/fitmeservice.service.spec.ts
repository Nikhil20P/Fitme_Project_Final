import { TestBed } from '@angular/core/testing';

import { FitmeserviceService } from './fitmeservice.service';

describe('FitmeserviceService', () => {
  let service: FitmeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitmeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
