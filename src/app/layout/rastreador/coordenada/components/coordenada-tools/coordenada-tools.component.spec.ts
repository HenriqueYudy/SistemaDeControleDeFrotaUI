import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadaToolsComponent } from './coordenada-tools.component';

describe('CoordenadaToolsComponent', () => {
  let component: CoordenadaToolsComponent;
  let fixture: ComponentFixture<CoordenadaToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadaToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadaToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
