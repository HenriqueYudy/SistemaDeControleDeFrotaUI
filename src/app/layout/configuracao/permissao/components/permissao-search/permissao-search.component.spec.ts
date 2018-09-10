import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoSearchComponent } from './permissao-search.component';

describe('PermissaoSearchComponent', () => {
  let component: PermissaoSearchComponent;
  let fixture: ComponentFixture<PermissaoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissaoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissaoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
