import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherDataService } from '../../../Services/weather-data.service';
import { WindDirectionsParentComponent } from '../wind-directions-parent/wind-directions-parent.component';

@Component({
  selector: 'app-wind-directions4days',
  templateUrl: './wind-directions4days.component.html'
})
export class WindDirections4daysComponent extends WindDirectionsParentComponent implements OnInit {

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
      this.windDirection = data.list[28].wind.deg;
    });
  }

}
