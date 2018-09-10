import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreadorToolsComponent } from './rastreador-tools.component';

describe('RastreadorToolsComponent', () => {
  let component: RastreadorToolsComponent;
  let fixture: ComponentFixture<RastreadorToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreadorToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreadorToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
