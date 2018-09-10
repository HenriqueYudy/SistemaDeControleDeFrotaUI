import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletRasterComponent } from './tablet-raster.component';

describe('TabletRasterComponent', () => {
  let component: TabletRasterComponent;
  let fixture: ComponentFixture<TabletRasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletRasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletRasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
