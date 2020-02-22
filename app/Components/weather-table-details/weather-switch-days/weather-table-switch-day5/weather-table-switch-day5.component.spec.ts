import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchDay5Component } from './weather-table-switch-day5.component';

describe('WeatherTableSwitchDay5Component', () => {
  let component: WeatherTableSwitchDay5Component;
  let fixture: ComponentFixture<WeatherTableSwitchDay5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchDay5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchDay5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
