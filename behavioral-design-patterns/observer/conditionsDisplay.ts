import { Observer, DisplayElement } from './interface';
import { WeatherData } from './WeatherData';

export class ConditionsDisplay implements Observer, DisplayElement {
  temperature: number = NaN;
  humidity: number = NaN;

  constructor(public weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  update() {
    this.temperature = this.weatherData.temperature;
    this.humidity = this.weatherData.humidity;
    this.display();
  }

  display() {
    console.log(
      `Current conditions: ${this.temperature} F degrees and ${this.humidity} humidity`
    );
  }
}
