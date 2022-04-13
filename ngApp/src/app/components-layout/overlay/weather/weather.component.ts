import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Weather } from 'src/app/models/weather.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather: Weather | undefined;
  currentTime: string = new Date(
    moment().valueOf() + 3600 * 1000
  ).toLocaleTimeString('en-GB');

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.search('Niš');
    setInterval(() => {
      this.currentTime = new Date(
        moment().valueOf() + 3600 * 1000
      ).toLocaleTimeString('en-GB');
    }, 1000);
  }

  search(city: string) {
    this.http.getWeather(city).subscribe((weatherData) => {
      this.weather = weatherData;
      console.log(this.weather);
    });
  }
}
