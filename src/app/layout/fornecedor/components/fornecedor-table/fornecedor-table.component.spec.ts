import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorTableComponent } from './fornecedor-table.component';

describe('FornecedorTableComponent', () => {
  let component: FornecedorTableComponent;
  let fixture: ComponentFixture<FornecedorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
