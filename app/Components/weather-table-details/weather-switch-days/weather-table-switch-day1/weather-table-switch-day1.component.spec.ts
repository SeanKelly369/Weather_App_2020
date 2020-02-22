import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchDay1Component } from './weather-table-switch-day1.component';

describe('WeatherTableSwitchDay1Component', () => {
  let component: WeatherTableSwitchDay1Component;
  let fixture: ComponentFixture<WeatherTableSwitchDay1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchDay1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchDay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
