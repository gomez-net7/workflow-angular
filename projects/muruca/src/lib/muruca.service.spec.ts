import { TestBed } from '@angular/core/testing';

import { MurucaService } from './muruca.service';

describe('MurucaService', () => {
  let service: MurucaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MurucaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
