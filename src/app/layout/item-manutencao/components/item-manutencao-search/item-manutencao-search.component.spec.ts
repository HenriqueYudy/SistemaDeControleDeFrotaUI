import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManutencaoSearchComponent } from './item-manutencao-search.component';

describe('ItemManutencaoSearchComponent', () => {
  let component: ItemManutencaoSearchComponent;
  let fixture: ComponentFixture<ItemManutencaoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemManutencaoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManutencaoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
