import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaSearchComponent } from './marca-search.component';

describe('MarcaSearchComponent', () => {
  let component: MarcaSearchComponent;
  let fixture: ComponentFixture<MarcaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
