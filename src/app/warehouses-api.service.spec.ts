import { TestBed } from '@angular/core/testing';

import { WarehousesApiService } from './warehouses-api.service';

describe('WarehousesApiService', () => {
  let service: WarehousesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehousesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
