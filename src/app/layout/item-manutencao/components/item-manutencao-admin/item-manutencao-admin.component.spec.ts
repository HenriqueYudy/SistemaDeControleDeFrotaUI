import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManutencaoAdminComponent } from './item-manutencao-admin.component';

describe('ItemManutencaoAdminComponent', () => {
  let component: ItemManutencaoAdminComponent;
  let fixture: ComponentFixture<ItemManutencaoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemManutencaoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManutencaoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
