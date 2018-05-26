import { TestBed, inject } from '@angular/core/testing';

import { BitsoService } from './bitso.service';

describe('BitsoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitsoService]
    });
  });

  it('should be created', inject([BitsoService], (service: BitsoService) => {
    expect(service).toBeTruthy();
  }));
});
