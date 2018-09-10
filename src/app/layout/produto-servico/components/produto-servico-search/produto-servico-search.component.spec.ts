import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoServicoSearchComponent } from './produto-servico-search.component';

describe('ProdutoServicoSearchComponent', () => {
  let component: ProdutoServicoSearchComponent;
  let fixture: ComponentFixture<ProdutoServicoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoServicoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoServicoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
