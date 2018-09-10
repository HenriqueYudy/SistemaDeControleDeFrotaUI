import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorResponsavelComponent } from './condutor-responsavel.component';

describe('CondutorResponsavelComponent', () => {
  let component: CondutorResponsavelComponent;
  let fixture: ComponentFixture<CondutorResponsavelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorResponsavelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
