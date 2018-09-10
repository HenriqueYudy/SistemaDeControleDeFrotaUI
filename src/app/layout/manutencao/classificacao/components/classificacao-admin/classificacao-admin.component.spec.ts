import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoAdminComponent } from './classificacao-admin.component';

describe('ClassificacaoAdminComponent', () => {
  let component: ClassificacaoAdminComponent;
  let fixture: ComponentFixture<ClassificacaoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
