import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherDataService } from '../../../Services/weather-data.service';
import { WindDirectionsParentComponent } from '../wind-directions-parent/wind-directions-parent.component';

@Component({
  selector: 'app-wind-directions1hr',
  templateUrl: './wind-directions1hr.component.html'
})
export class WindDirections1hrComponent extends WindDirectionsParentComponent implements OnInit {

  public windDirection;
  isC: boolean;

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
      this.windDirection = data.list[1].wind.deg;
    });
  }

}
