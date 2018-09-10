import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBodyComponent } from './perfil-body.component';

describe('PerfilBodyComponent', () => {
  let component: PerfilBodyComponent;
  let fixture: ComponentFixture<PerfilBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
