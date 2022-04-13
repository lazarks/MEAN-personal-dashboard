import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    let options = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appId', env.apiKey);

    return this.http.get<Weather>(env.apiUrl + 'weather', { params: options });
  }
}
