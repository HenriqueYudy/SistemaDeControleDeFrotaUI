import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondutorToolsComponent } from './condutor-tools.component';

describe('CondutorToolsComponent', () => {
  let component: CondutorToolsComponent;
  let fixture: ComponentFixture<CondutorToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondutorToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondutorToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
