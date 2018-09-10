import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoHeaderComponent } from './abastecimento-header.component';

describe('AbastecimentoHeaderComponent', () => {
  let component: AbastecimentoHeaderComponent;
  let fixture: ComponentFixture<AbastecimentoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbastecimentoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbastecimentoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
