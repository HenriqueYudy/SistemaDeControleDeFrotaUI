import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaTableComponent } from './frota-table.component';

describe('FrotaTableComponent', () => {
  let component: FrotaTableComponent;
  let fixture: ComponentFixture<FrotaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrotaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
