import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemManutencaoFormComponent } from './item-manutencao-form.component';

describe('ItemManutencaoFormComponent', () => {
  let component: ItemManutencaoFormComponent;
  let fixture: ComponentFixture<ItemManutencaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemManutencaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemManutencaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
