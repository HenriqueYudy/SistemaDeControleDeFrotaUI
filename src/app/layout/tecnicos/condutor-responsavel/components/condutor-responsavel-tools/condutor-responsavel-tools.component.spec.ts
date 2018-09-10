import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorResponsavelToolsComponent } from './condutor-responsavel-tools.component';

describe('CondutorResponsavelToolsComponent', () => {
  let component: CondutorResponsavelToolsComponent;
  let fixture: ComponentFixture<CondutorResponsavelToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorResponsavelToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorResponsavelToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
