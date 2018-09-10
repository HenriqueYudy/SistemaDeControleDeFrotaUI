import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloSearchComponent } from './modelo-search.component';

describe('ModeloSearchComponent', () => {
  let component: ModeloSearchComponent;
  let fixture: ComponentFixture<ModeloSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
