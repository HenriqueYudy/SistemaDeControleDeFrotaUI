import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoServicoToolsComponent } from './produto-servico-tools.component';

describe('ProdutoServicoToolsComponent', () => {
  let component: ProdutoServicoToolsComponent;
  let fixture: ComponentFixture<ProdutoServicoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoServicoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoServicoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
