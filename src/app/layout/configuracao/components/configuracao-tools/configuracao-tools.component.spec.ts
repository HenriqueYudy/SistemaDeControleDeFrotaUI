import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoToolsComponent } from './configuracao-tools.component';

describe('ConfiguracaoToolsComponent', () => {
  let component: ConfiguracaoToolsComponent;
  let fixture: ComponentFixture<ConfiguracaoToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
