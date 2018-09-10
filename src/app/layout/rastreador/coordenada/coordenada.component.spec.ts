import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadaComponent } from './coordenada.component';

describe('CoordenadaComponent', () => {
  let component: CoordenadaComponent;
  let fixture: ComponentFixture<CoordenadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
