import { SensorData } from './sensor-data';

export class MoteData {
  temperature: SensorData;
  humidity: SensorData;
  pm25: SensorData;
  co: SensorData;
  no2: SensorData;
  o3: SensorData;
  windSpeed: SensorData;
  windDirection: SensorData;
  date: Date;

  constructor(){
    this.temperature = { type: 'Temperature (°C)', value: -1 };
    this.humidity = { type: 'Humidity (%RH)', value: -1 };
    this.pm25 = { type: 'PM25 (ug/m3)', value: -1};
    this.co = { type: 'CO (PPM)', value: -1 };
    this.no2 = { type: 'NO2 (PPM)', value: -1 };
    this.o3 = { type: 'O3 (PPM)', value: -1 };
    this.windSpeed = { type: 'Wind Speed (m/s)', value: -1 };
    this.windDirection = { type: 'Wind Direction', value: '' };
    this.date = new Date();
  }
}
