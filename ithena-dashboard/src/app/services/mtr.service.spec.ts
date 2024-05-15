import { TestBed } from '@angular/core/testing';

import { MtrService } from './mtr.service';

describe('MtrService', () => {
  let service: MtrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
