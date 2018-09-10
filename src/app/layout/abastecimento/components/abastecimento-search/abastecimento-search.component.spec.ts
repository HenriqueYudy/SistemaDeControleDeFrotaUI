import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoSearchComponent } from './abastecimento-search.component';

describe('AbastecimentoSearchComponent', () => {
  let component: AbastecimentoSearchComponent;
  let fixture: ComponentFixture<AbastecimentoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbastecimentoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbastecimentoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
