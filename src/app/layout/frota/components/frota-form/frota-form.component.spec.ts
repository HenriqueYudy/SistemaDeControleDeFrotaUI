import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaFormComponent } from './frota-form.component';

describe('FrotaFormComponent', () => {
  let component: FrotaFormComponent;
  let fixture: ComponentFixture<FrotaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrotaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
