import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadaHeaderComponent } from './coordenada-header.component';

describe('CoordenadaHeaderComponent', () => {
  let component: CoordenadaHeaderComponent;
  let fixture: ComponentFixture<CoordenadaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
