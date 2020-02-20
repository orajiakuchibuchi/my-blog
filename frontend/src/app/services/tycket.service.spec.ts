import { TestBed } from '@angular/core/testing';

import { TycketService } from './tycket.service';

describe('TycketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TycketService = TestBed.get(TycketService);
    expect(service).toBeTruthy();
  });
});
