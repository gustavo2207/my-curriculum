import { TestBed } from '@angular/core/testing';

import { ExperianceService } from './experiance.service';

describe('ExperianceService', () => {
  let service: ExperianceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperianceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
