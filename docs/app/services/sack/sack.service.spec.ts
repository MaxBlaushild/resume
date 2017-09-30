import { TestBed, inject } from '@angular/core/testing';

import { SackService } from './sack.service';

describe('SackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SackService]
    });
  });

  it('should be created', inject([SackService], (service: SackService) => {
    expect(service).toBeTruthy();
  }));
});
