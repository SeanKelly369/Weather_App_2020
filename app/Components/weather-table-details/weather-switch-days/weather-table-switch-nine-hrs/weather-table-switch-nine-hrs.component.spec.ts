import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchNineHrsComponent } from './weather-table-switch-nine-hrs.component';

describe('WeatherTableSwitchNineHrsComponent', () => {
  let component: WeatherTableSwitchNineHrsComponent;
  let fixture: ComponentFixture<WeatherTableSwitchNineHrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchNineHrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchNineHrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
