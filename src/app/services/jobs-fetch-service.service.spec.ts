import { TestBed } from '@angular/core/testing';

import { JobsFetchService } from './jobs-fetch-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('JobsFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule],
    providers:[JobsFetchService]
  }));

  it('should be created', () => {
    const service: JobsFetchService = TestBed.get(JobsFetchService);
    expect(service).toBeTruthy();
  });
});
