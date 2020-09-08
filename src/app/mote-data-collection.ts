import { SensorData } from './sensor-data';

export class MoteDataCollection {
  temperature: SensorData[];
  humidity: SensorData[];
  pm25: SensorData[];
  co: SensorData[];
  no2: SensorData[];
  o3: SensorData[];
  windSpeed: SensorData[];
  windDirection: SensorData[];

  constructor(){
    this.temperature = []
    this.humidity = [];
    this.pm25 = [];
    this.co = [];
    this.no2 = [];
    this.o3 = [];
    this.windSpeed = [];
    this.windDirection = [];
  }
}
