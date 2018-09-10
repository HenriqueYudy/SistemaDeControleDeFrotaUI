import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaToolsComponent } from './frota-tools.component';

describe('FrotaToolsComponent', () => {
  let component: FrotaToolsComponent;
  let fixture: ComponentFixture<FrotaToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrotaToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotaToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
