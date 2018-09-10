import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoServicoFormComponent } from './produto-servico-form.component';

describe('ProdutoServicoFormComponent', () => {
  let component: ProdutoServicoFormComponent;
  let fixture: ComponentFixture<ProdutoServicoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoServicoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoServicoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
