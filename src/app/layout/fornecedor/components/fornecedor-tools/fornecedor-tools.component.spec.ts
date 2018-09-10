import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorToolsComponent } from './fornecedor-tools.component';

describe('FornecedorToolsComponent', () => {
  let component: FornecedorToolsComponent;
  let fixture: ComponentFixture<FornecedorToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FornecedorToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
