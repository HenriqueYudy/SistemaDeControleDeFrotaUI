import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaHeaderComponent } from './empresa-header.component';

describe('EmpresaHeaderComponent', () => {
  let component: EmpresaHeaderComponent;
  let fixture: ComponentFixture<EmpresaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
