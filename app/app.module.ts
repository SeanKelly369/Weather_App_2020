import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherLocalComponent } from './Components/weather-local/weather-local.component';
import { WeatherNowComponent } from './Components/weather-now/weather-now.component';
import { WeatherTableDetailsComponent } from './Components/weather-table-details/weather-table-details.component';
import { WeatherDataService } from './Services/weather-data.service';

import { WindDirectionsNowComponent } from './Components/wind-directions/wind-directions-now/wind-directions-now.component';
import { WindDirections1hrComponent } from './Components/wind-directions/wind-directions1hr/wind-directions1hr.component';
import { WindDirections3hrsComponent } from './Components/wind-directions/wind-directions3hrs/wind-directions3hrs.component';
import { WindDirections9hrsComponent } from './Components/wind-directions/wind-directions9hrs/wind-directions9hrs.component';
import { WindDirections15hrsComponent } from './Components/wind-directions/wind-directions15hrs/wind-directions15hrs.component';

import { WindDirections2daysComponent } from './Components/wind-directions/wind-directions2days/wind-directions2days.component';
import { WindDirections3daysComponent } from './Components/wind-directions/wind-directions3days/wind-directions3days.component';
import { WindDirections4daysComponent } from './Components/wind-directions/wind-directions4days/wind-directions4days.component';
import { WindDirections5daysComponent } from './Components/wind-directions/wind-directions5days/wind-directions5days.component';
import { WindDirectionsParentComponent } from './Components/wind-directions/wind-directions-parent/wind-directions-parent.component';

import { WeatherTableSwitchNowComponent } from './Components/weather-table-details/weather-switch-days/weather-table-switch-now/weather-table-switch-now.component';
import { WeatherTableSwitchDay1Component } from './Components/weather-table-details/weather-switch-days/weather-table-switch-day1/weather-table-switch-day1.component';
import { WeatherTableSwitchDay2Component } from './Components/weather-table-details/weather-switch-days/weather-table-switch-day2/weather-table-switch-day2.component';
import { WeatherTableSwitchDay3Component } from './Components/weather-table-details/weather-switch-days/weather-table-switch-day3/weather-table-switch-day3.component';
import { WeatherTableSwitchDay4Component } from './Components/weather-table-details/weather-switch-days/weather-table-switch-day4/weather-table-switch-day4.component';
import { WeatherTableSwitchDay5Component } from './Components/weather-table-details/weather-switch-days/weather-table-switch-day5/weather-table-switch-day5.component';
import { WeatherTableSwitchThreeHrsComponent } from './Components/weather-table-details/weather-switch-days/weather-table-switch-three-hrs/weather-table-switch-three-hrs.component';
import { WeatherTableSwitchNineHrsComponent } from './Components/weather-table-details/weather-switch-days/weather-table-switch-nine-hrs/weather-table-switch-nine-hrs.component';
import { WeatherTableSwitchFifteenHrsComponent } from './Components/weather-table-details/weather-switch-days/weather-table-switch-fifteen-hrs/weather-table-switch-fifteen-hrs.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherLocalComponent,
    WeatherNowComponent,
    WeatherTableDetailsComponent,
    WindDirectionsNowComponent,
    WindDirections1hrComponent,
    WindDirections3hrsComponent,
    WindDirections9hrsComponent,
    WindDirections15hrsComponent,
    WindDirections2daysComponent,
    WindDirections2daysComponent,
    WindDirections3daysComponent,
    WindDirections4daysComponent,
    WindDirections5daysComponent,
    WindDirectionsParentComponent,
    WeatherTableSwitchNowComponent,
    WeatherTableSwitchThreeHrsComponent,
    WeatherTableSwitchNineHrsComponent,
    WeatherTableSwitchFifteenHrsComponent,
    WeatherTableSwitchDay1Component,
    WeatherTableSwitchDay2Component,
    WeatherTableSwitchDay3Component,
    WeatherTableSwitchDay4Component,
    WeatherTableSwitchDay5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
