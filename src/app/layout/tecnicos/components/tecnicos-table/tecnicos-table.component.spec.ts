import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosTableComponent } from './tecnicos-table.component';

describe('TecnicosTableComponent', () => {
  let component: TecnicosTableComponent;
  let fixture: ComponentFixture<TecnicosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
