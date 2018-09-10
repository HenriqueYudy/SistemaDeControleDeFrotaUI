import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoServicoAdminComponent } from './produto-servico-admin.component';

describe('ProdutoServicoAdminComponent', () => {
  let component: ProdutoServicoAdminComponent;
  let fixture: ComponentFixture<ProdutoServicoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoServicoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoServicoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
