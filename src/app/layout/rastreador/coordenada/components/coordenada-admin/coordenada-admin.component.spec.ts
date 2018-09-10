import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadaAdminComponent } from './coordenada-admin.component';

describe('CoordenadaAdminComponent', () => {
  let component: CoordenadaAdminComponent;
  let fixture: ComponentFixture<CoordenadaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
