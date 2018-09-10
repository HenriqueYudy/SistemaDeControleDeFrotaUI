import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoToolsComponent } from './permissao-tools.component';

describe('PermissaoToolsComponent', () => {
  let component: PermissaoToolsComponent;
  let fixture: ComponentFixture<PermissaoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissaoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissaoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
