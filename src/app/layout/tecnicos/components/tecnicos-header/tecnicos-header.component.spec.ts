import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosHeaderComponent } from './tecnicos-header.component';

describe('TecnicosHeaderComponent', () => {
  let component: TecnicosHeaderComponent;
  let fixture: ComponentFixture<TecnicosHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicosHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
