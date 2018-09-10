import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorHeaderComponent } from './fornecedor-header.component';

describe('FornecedorHeaderComponent', () => {
  let component: FornecedorHeaderComponent;
  let fixture: ComponentFixture<FornecedorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
