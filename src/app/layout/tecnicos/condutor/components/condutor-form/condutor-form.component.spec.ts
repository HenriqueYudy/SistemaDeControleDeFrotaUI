import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorFormComponent } from './condutor-form.component';

describe('CondutorFormComponent', () => {
  let component: CondutorFormComponent;
  let fixture: ComponentFixture<CondutorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
