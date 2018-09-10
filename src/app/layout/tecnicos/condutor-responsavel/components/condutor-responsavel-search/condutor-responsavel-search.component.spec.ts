import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorResponsavelSearchComponent } from './condutor-responsavel-search.component';

describe('CondutorResponsavelSearchComponent', () => {
  let component: CondutorResponsavelSearchComponent;
  let fixture: ComponentFixture<CondutorResponsavelSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorResponsavelSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorResponsavelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
