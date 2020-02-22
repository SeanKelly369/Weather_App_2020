import { Component, OnInit, OnChanges } from '@angular/core';
import { WeatherDataService } from '../../../Services/weather-data.service';
import { WindDirectionsParentComponent } from '../wind-directions-parent/wind-directions-parent.component';

@Component({
  selector: 'app-wind-directions-now',
  templateUrl: './wind-directions-now.component.html'
})
export class WindDirectionsNowComponent extends WindDirectionsParentComponent implements OnInit {

  public dayData;

  constructor(public getWeather: WeatherDataService) {
    super(getWeather);
    super.ngOnInit();
  }

  async ngOnInit() {
    await this.getWeather.initialize();
    this.getLocationDetail();
  }

    getLocationDetail() {
    this.getWeather.getLocationName().subscribe((data: any) => {
      this.dayData = data.wind.deg;
    });
  }


}

