import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosToolsComponent } from './tecnicos-tools.component';

describe('TecnicosToolsComponent', () => {
  let component: TecnicosToolsComponent;
  let fixture: ComponentFixture<TecnicosToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicosToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
