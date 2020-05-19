import { TestBed } from '@angular/core/testing';

import { CreateOrReadBatchesService } from './create-or-read-batches.service';

describe('CreateOrReadBatchesService', () => {
  let service: CreateOrReadBatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateOrReadBatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
