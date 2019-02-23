import { TestBed } from '@angular/core/testing';

import { ClassementService } from './classement.service';

describe('ClassementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassementService = TestBed.get(ClassementService);
    expect(service).toBeTruthy();
  });
});
