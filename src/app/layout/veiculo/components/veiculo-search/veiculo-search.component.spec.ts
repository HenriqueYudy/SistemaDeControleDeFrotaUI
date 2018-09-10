import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoSearchComponent } from './veiculo-search.component';

describe('VeiculoSearchComponent', () => {
  let component: VeiculoSearchComponent;
  let fixture: ComponentFixture<VeiculoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
