import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_DATA } from '../data/config';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private parseWeatherResponse(data: any): Weather {
    const { id, name, main } = data;
    return {
      id,
      name,
      main
    }
  }

  public fetchWeatherDataFromApi(cityId): Observable<Weather> {
    return this.http.get(APP_DATA.WEATHER_API_URL, {
      params: {
        id: cityId,
        APPID: APP_DATA.WEATHER_API_KEY,
        units: 'metric'
      }
    }).pipe(
      map((response) => {
        return this.parseWeatherResponse(response);
      })
    )
  }
}
