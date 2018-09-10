import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoAdminComponent } from './manutencao-admin.component';

describe('ManutencaoAdminComponent', () => {
  let component: ManutencaoAdminComponent;
  let fixture: ComponentFixture<ManutencaoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
