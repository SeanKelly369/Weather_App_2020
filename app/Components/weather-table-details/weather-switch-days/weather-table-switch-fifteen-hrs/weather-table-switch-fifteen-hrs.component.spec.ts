import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchFifteenHrsComponent } from './weather-table-switch-fifteen-hrs.component';

describe('WeatherTableSwitchFifteenHrsComponent', () => {
  let component: WeatherTableSwitchFifteenHrsComponent;
  let fixture: ComponentFixture<WeatherTableSwitchFifteenHrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchFifteenHrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchFifteenHrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
