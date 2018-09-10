import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoAdminComponent } from './abastecimento-admin.component';

describe('AbastecimentoAdminComponent', () => {
  let component: AbastecimentoAdminComponent;
  let fixture: ComponentFixture<AbastecimentoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbastecimentoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbastecimentoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
