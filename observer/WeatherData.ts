import { Subject, Observer } from './interface';

export class WeatherData implements Subject {
  observers: Observer[] = [];
  temperature: number = NaN;
  humidity: number = NaN;
  pressure: number = NaN;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    this.observers = this.observers.filter(obj => obj !== o);
  }

  notifyObservers() {
    this.observers.forEach(obj => obj.update());
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
