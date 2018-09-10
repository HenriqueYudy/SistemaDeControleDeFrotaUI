import { TestBed, inject } from '@angular/core/testing';

import { CondutorService } from './condutor.service';

describe('CondutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CondutorService]
    });
  });

  it('should be created', inject([CondutorService], (service: CondutorService) => {
    expect(service).toBeTruthy();
  }));
});
