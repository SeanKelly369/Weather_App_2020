import { Component, OnInit } from '@angular/core';
import { WeatherTableDetailsComponent } from '../../weather-table-details.component';
import { WeatherDataService } from '../../../../Services/weather-data.service';

@Component({
  selector: 'app-weather-table-switch-nine-hrs',
  templateUrl: './weather-table-switch-nine-hrs.component.html',
  styleUrls: ['./weather-table-switch-nine-hrs.component.scss']
})
export class WeatherTableSwitchNineHrsComponent extends WeatherTableDetailsComponent implements OnInit {

  nineHrs: any;
  nightOrDay: string;

  constructor(getWeather: WeatherDataService) {
    super(getWeather);
  }

  getDayLen() {
    this.getWeather.getForeCast().subscribe((data: any) => {
      this.nineHrs = data;
      this.nightOrDay = this.nineHrs.list[3].sys.pod;
    });
  }

  async ngOnInit() {
    super.ngOnInit();
    await this.getWeather.initialize();
    this.getDayLen();


  }

}
