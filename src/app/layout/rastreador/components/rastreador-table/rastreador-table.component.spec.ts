import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreadorTableComponent } from './rastreador-table.component';

describe('RastreadorTableComponent', () => {
  let component: RastreadorTableComponent;
  let fixture: ComponentFixture<RastreadorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreadorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreadorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
