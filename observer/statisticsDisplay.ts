import { Observer, DisplayElement } from './interface';
import { WeatherData } from './WeatherData';

export class StatisticsDisplay implements Observer, DisplayElement {
  maxTemp: number = 0;
  minTemp: number = 200;
  tempSum: number = 0;
  numReadings: number = 0;

  constructor(public weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  update() {
    const temperature = this.weatherData.temperature;

    this.tempSum += temperature;
    this.numReadings++;

    if (temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }

    if (temperature < this.minTemp) {
      this.minTemp = temperature;
    }

    this.display();
  }

  display() {
    console.log(
      `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${
        this.maxTemp
      }/${this.minTemp}`
    );
  }
}
