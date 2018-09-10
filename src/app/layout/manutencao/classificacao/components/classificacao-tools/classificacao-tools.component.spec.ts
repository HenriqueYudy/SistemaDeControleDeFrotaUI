import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoToolsComponent } from './classificacao-tools.component';

describe('ClassificacaoToolsComponent', () => {
  let component: ClassificacaoToolsComponent;
  let fixture: ComponentFixture<ClassificacaoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificacaoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
