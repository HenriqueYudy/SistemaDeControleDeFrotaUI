import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorTableComponent } from './condutor-table.component';

describe('CondutorTableComponent', () => {
  let component: CondutorTableComponent;
  let fixture: ComponentFixture<CondutorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
