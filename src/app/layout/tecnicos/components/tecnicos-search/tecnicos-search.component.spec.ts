import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosSearchComponent } from './tecnicos-search.component';

describe('TecnicosSearchComponent', () => {
  let component: TecnicosSearchComponent;
  let fixture: ComponentFixture<TecnicosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicosSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
