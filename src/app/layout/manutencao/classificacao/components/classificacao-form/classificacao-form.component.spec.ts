import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoFormComponent } from './classificacao-form.component';

describe('ClassificacaoFormComponent', () => {
  let component: ClassificacaoFormComponent;
  let fixture: ComponentFixture<ClassificacaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
