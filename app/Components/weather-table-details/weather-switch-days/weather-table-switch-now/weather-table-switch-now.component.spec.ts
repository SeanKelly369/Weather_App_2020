import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherTableSwitchNowComponent } from './weather-table-switch-now.component';

describe('WeatherTableSwitchNowComponent', () => {
  let component: WeatherTableSwitchNowComponent;
  let fixture: ComponentFixture<WeatherTableSwitchNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableSwitchNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableSwitchNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
