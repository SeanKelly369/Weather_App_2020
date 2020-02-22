import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchDay2Component } from './weather-table-switch-day2.component';

describe('WeatherTableSwitchDay2Component', () => {
  let component: WeatherTableSwitchDay2Component;
  let fixture: ComponentFixture<WeatherTableSwitchDay2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchDay2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchDay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
