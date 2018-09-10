import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoServicoTableComponent } from './produto-servico-table.component';

describe('ProdutoServicoTableComponent', () => {
  let component: ProdutoServicoTableComponent;
  let fixture: ComponentFixture<ProdutoServicoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoServicoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoServicoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
