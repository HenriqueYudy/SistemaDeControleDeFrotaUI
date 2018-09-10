import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloToolsComponent } from './modelo-tools.component';

describe('ModeloToolsComponent', () => {
  let component: ModeloToolsComponent;
  let fixture: ComponentFixture<ModeloToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
