import { Component, OnInit } from '@angular/core';
import { WeatherTableDetailsComponent } from '../../weather-table-details.component';
import { WeatherDataService } from '../../../../Services/weather-data.service';

@Component({
  selector: 'app-weather-table-switch-three-hrs',
  templateUrl: './weather-table-switch-three-hrs.component.html',
  styleUrls: ['./weather-table-switch-three-hrs.component.scss']
})
export class WeatherTableSwitchThreeHrsComponent extends WeatherTableDetailsComponent implements OnInit {

  threeHrs: any;
  nightOrDay: string;

  constructor(getWeather: WeatherDataService) {
    super(getWeather);
  }

  getDayLen() {
    this.getWeather.getForeCast().subscribe((data: any) => {
      this.threeHrs = data;
      this.nightOrDay = this.threeHrs.list[1].sys.pod;
    });
  }

  async ngOnInit() {
    super.ngOnInit();
    await this.getWeather.initialize();
    this.getDayLen();
  }

}
