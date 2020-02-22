import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchDay3Component } from './weather-table-switch-day3.component';

describe('WeatherTableSwitchDay3Component', () => {
  let component: WeatherTableSwitchDay3Component;
  let fixture: ComponentFixture<WeatherTableSwitchDay3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchDay3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchDay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
