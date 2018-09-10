import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorAdminComponent } from './fornecedor-admin.component';

describe('FornecedorAdminComponent', () => {
  let component: FornecedorAdminComponent;
  let fixture: ComponentFixture<FornecedorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
