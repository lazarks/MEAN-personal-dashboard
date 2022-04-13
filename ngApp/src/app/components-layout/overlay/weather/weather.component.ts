import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather: Weather | undefined;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    console.log(this.weather);
    this.search('Niš');
  }

  search(city: string) {
    this.http.getWeather(city).subscribe((weatherData) => {
      this.weather = weatherData;
      console.log(this.weather);
      this.weather.dt = this.weather.dt * 1000 + 60 * 60 * 1000;
    });
  }
}
