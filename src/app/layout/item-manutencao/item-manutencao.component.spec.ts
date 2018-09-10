import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManutencaoComponent } from './item-manutencao.component';

describe('ItemManutencaoComponent', () => {
  let component: ItemManutencaoComponent;
  let fixture: ComponentFixture<ItemManutencaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemManutencaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
