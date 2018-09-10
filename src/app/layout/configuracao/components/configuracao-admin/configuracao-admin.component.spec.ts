import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoAdminComponent } from './configuracao-admin.component';

describe('ConfiguracaoAdminComponent', () => {
  let component: ConfiguracaoAdminComponent;
  let fixture: ComponentFixture<ConfiguracaoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
