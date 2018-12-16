import { TestBed } from '@angular/core/testing';

import { VideosServiceService } from './videos-service.service';

describe('VideosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideosServiceService = TestBed.get(VideosServiceService);
    expect(service).toBeTruthy();
  });
});
