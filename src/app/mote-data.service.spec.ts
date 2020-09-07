import { TestBed } from '@angular/core/testing';

import { MoteDataService } from './mote-data.service';

describe('MoteDataService', () => {
  let service: MoteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
