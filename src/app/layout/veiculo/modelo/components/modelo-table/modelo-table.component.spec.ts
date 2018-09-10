import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloTableComponent } from './modelo-table.component';

describe('ModeloTableComponent', () => {
  let component: ModeloTableComponent;
  let fixture: ComponentFixture<ModeloTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
