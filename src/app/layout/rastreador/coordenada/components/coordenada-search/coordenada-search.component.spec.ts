import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadaSearchComponent } from './coordenada-search.component';

describe('CoordenadaSearchComponent', () => {
  let component: CoordenadaSearchComponent;
  let fixture: ComponentFixture<CoordenadaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
