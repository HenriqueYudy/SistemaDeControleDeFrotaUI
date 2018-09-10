import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoTableComponent } from './manutencao-table.component';

describe('ManutencaoTableComponent', () => {
  let component: ManutencaoTableComponent;
  let fixture: ComponentFixture<ManutencaoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
