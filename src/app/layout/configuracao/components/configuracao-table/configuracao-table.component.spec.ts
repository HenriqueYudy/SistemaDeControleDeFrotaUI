import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoTableComponent } from './configuracao-table.component';

describe('ConfiguracaoTableComponent', () => {
  let component: ConfiguracaoTableComponent;
  let fixture: ComponentFixture<ConfiguracaoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
