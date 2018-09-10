import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoInvalidComponent } from './campo-invalid.component';

describe('CampoInvalidComponent', () => {
  let component: CampoInvalidComponent;
  let fixture: ComponentFixture<CampoInvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoInvalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
