import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaHeaderComponent } from './frota-header.component';

describe('FrotaHeaderComponent', () => {
  let component: FrotaHeaderComponent;
  let fixture: ComponentFixture<FrotaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrotaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
