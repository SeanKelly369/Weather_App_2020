import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { WeatherDataService } from '../../Services/weather-data.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'weather_now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss']
})
export class WeatherNowComponent extends AppComponent implements OnInit, OnChanges {

  fiveDayForecast: any;
  // isKm: boolean ;
  tempToggle = 1;
  speedMeasurementToggle = 1;
  sunRise: any;
  sunrise1Milli = 0;
  sunset1Milli = 0;
  public localWeather: any;
  public dayData: any;

  @Output() outputC = new EventEmitter<boolean>();
  @Output() outputKM = new EventEmitter();

  constructor(private getWeather: WeatherDataService) {
    super();
  }


  async ngOnInit() {
    await this.getWeather.initialize();
    this.getLocationDetail();
    this.getDayData();
  }

  ngOnChanges() {
    console.log("it's here: " + this.isC);

  }

    getDayData() {
    this.getWeather.getSunriseSunsetToday().subscribe((data: any) => {
      this.dayData = data;
    });
  }

    getLocationDetail() {
    this.getWeather.getLocationName().subscribe((data: any) => {
      this.localWeather = data;
    });
  }


  ToggleWeatherMeasurement(isC: boolean) {
    this.tempToggle++;
    this.tempToggle % 2 === 0 ? this.isC = true : this.isC = false;
    console.log('isC called in weather now: ' + this.isC);
    this.outputC.emit(this.isC);
  }


  ToggleDistanceMeasurement(isKm: boolean) {
    this.speedMeasurementToggle++;
    this.speedMeasurementToggle % 2 === 0 ? this.isKm = true : this.isKm = false;
    console.log('isKm called in weather now: ' + this.isKm);
    this.outputKM.emit(this.isKm);
  }

}
