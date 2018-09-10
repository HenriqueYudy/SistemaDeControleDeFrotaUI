import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoSearchComponent } from './classificacao-search.component';

describe('ClassificacaoSearchComponent', () => {
  let component: ClassificacaoSearchComponent;
  let fixture: ComponentFixture<ClassificacaoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
