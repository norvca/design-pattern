import { Observer, DisplayElement } from './interface';
import { WeatherData } from './WeatherData';

export class ForecastDisplay implements Observer, DisplayElement {
  currentPressure: number = 29.92;
  lastPressure: number = NaN;

  constructor(public weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  update() {
    this.lastPressure = this.currentPressure;
    this.currentPressure = this.weatherData.pressure;
    this.display();
  }

  display() {
    if (this.currentPressure > this.lastPressure) {
      console.log('Improving weather on the way!');
    } else if (this.currentPressure == this.lastPressure) {
      console.log('More of the same');
    } else if (this.currentPressure < this.lastPressure) {
      console.log('Watch out for cooler, rainy weather');
    }
  }
}
