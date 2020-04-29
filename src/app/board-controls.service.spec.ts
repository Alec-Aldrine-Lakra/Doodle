import { TestBed } from '@angular/core/testing';

import { BoardControlsService } from './board-controls.service';

describe('BoardControlsService', () => {
  let service: BoardControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
