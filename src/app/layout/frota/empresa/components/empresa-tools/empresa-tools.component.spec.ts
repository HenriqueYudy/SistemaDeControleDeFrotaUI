import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaToolsComponent } from './empresa-tools.component';

describe('EmpresaToolsComponent', () => {
  let component: EmpresaToolsComponent;
  let fixture: ComponentFixture<EmpresaToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
