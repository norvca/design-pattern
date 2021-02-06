import { WeatherData } from './WeatherData';
import { ConditionsDisplay } from './conditionsDisplay';
import { ForecastDisplay } from './ForecastDisplay';
import { StatisticsDisplay } from './statisticsDisplay';

const weatherData: WeatherData = new WeatherData();

const conditionsDisplay = new ConditionsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);
