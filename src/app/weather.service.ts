import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Weather } from "./weather.model";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  private readonly API_URL = "https://api.openweathermap.org/data/2.5/weather";
  private readonly API_KEY = "d1f1192c61bff34c70979e832a2dbab3";
  private readonly API_PARAMS = `?appid=${this.API_KEY}&units=metric&lang=fr&q=`;

  constructor(private http: HttpClient) {}

  public getWeather(cityName: string): Observable<Weather> {
    return this.http
      .get(`${this.API_URL}${this.API_PARAMS}${cityName}`)
      .pipe(map(this.loadWeather));
  }

  private loadWeather(data: any): Weather {
    return {
      temperature: data.main.temp,
      temperatureMax: data.main.temp_max,
      temperatureMin: data.main.temp_min,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  }
}
