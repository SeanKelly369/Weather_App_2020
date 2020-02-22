import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchDay4Component } from './weather-table-switch-day4.component';

describe('WeatherTableSwitchDay4Component', () => {
  let component: WeatherTableSwitchDay4Component;
  let fixture: ComponentFixture<WeatherTableSwitchDay4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchDay4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchDay4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
