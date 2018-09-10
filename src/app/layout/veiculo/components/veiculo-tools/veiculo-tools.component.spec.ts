import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoToolsComponent } from './veiculo-tools.component';

describe('VeiculoToolsComponent', () => {
  let component: VeiculoToolsComponent;
  let fixture: ComponentFixture<VeiculoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
