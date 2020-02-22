import { Component, OnInit } from '@angular/core';
import { WeatherTableDetailsComponent } from '../../weather-table-details.component';
import { WeatherDataService } from '../../../../Services/weather-data.service';

@Component({
  selector: 'app-weather-table-switch-day4',
  templateUrl: './weather-table-switch-day4.component.html',
  styleUrls: ['./weather-table-switch-day4.component.scss']
})
export class WeatherTableSwitchDay4Component extends WeatherTableDetailsComponent implements OnInit {

  day4: any;
  nightOrDay: string;

  constructor(getWeather: WeatherDataService) {
    super(getWeather);
  }

  getDayLen() {
    this.getWeather.getForeCast().subscribe((data: any) => {
      this.day4 = data;
      this.nightOrDay = this.day4.list[32].sys.pod;
    });
  }

  async ngOnInit() {
    super.ngOnInit();
    await this.getWeather.initialize();
    this.getDayLen();

  }
}

