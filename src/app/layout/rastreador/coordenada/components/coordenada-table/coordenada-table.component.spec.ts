import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadaTableComponent } from './coordenada-table.component';

describe('CoordenadaTableComponent', () => {
  let component: CoordenadaTableComponent;
  let fixture: ComponentFixture<CoordenadaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
