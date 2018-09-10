import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoHeaderComponent } from './classificacao-header.component';

describe('ClassificacaoHeaderComponent', () => {
  let component: ClassificacaoHeaderComponent;
  let fixture: ComponentFixture<ClassificacaoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
