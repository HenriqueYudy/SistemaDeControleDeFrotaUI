import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorResponsavelHeaderComponent } from './condutor-responsavel-header.component';

describe('CondutorResponsavelHeaderComponent', () => {
  let component: CondutorResponsavelHeaderComponent;
  let fixture: ComponentFixture<CondutorResponsavelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorResponsavelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorResponsavelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
