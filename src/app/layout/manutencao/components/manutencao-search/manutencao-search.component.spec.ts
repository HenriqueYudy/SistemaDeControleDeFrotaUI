import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoSearchComponent } from './manutencao-search.component';

describe('ManutencaoSearchComponent', () => {
  let component: ManutencaoSearchComponent;
  let fixture: ComponentFixture<ManutencaoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
