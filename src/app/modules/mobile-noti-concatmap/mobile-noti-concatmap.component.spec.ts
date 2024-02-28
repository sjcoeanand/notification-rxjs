import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNotiConcatmapComponent } from './mobile-noti-concatmap.component';

describe('MobileNotiConcatmapComponent', () => {
  let component: MobileNotiConcatmapComponent;
  let fixture: ComponentFixture<MobileNotiConcatmapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileNotiConcatmapComponent]
    });
    fixture = TestBed.createComponent(MobileNotiConcatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
