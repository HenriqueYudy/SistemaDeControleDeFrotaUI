import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorResponsavelFormComponent } from './condutor-responsavel-form.component';

describe('CondutorResponsavelFormComponent', () => {
  let component: CondutorResponsavelFormComponent;
  let fixture: ComponentFixture<CondutorResponsavelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorResponsavelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorResponsavelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
