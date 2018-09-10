import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaSearchComponent } from './frota-search.component';

describe('FrotaSearchComponent', () => {
  let component: FrotaSearchComponent;
  let fixture: ComponentFixture<FrotaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrotaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
