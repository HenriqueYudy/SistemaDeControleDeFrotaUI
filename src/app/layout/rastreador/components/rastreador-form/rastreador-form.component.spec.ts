import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreadorFormComponent } from './rastreador-form.component';

describe('RastreadorFormComponent', () => {
  let component: RastreadorFormComponent;
  let fixture: ComponentFixture<RastreadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
