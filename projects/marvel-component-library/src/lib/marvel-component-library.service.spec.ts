import { TestBed } from '@angular/core/testing';

import { MarvelComponentLibraryService } from './marvel-component-library.service';

describe('MarvelComponentLibraryService', () => {
  let service: MarvelComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
