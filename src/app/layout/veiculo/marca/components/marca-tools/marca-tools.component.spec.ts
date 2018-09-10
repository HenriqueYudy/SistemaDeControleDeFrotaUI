import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaToolsComponent } from './marca-tools.component';

describe('MarcaToolsComponent', () => {
  let component: MarcaToolsComponent;
  let fixture: ComponentFixture<MarcaToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
