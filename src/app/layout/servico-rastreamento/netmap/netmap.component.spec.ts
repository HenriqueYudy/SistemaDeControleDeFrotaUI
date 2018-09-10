import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetmapComponent } from './netmap.component';

describe('NetmapComponent', () => {
  let component: NetmapComponent;
  let fixture: ComponentFixture<NetmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
