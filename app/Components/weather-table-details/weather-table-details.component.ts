import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { WeatherDataService } from '../../Services/weather-data.service';

@Component({
  selector: 'app-weather-table-details',
  templateUrl: './weather-table-details.component.html',
  styleUrls: ['./weather-table-details.component.scss'],
  providers: []
})

export class WeatherTableDetailsComponent implements OnInit {

  isCLocal: boolean;
  isKMLocal: boolean;
  currentTime = Date.now();
  weather: any;
  @Input() isC = true;
  @Input() isKm = true;

  sunriseSunsetToday: any;
  sunriseSunsetTomorrow: any;
  sunriseSunsetPlusTwo: any;
  sunriseSunsetPlusThree: any;
  sunriseSunsetPlusFour: any;
  sunriseSunsetPlusFive: any;

  sunriseSunriseToday: any;
  sunriseSunriseTomorrow: any;
  sunriseSunrisePlusTwo: any;
  sunriseSunrisePlusThree: any;
  sunriseSunrisePlusFour: any;
  sunriseSunrisePlusFive: any;

  temp3hr = 0;
  temp9hr = 0;
  temp15hr = 0;
  temp1day = 0;
  temp2day = 0;
  temp3day = 0;
  temp4day = 0;
  temp5day = 0;

  airPressure3hr = 0;
  airPressure9hr = 0;
  airPressure15hr = 0;
  airPressure1day = 0;
  airPressure2day = 0;
  airPressure3day = 0;
  airPressure4day = 0;
  airPressure5day = 0;

  windDirectionNow = 0
  windDirection3hr = 0;
  windDirection9hr = 0;
  windDirection15hr = 0;
  windDirection1day = 0;
  windDirection2day = 0;
  windDirection3day = 0;
  windDirection4day = 0;
  windDirection5day = 0;

  windSpeedNow = 0;
  windSpeed3hr = 0;
  windSpeed9hr = 0;
  windSpeed15hr = 0;
  windSpeed1day = 0;
  windSpeed2day = 0;
  windSpeed3day = 0;
  windSpeed4day = 0;
  windSpeed5day = 0;

  sunriseTomorrow = 'pending';
  sunsetTomorrow = 'pending';
  sunrisePlusTwo = 'pending';
  sunsetPlusTwo = 'pending';
  sunrisePlusThree = 'pending';
  sunsetPlusThree = 'pending';
  sunrisePlusFour = 'pending';
  sunsetPlusFour = 'pending';
  sunrisePlusFive = 'pending';
  sunsetPlusFive = 'pending';

  constructor(protected getWeather: WeatherDataService) {}

  async ngOnInit() {

    await this.getWeather.initialize();
    this.getData();
    this.currentTime =  Date.now();

    setInterval(() => {
      this.currentTime =  Date.now();
    }, 15000);
  }

  receiveIsCParent(isC: boolean) {
    this.isCLocal = isC;
  }

  receiveIsKMParent(isKm: boolean) {
    this.isKMLocal = isKm;
  }

  getData() {
    this.getWeather.getForeCast().subscribe((data: any) => {
      this.weather = data;
      this.temp3hr = this.weather.list[1].main.temp - 273.15;
      this.temp9hr = this.weather.list[3].main.temp - 273.15;
      this.temp15hr = this.weather.list[5].main.temp - 273.15;
      this.temp1day = this.weather.list[7].main.temp - 273.15;
      this.temp2day = this.weather.list[15].main.temp - 273.15;
      this.temp3day = this.weather.list[23].main.temp - 273.15;
      this.temp4day = this.weather.list[31].main.temp - 273.15;

      this.airPressure3hr = this.weather.list[1].main.pressure;
      this.airPressure9hr = this.weather.list[3].main.pressure;
      this.airPressure15hr = this.weather.list[5].main.pressure;
      this.airPressure1day = this.weather.list[7].main.pressure;
      this.airPressure2day = this.weather.list[15].main.pressure;
      this.airPressure3day = this.weather.list[23].main.pressure;
      this.airPressure4day = this.weather.list[31].main.pressure;

      this.windDirectionNow = this.weather.list[0].wind.deg;
      this.windDirection3hr = this.weather.list[1].wind.deg;
      this.windDirection9hr = this.weather.list[3].wind.deg;
      this.windDirection15hr = this.weather.list[5].wind.deg;
      this.windDirection1day = this.weather.list[7].wind.deg;
      this.windDirection2day = this.weather.list[15].wind.deg;
      this.windDirection3day = this.weather.list[23].wind.deg;
      this.windDirection4day = this.weather.list[31].wind.deg;

      this.windSpeedNow = this.weather.list[0].wind.speed;
      this.windSpeed3hr = this.weather.list[1].wind.speed;
      this.windSpeed9hr = this.weather.list[3].wind.speed;
      this.windSpeed15hr = this.weather.list[5].wind.speed;
      this.windSpeed1day = this.weather.list[7].wind.speed;
      this.windSpeed2day = this.weather.list[15].wind.speed;
      this.windSpeed3day = this.weather.list[23].wind.speed;
      this.windSpeed4day = this.weather.list[31].wind.speed;

      if (this.weather.list[39].dt !== undefined) {
        this.temp5day = this.weather.list[39].main.temp - 273.15;
        this.airPressure5day = this.weather.list[39].main.pressure;
        this.windDirection5day = this.weather.list[39].wind.deg;
        this.windSpeed5day = this.weather.list[39].wind.speed;
      } else if (this.weather.list[38].dt !== undefined) {
        this.temp5day = this.weather.list[38].main.temp - 273.15;
        this.airPressure5day = this.weather.list[38].main.pressure;
        this.windDirection5day = this.weather.list[38].wind.deg;
        this.windSpeed5day = this.weather.list[38].wind.speed;
      } else if (this.weather.list[37].dt !== undefined) {
        this.temp5day = this.weather.list[37].main.temp - 273.15;
        this.airPressure5day = this.weather.list[37].main.pressure;
        this.windDirection5day = this.weather.list[37].wind.deg;
        this.windSpeed5day = this.weather.list[37].wind.speed;
      } else {
        this.temp5day = this.weather.list[31].main.temp - 273.15;
        this.airPressure5day = this.weather.list[31].main.pressure;
        this.windDirection5day = this.weather.list[31].wind.deg;
        this.windSpeed5day = this.weather.list[31].wind.speed;
      }
    });

    this.getWeather.getSunriseSunsetTomorrow().subscribe((data: any) => {
      this.sunriseSunsetTomorrow = data;
      this.sunriseTomorrow = data.results.sunrise;
      this.sunsetTomorrow = data.results.sunset;
    });
    this.getWeather.getSunriseSunsetDay2().subscribe((data: any) => {
      this.sunriseSunsetPlusTwo = data;
      this.sunrisePlusTwo = data.results.sunrise;
      this.sunsetPlusTwo = data.results.sunset;
    });
    this.getWeather.getSunriseSunsetDay3().subscribe((data: any) => {
      this.sunriseSunsetPlusThree = data;
      this.sunrisePlusThree = data.results.sunrise;
      this.sunsetPlusThree = data.results.sunset;
    });
    this.getWeather.getSunriseSunsetDay4().subscribe((data: any) => {
      this.sunriseSunsetPlusFour = data;
      this.sunrisePlusFour = data.results.sunrise;
      this.sunsetPlusFour = data.results.sunset;
    });
    this.getWeather.getSunriseSunsetDay5().subscribe((data: any) => {
      this.sunriseSunsetPlusFive = data;
      this.sunrisePlusFive = data.results.sunrise;
      this.sunsetPlusFive = data.results.sunset;
    });
  }

}
