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
      // console.log(this.weather);
    });
    this.getWeather.getSunriseSunsetToday().subscribe((data: any) => {
      this.sunriseSunsetToday = data;
      // console.log(this.sunriseSunsetToday);
    });
    this.getWeather.getSunriseSunsetTomorrow().subscribe((data: any) => {
      this.sunriseSunsetTomorrow = data;
    });
    this.getWeather.getSunriseSunsetDay2().subscribe((data: any) => {
      this.sunriseSunsetPlusTwo = data;
    });
    this.getWeather.getSunriseSunsetDay3().subscribe((data: any) => {
      this.sunriseSunsetPlusThree = data;
    });
    this.getWeather.getSunriseSunsetDay4().subscribe((data: any) => {
      this.sunriseSunsetPlusFour = data;
    });
    this.getWeather.getSunriseSunsetDay5().subscribe((data: any) => {
      this.sunriseSunsetPlusFive = data;
    });
  }

}
