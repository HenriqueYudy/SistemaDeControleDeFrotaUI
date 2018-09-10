import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloHeaderComponent } from './modelo-header.component';

describe('ModeloHeaderComponent', () => {
  let component: ModeloHeaderComponent;
  let fixture: ComponentFixture<ModeloHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
