import { Component, OnInit } from '@angular/core';
import { WeatherTableDetailsComponent } from '../../weather-table-details.component';
import { WeatherDataService } from '../../../../Services/weather-data.service';

@Component({
  selector: 'app-weather-table-switch-day3',
  templateUrl: './weather-table-switch-day3.component.html'
})
export class WeatherTableSwitchDay3Component extends WeatherTableDetailsComponent implements OnInit {

  day3: any;
  nightOrDay: string;

  constructor(getWeather: WeatherDataService) {
    super(getWeather);
  }

  getDayLen() {
    this.getWeather.getForeCast().subscribe((data: any) => {
      this.day3 = data;
      this.nightOrDay = this.day3.list[24].sys.pod;
    });
  }

  async ngOnInit() {
    super.ngOnInit();
    await this.getWeather.initialize();
    this.getDayLen();

  }
}

