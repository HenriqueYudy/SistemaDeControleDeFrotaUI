import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoTableComponent } from './permissao-table.component';

describe('PermissaoTableComponent', () => {
  let component: PermissaoTableComponent;
  let fixture: ComponentFixture<PermissaoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissaoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
