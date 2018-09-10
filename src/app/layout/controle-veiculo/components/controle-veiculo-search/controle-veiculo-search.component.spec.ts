import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVeiculoSearchComponent } from './controle-veiculo-search.component';

describe('ControleVeiculoSearchComponent', () => {
  let component: ControleVeiculoSearchComponent;
  let fixture: ComponentFixture<ControleVeiculoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleVeiculoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVeiculoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
