import { TestBed } from '@angular/core/testing';

import { RxjsOperationsService } from './rxjs-operations.service';

describe('RxjsOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsOperationsService = TestBed.get(RxjsOperationsService);
    expect(service).toBeTruthy();
  });
});
