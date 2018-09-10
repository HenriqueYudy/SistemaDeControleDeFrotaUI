import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioHeaderComponent } from './usuario-header.component';

describe('UsuarioHeaderComponent', () => {
  let component: UsuarioHeaderComponent;
  let fixture: ComponentFixture<UsuarioHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});