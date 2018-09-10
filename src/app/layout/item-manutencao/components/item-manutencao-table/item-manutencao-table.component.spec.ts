import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManutencaoTableComponent } from './item-manutencao-table.component';

describe('ItemManutencaoTableComponent', () => {
  let component: ItemManutencaoTableComponent;
  let fixture: ComponentFixture<ItemManutencaoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemManutencaoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManutencaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
