import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManutencaoToolsComponent } from './item-manutencao-tools.component';

describe('ItemManutencaoToolsComponent', () => {
  let component: ItemManutencaoToolsComponent;
  let fixture: ComponentFixture<ItemManutencaoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemManutencaoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManutencaoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
