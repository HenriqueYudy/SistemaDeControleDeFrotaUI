import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoServicoHeaderComponent } from './produto-servico-header.component';

describe('ProdutoServicoHeaderComponent', () => {
  let component: ProdutoServicoHeaderComponent;
  let fixture: ComponentFixture<ProdutoServicoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoServicoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoServicoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
