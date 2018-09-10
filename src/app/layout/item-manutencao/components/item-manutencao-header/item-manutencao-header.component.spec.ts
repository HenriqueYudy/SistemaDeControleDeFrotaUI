import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManutencaoHeaderComponent } from './item-manutencao-header.component';

describe('ItemManutencaoHeaderComponent', () => {
  let component: ItemManutencaoHeaderComponent;
  let fixture: ComponentFixture<ItemManutencaoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemManutencaoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManutencaoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
