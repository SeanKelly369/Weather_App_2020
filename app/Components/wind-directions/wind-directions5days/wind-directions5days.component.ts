import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherDataService } from '../../../Services/weather-data.service';
import { WindDirectionsParentComponent } from '../wind-directions-parent/wind-directions-parent.component';

@Component({
  selector: 'app-wind-directions5days',
  templateUrl: './wind-directions5days.component.html',
  styleUrls: ['./wind-directions5days.component.scss']
})
export class WindDirections5daysComponent extends WindDirectionsParentComponent implements OnInit {

  public windDirection;

  constructor(public getWeather: WeatherDataService) {
    super(getWeather);
    super.ngOnInit();
  }

  async ngOnInit() {
    await this.getWeather.initialize();
    this.getWindData();
  }

    getWindData() {
    this.getWeather.getForeCast().subscribe((data: any) => {

      if(data.list[36] !== undefined) {
        this.windDirection = data.list[36].wind.deg;
      } else if (data.list[35] !== undefined) {
          this.windDirection = data.list[35].wind.deg;
      } else {
          this.windDirection = data.list[28].wind.deg;
      }
    });
  }

}
