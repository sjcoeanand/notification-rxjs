import { TestBed } from '@angular/core/testing';

import { MobileNotiService } from './mobile-noti.service';

describe('MobileNotiService', () => {
  let service: MobileNotiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileNotiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
