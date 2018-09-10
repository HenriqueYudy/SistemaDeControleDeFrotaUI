import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreadorHeaderComponent } from './rastreador-header.component';

describe('RastreadorHeaderComponent', () => {
  let component: RastreadorHeaderComponent;
  let fixture: ComponentFixture<RastreadorHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreadorHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreadorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
