import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoHeaderComponent } from './permissao-header.component';

describe('PermissaoHeaderComponent', () => {
  let component: PermissaoHeaderComponent;
  let fixture: ComponentFixture<PermissaoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissaoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissaoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
