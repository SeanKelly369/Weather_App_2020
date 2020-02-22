import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableSwitchThreeHrsComponent } from './weather-table-switch-three-hrs.component';

describe('WeatherTableSwitchThreeHrsComponent', () => {
  let component: WeatherTableSwitchThreeHrsComponent;
  let fixture: ComponentFixture<WeatherTableSwitchThreeHrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchThreeHrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchThreeHrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
