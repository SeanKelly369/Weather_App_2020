import { Component, OnInit } from '@angular/core';
import { WeatherTableDetailsComponent } from '../../weather-table-details.component';
import { WeatherDataService } from '../../../../Services/weather-data.service';

@Component({
  selector: 'app-weather-table-switch-fifteen-hrs',
  templateUrl: './weather-table-switch-fifteen-hrs.component.html'
})
export class WeatherTableSwitchFifteenHrsComponent extends WeatherTableDetailsComponent implements OnInit {

  fifteenthHr: any;
  nightOrDay: string;

  constructor(getWeather: WeatherDataService) {
    super(getWeather);
  }

  getDayLen() {
    this.getWeather.getForeCast().subscribe((data: any) => {
      this.fifteenthHr = data;
      this.nightOrDay = this.fifteenthHr.list[5].sys.pod;
    });
  }

  async ngOnInit() {
    super.ngOnInit();
    await this.getWeather.initialize();
    this.getDayLen();


  }

}
