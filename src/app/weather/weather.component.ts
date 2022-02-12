import { Component, OnInit } from "@angular/core";
import { Weather } from "../weather.model";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  weather!: Weather;
  cityName!: string;

  private ignoreError = (error: Error): void => {
    console.error(error);
  };
  private loadWeather = (weather: Weather): void => {
    this.weather = weather;
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  public findCity(): void {
    this.weatherService
      .getWeather(this.cityName)
      .subscribe({ next: this.loadWeather, error: this.ignoreError });
  }
}
