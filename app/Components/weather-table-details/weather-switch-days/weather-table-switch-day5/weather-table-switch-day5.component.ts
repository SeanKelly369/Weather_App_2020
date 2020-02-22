import { Component, OnInit } from '@angular/core';
import { WeatherTableDetailsComponent } from '../../weather-table-details.component';
import { WeatherDataService } from '../../../../Services/weather-data.service';

@Component({
  selector: 'app-weather-table-switch-day5',
  templateUrl: './weather-table-switch-day5.component.html'
})
export class WeatherTableSwitchDay5Component extends WeatherTableDetailsComponent implements OnInit {

  day5: any;
  nightOrDay: string;

  constructor(getWeather: WeatherDataService) {
    super(getWeather);
  }

  getDayLen() {
    this.getWeather.getForeCast().subscribe((data: any) => {
      this.day5 = data;
      this.nightOrDay = this.day5.list[36].sys.pod;
    });
  }

  async ngOnInit() {
    super.ngOnInit();
    await this.getWeather.initialize();
    this.getDayLen();

  }
}

