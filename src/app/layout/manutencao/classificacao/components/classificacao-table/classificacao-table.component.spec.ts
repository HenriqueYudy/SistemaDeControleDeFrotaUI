import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoTableComponent } from './classificacao-table.component';

describe('ClassificacaoTableComponent', () => {
  let component: ClassificacaoTableComponent;
  let fixture: ComponentFixture<ClassificacaoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
