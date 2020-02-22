import { Component, OnInit } from '@angular/core';
import { WeatherTableDetailsComponent } from '../../weather-table-details.component';
import { WeatherDataService } from '../../../../Services/weather-data.service';

@Component({
  selector: 'app-weather-table-switch-day2',
  templateUrl: './weather-table-switch-day2.component.html',
  styleUrls: ['./weather-table-switch-day2.component.scss']
})
export class WeatherTableSwitchDay2Component extends WeatherTableDetailsComponent implements OnInit {

  day2: any;
  nightOrDay: string;

  constructor(getWeather: WeatherDataService) {
    super(getWeather);
  }

  getDayLen() {
    this.getWeather.getForeCast().subscribe((data: any) => {
      this.day2 = data;
      this.nightOrDay = this.day2.list[16].sys.pod;
    });
  }

  async ngOnInit() {
    super.ngOnInit();
    await this.getWeather.initialize();
    this.getDayLen();

  }
}

