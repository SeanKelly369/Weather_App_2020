import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../../../Services/weather-data.service';


@Component({
  selector: 'app-wind-directions-parent',
  templateUrl: './wind-directions-parent.component.html',
  styleUrls: ['./wind-directions-parent.component.scss']
})
export class WindDirectionsParentComponent implements OnInit {

  constructor(public getWeather: WeatherDataService) { }

  public currentTime;
  public sunriseSunsetToday: any;
  public sunriseSunsetTomorrow: any;
  public sunriseSunsetPlus2: any;
  public sunriseSunsetPlus3: any;
  public sunriseSunsetPlus4: any;
  public sunriseSunsetPlus5: any;

  getSunriseSunset() {
    this.getWeather.getSunriseSunsetToday().subscribe((data: any) => {
      this.sunriseSunsetToday = data;
    });
    this.getWeather.getSunriseSunsetTomorrow().subscribe((data1: any) => {
      this.sunriseSunsetTomorrow = data1;
    });
    this.getWeather.getSunriseSunsetToday().subscribe((data2: any) => {
      this.sunriseSunsetPlus2 = data2;
    });
    this.getWeather.getSunriseSunsetToday().subscribe((data3: any) => {
      this.sunriseSunsetPlus3 = data3;
    });
    this.getWeather.getSunriseSunsetToday().subscribe((data4: any) => {
      this.sunriseSunsetPlus4 = data4;
    });
    this.getWeather.getSunriseSunsetToday().subscribe((data5: any) => {
      this.sunriseSunsetPlus5 = data5;
    });
  }

  async ngOnInit() {
    await this.getWeather.initialize();
    this.getSunriseSunset();
  }

}
