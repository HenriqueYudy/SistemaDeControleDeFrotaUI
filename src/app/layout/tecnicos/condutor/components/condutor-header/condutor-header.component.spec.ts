import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorHeaderComponent } from './condutor-header.component';

describe('CondutorHeaderComponent', () => {
  let component: CondutorHeaderComponent;
  let fixture: ComponentFixture<CondutorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
