import { TestBed } from '@angular/core/testing';

import { IatadbService } from './iatadb.service';

describe('IatadbService', () => {
  let service: IatadbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IatadbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
