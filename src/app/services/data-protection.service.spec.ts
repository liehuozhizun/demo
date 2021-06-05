import { TestBed } from '@angular/core/testing';

import { DataProtectionService } from './data-protection.service';

describe('DataProtectionService', () => {
  let service: DataProtectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProtectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
