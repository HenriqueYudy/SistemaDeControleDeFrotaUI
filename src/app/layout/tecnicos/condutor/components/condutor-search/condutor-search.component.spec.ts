import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorSearchComponent } from './condutor-search.component';

describe('CondutorSearchComponent', () => {
  let component: CondutorSearchComponent;
  let fixture: ComponentFixture<CondutorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
