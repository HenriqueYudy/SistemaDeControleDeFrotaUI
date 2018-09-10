import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoComponent } from './abastecimento.component';

describe('AbastecimentoComponent', () => {
  let component: AbastecimentoComponent;
  let fixture: ComponentFixture<AbastecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbastecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
