import { TestBed } from '@angular/core/testing';

import { MrrService } from './mrr.service';

describe('MrrService', () => {
  let service: MrrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MrrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
