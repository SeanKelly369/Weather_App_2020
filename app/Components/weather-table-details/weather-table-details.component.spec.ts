import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTableDetailsComponent } from './weather-table-details.component';

describe('WeatherTableDetailsComponent', () => {
  let component: WeatherTableDetailsComponent;
  let fixture: ComponentFixture<WeatherTableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
