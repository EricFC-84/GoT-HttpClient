import { TestBed } from '@angular/core/testing';

import { ServApiService } from './serv-api.service';

describe('ServApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServApiService = TestBed.get(ServApiService);
    expect(service).toBeTruthy();
  });
});
