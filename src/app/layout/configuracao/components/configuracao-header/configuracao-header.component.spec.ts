import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoHeaderComponent } from './configuracao-header.component';

describe('ConfiguracaoHeaderComponent', () => {
  let component: ConfiguracaoHeaderComponent;
  let fixture: ComponentFixture<ConfiguracaoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
