import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoTableComponent } from './abastecimento-table.component';

describe('AbastecimentoTableComponent', () => {
  let component: AbastecimentoTableComponent;
  let fixture: ComponentFixture<AbastecimentoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbastecimentoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbastecimentoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
