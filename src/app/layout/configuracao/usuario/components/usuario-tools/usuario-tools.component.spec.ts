import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioToolsComponent } from './usuario-tools.component';

describe('UsuarioToolsComponent', () => {
  let component: UsuarioToolsComponent;
  let fixture: ComponentFixture<UsuarioToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
