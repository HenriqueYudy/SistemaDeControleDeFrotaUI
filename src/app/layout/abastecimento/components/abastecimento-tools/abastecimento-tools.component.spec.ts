import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoToolsComponent } from './abastecimento-tools.component';

describe('AbastecimentoToolsComponent', () => {
  let component: AbastecimentoToolsComponent;
  let fixture: ComponentFixture<AbastecimentoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbastecimentoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbastecimentoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
