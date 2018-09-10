import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaTableComponent } from './empresa-table.component';

describe('EmpresaTableComponent', () => {
  let component: EmpresaTableComponent;
  let fixture: ComponentFixture<EmpresaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
