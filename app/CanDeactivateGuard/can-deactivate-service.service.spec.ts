import { TestBed, inject } from '@angular/core/testing';

import { CanDeactivateServiceService } from './can-deactivate-service.service';

describe('CanDeactivateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateServiceService]
    });
  });

  it('should be created', inject([CanDeactivateServiceService], (service: CanDeactivateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
