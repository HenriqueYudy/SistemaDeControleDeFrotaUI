import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoToolsComponent } from './manutencao-tools.component';

describe('ManutencaoToolsComponent', () => {
  let component: ManutencaoToolsComponent;
  let fixture: ComponentFixture<ManutencaoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
