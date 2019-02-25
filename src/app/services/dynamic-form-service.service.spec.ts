import { TestBed } from '@angular/core/testing';

import { DynamicFormServiceService } from './dynamic-form-service.service';

describe('DynamicFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicFormServiceService = TestBed.get(DynamicFormServiceService);
    expect(service).toBeTruthy();
  });
});
