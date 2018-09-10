import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoHeaderComponent } from './manutencao-header.component';

describe('ManutencaoHeaderComponent', () => {
  let component: ManutencaoHeaderComponent;
  let fixture: ComponentFixture<ManutencaoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
