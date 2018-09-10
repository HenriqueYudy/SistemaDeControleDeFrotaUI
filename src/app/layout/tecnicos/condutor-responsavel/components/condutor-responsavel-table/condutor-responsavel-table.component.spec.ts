import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorResponsavelTableComponent } from './condutor-responsavel-table.component';

describe('CondutorResponsavelTableComponent', () => {
  let component: CondutorResponsavelTableComponent;
  let fixture: ComponentFixture<CondutorResponsavelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorResponsavelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorResponsavelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
