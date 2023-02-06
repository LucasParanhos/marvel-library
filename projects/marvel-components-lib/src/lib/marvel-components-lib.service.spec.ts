import { TestBed } from '@angular/core/testing';

import { MarvelComponentsLibService } from './marvel-components-lib.service';

describe('MarvelComponentsLibService', () => {
  let service: MarvelComponentsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelComponentsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
