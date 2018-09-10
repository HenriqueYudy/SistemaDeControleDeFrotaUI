import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreadorSearchComponent } from './rastreador-search.component';

describe('RastreadorSearchComponent', () => {
  let component: RastreadorSearchComponent;
  let fixture: ComponentFixture<RastreadorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreadorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreadorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
