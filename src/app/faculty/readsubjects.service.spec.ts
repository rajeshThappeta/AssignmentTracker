import { TestBed } from '@angular/core/testing';

import { ReadsubjectsService } from './readsubjects.service';

describe('ReadsubjectsService', () => {
  let service: ReadsubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadsubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
